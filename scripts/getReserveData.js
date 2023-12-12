require('dotenv').config();
const aavePoolAbi = require('../aavePoolABI.json');
const { ethers } = require('ethers');

async function main() {
    const provider = new ethers.providers.JsonRpcProvider(process.env.ALCHEMY_RPC_URL);
    const aavePoolAddress = '0x8dFf5E27EA6b7AC08EbFdf9eB090F32ee9a30fcf';
    //const aavePoolAbi = [/* Aave Pool ABI here */];

    const aavePoolContract = new ethers.Contract(aavePoolAddress, aavePoolAbi, provider);

    try {
        // Fetch all reserves
        const reserves = await aavePoolContract.getReservesList();
        console.log('Reserves:', reserves);

        // Iterate through each reserve and fetch data
        for (const reserve of reserves) {
            const reserveData = await aavePoolContract.getReserveData(reserve);
            console.log(`Data for reserve ${reserve}:`, reserveData);
        }
    } catch (error) {
        console.error(`Error fetching data: ${error.message}`);
    }
}

main();

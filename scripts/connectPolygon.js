require('dotenv').config();
const { ethers } = require('ethers');

async function main() {
    const alchemyRpcUrl = process.env.ALCHEMY_RPC_URL;

    if (!alchemyRpcUrl) {
        console.error('Alchemy RPC URL is not defined in .env file');
        return;
    }

    const provider = new ethers.providers.JsonRpcProvider(alchemyRpcUrl);

    try {
        const blockNumber = await provider.getBlockNumber();
        console.log(`Connected to Polygon network. Current block number: ${blockNumber}`);
    } catch (error) {
        console.error(`Failed to connect to the Polygon network: ${error.message}`);
    }
}

main().catch((error) => {
    console.error(`An error occurred: ${error.message}`);
});

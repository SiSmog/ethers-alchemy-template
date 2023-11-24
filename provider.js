import { ethers } from 'ethers';

const API_KEY="$"
const alchemyProvider = ethers.getDefaultProvider("sepolia",API_KEY);

export default alchemyProvider
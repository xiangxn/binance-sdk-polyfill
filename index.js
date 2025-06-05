import './polyfills.js';
import BinanceW3WProvider, { getProvider } from '@binance/w3w-ethereum-provider';
import { MetaMaskSDK } from '@metamask/sdk';

window.BinanceW3WProvider = BinanceW3WProvider;
window.getBinanceProvider = getProvider;
window.MetaMaskSDK = MetaMaskSDK;

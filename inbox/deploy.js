const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('.compile');
const provider = new HDWalletProvider(
    'Lobster wife learn submit custom cup upset fit fever hamster blind visual',
    'https://rinkeby.infura.io/v3/e87a5d84da6b41e8a670e5e5d7c0923f'
);

const web3 = new Web3(provider);
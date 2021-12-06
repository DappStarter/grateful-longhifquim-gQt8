require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow fringe skull guard render remember mistake hover deputy bottom smooth'; 
let testAccounts = [
"0x26967bde7705145b5d0e7ca95705027944dc45cdd3f4eb7cb0fb906ae499f884",
"0xc3e65c10953fe0245b56a6fe82788ca2146f681c2df55a433a8729c335fc68f6",
"0x49a9ffe3ba57dd17c5625b124787e4f5c7fc5311cfe9934badf83afff070d56b",
"0x6b41762930185e1614c1280406ff9b67a377b9527983f01fd14de9317bdb819e",
"0xb27c5b591986de5d230136a136670e0e888d6aadb6c4399572c0dadb36ec238c",
"0x9cc95a0a0b194d12f4aa73b0da16ecdf7c83cc3d91aacbfaf240fef8a2ecc329",
"0x2b9c65f002e6d3ffe85f0260a45d3c49a637650f4e55f9484f0c7bbf881ee315",
"0xcad7d496218e36f928eb1ea8df99d9a2ac9c841087d227d36408fe30618dc76b",
"0x6f03a0ed1de176439435153780ad2a30b667611707efb10159aa3cfa6012877b",
"0x10b99fb78df683165c5c0bab1ecacbf860641d0ffbcd6d5c92edd8e0bb468ba6"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


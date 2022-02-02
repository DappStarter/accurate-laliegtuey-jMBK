require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture brand tail tooth blanket crater remember method hockey enroll flush trouble'; 
let testAccounts = [
"0xf9958031f161e5dcb988a3fe3fab0b2cf8ba451ffe20ef972bde8b1ba3c221a7",
"0xa4d8759d3c05f0960c1da2fb07652dd915812e700b275858edbb184e3d9f267f",
"0xbe2c522caebf59d0bdf7a0dd20b631e7acac6a54e0c0da2b73f5e2fef34c6dff",
"0x46553483da5f39b0510f584c7c32904c9bf5e958ae7712109074ea0a5e85f164",
"0xe2e753ecc0c16071817491c7e014a8081c580465b4f855fc209ddfc27156943d",
"0xd8cb6a6fd09220ecada7dfe99b825460a09d116c6dfdecb9b91122a25e48ab2c",
"0x8190bcdc83fc78956e2258a98561c977aa588a6ac5f7e437c1ad882b4b75f95b",
"0x40a0628120b30cbd4832c45c57e98483e5826e344b09726ac788f348ac9d03a5",
"0x10c9ed323dfcf2ea5c9a7fa95dc779ee16924d618744ae6040d0fea6857f03bb",
"0xe17bc8f56e2f12d0d4955031b7e9c4469541da94de8c2426dc0566a05accdc3b"
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


import IceChain from '../ice-chain'

export const dynastymainnet: IceChain = {
  id: 701322,
  name: 'Dynasty Mainnet Network',
  features: ['swap'],
  network: 'dynastymainnet',
  rpcUrls: {
    public: { http: ['https://mainnet-rpc.dnyscan.io/'] },
    default: { http: ['https://mainnet-rpc.dnyscan.io/'] },
  },
  blockExplorers: {
    default: { name: 'Dynasty Mainnet Explorer', url: 'https://dnyscan.io' },
  },
  nativeCurrency: {
    name: 'DNY',
    symbol: 'DNY',
    decimals: 18,
  },
  contracts: {
    multicall3: {
      address: '0x95220b8a30c7235D31Ef8f9178AE897D332C06BE',
      blockCreated: 3482034,
    },
  },
  blockInterval: 3,
  wrappedNative: {
    address: '0x9829509cc1C745188059F06bd4c79EDa927744aD',
    decimals: 18,
    symbol: 'wDNY',
    name: 'Wrapped DNY',
  },
  swap: {
    factoryAddress: '0xEE86b684927FA868c876AC5d1Bc08aC1eBBe9096',
    routerAddress: '0x899Ed05eb1ECD541d3bf2fCc13519167917a86C1',
    initCodeHash: '0x2e6f3ac94d26d7c85a2e214d04bbb6e1adcf41ed4f66082590a85dce539e1b46',
  },
  smartRouterAddress: '0x16A3247Db4588176c24C6A5F6d3fd2C174122DF5',
}

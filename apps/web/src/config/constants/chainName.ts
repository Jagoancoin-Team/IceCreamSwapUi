import { ChainId } from "@pancakeswap/sdk";


const chainName: Record<ChainId, string> = {
    [ChainId.BITGERT]: 'Bitgert',
    [ChainId.DOGE]: 'Doge',
    [ChainId.DOKEN]: 'Doken',
    [ChainId.FUSE]: 'Fuse',
    [ChainId.XDC]: 'XDC',
    [ChainId.SHARDEUM_TEST]: 'ShardeumDevnet',
}

export default chainName
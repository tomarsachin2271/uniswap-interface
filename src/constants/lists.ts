// the Uniswap Default token list lives here
export const DEFAULT_TOKEN_LIST_URL = 'https://biconomy-header.nyc3.digitaloceanspaces.com/gaslessswap.tokenlist.json'

export const DEFAULT_LIST_OF_LISTS: string[] = [
  DEFAULT_TOKEN_LIST_URL
  // 't2crtokens.eth', // kleros
  // 'tokens.1inch.eth', // 1inch
  // 'synths.snx.eth',
  // 'tokenlist.dharma.eth',
  // 'defi.cmc.eth',
  // 'erc20.cmc.eth',
  // 'stablecoin.cmc.eth',
  // 'tokenlist.zerion.eth',
  // 'tokenlist.aave.eth',
  // 'https://www.coingecko.com/tokens_list/uniswap/defi_100/v_0_0_0.json',
  // 'https://app.tryroll.com/tokens.json',
  // 'https://raw.githubusercontent.com/compound-finance/token-list/master/compound.tokenlist.json',
  // 'https://defiprime.com/defiprime.tokenlist.json',
  // 'https://umaproject.org/uma.tokenlist.json'
]

export const BICONOMY_DEFAULT_LIST: any = {
  name: 'Biconomy',
  logoURI: 'https://biconomy-header.nyc3.digitaloceanspaces.com/Black_750_icon.png',
  keywords: ['biconomy', 'gasless', 'metatransaction'],
  timestamp: '2020-09-21T01:40:34.305Z',
  tokens: [
    {
      address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
      chainId: 1,
      decimals: 18,
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
      name: 'Dai Stablecoin',
      symbol: 'DAI'
    }
  ],
  version: { major: 0, minor: 0, patch: 0 }
}

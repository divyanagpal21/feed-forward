// PriceOracle ABI
export const PRICE_ORACLE_ABI = [
  {"type":"constructor","inputs":[{"name":"initialPrice","type":"uint256","internalType":"uint256"},{"name":"initialOwner","type":"address","internalType":"address"}],"stateMutability":"nonpayable"},
  {"type":"function","name":"getLatestPrice","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},
  {"type":"function","name":"owner","inputs":[],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},
  {"type":"function","name":"renounceOwnership","inputs":[],"outputs":[],"stateMutability":"nonpayable"},
  {"type":"function","name":"setPrice","inputs":[{"name":"newPrice","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},
  {"type":"function","name":"transferOwnership","inputs":[{"name":"newOwner","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},
  {"type":"event","name":"OwnershipTransferred","inputs":[{"name":"previousOwner","type":"address","indexed":true,"internalType":"address"},{"name":"newOwner","type":"address","indexed":true,"internalType":"address"}],"anonymous":false},
  {"type":"event","name":"PriceUpdated","inputs":[{"name":"newPrice","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false}
];

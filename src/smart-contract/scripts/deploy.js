const hre = require('hardhat')

async function main() {
  const EbayCoinFactory = await hre.ethers.getContractFactory('EbayCoin')
  const ebayCoin = await EbayCoinFactory.deploy()

  await ebayCoin.deployed()

  console.log('Ebay Coin deployed to:', ebayCoin.address)
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })

# Zero Knowledge Based Voting project using React and Ethereum

It's a Zero Knowledge Based Voting project using React and Ethereum.

## How I built this project from the beginning.

1. Clone a hardhat + react project as a starting boilerplate from: https://github.com/purusang/coffeeMachine
2. Install depenencies by npm install.
3. Ensure the cloned project is working fine by:
   1. Starting a node using a terminal/cmd line: npx hardhat node
   2. From another terminal compile the smartcontracts by: npx hardhat compile
   3. Now deploy the just compiled CoffeeMachine smartcontract by running te scripts/deploy.js: npx hardhat run --network localhost scripts/deploy.js
      Upon deploying the smart contract there must be two files (CM.json and contract-address.json) created inside frontend/src/contracts.
   4. Install the dependencies of react app by changing directory to frontend: cd frontend
      npm install
   5. Now run the react app by : npm start
      You will see a simple interface in which you will be able to mint tokens and buy coffee with those minted tokens. But make sure that the browser in which the app is opened has a wallet connected to your localhost. Also import some accounts from your local network to the wallet for testing purpose.
      Screenshot of the interface: ![Alt text](Images/CoffeeMachine.PNG)
4. Now work on zk-merkle-tree

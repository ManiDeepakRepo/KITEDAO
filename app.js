const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const abi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "checkTimeLimit",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "limit",
				"type": "uint256"
			}
		],
		"name": "setTimeLimit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "timeLimits",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
const timeControlContract = new web3.eth.Contract(abi, contractAddress);

async function setTimeLimit() {
    const userAddress = document.getElementById('userAddress').value;
    const timeLimit = document.getElementById('timeLimit').value;

	
    // await timeControlContract.methods.setTimeLimit(userAddress, timeLimit).send({ from: web3.eth.defaultAccount })
    //     .on('transactionHash', function(hash){
    //         console.log('Transaction Hash:', hash);
    //     })
    //     .on('receipt', function(receipt){
    //         console.log('Transaction Receipt:', receipt);
    //         document.getElementById('result').innerText = 'Time limit set successfully.';
    //     })
    //     .on('error', function(error){
    //         console.error('Error:', error);
    //         document.getElementById('result').innerText = 'Error setting time limit.';
    //     });
	try {
        const accounts = await web3.eth.getAccounts();
        web3.eth.defaultAccount = accounts[0];

        await timeControlContract.methods.setTimeLimit(userAddress, timeLimit).send({ from: web3.eth.defaultAccount })
            .on('transactionHash', function(hash){
                console.log('Transaction Hash:', hash);
            })
            .on('receipt', function(receipt){
                console.log('Transaction Receipt:', receipt);
                document.getElementById('result').innerText = 'Time limit set successfully.';
            })
            .on('error', function(error){
                console.error('Error:', error);
                document.getElementById('result').innerText = 'Error setting time limit.';
            });
    } 
	catch (error) {
        console.error('Error getting accounts:', error);
    }
}

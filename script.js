document.addEventListener('DOMContentLoaded', () => {
    console.log('DanielCoin site loaded successfully.');

    const header = document.querySelector('header');
    header.addEventListener('click', () => {
        alert('Welcome to DanielCoin!');
    });
});

let contractAddress = "0xYourTokenContractAddress";
let contractABI = []; // ABI-ul complet aici

window.addEventListener('load', async () => {
  if (window.ethereum) {
    window.web3 = new Web3(ethereum);
    await ethereum.enable();

    const contract = new web3.eth.Contract(contractABI, contractAddress);

    // Afisează supply
    const supply = await contract.methods.totalSupply().call();
    document.getElementById("tokenSupply").innerText = supply;

    // Buton "Buy"
    document.getElementById("buyButton").addEventListener("click", async () => {
      const accounts = await web3.eth.getAccounts();
      const account = accounts[0];

      contract.methods.buyTokens().send({ from: account, value: web3.utils.toWei("0.01", "ether") });
    });

    document.getElementById("walletStatus").innerText = "Wallet Connected";
  } else {
    document.getElementById("walletStatus").innerText = "MetaMask not found";
  }
});

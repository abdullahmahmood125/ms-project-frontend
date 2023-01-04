web3Provider: any = null;

connectToMetaMask(){

    let ethereum = window['ethereum'];
    if (typeof ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
    }
    if (ethereum) {
        this.web3Provider = ethereum;
        try {
            // Request account access
            ethereum.request({ method: 'eth_requestAccounts' }).then((address: any) => {
                console.log("Account connected: ", address[0]); // Account address that you had imported
            });
        } catch (error) {
            // User denied account access...
            console.error("User denied account access");
        }
    }
}
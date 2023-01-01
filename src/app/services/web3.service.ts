import { Injectable } from '@angular/core';
import Web3 from 'web3';

@Injectable({
  providedIn: 'root'
})
export class Web3Service {

  constructor() { }

  web3Provider: any = null;

  connectToMetaMask() {

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

  // web3: Web3;
  // connectWalletHandler() {
  //   let ethereum = window['ethereum'];
  //   if (typeof window !== 'undefined' && typeof ethereum !== 'undefined') {
  //     ethereum.request({ method: 'eth_requestAccounts' });
  //     this.web3 = new Web3(ethereum);

  //   } else {
  //     console.log('Please install metamask!');

  //   }
  // }

}

export const connectWalletHandler = () => {

  try {
    let ethereum = window['ethereum'];
    if (typeof window !== 'undefined' && typeof ethereum !== 'undefined') {
      try {
        ethereum.request({ method: 'eth_requestAccounts' }).then((address: any) => {
          console.log("Account connected: ", address[0]); // Account address that you had imported
        });
        new Web3(ethereum);
        console.log('metamask connected!');
      } catch (err) {
        console.log(err.message);
      }

    } else {
      console.log('Please install metamask!');

    }
  } catch (error) {
    alert(error.message);

  }

}

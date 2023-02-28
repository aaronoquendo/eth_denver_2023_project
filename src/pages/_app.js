import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'
import { wrapper } from '../redux/store'
import { Provider } from 'react-redux';
import { Web3Auth } from "@web3auth/modal";

// Components
import Layout from '../components/Layout/Layout';

//Initialize within your constructor
// const web3auth = new Web3Auth({
//   clientId: "YOUR_WEB3AUTH_CLIENT_ID", // Get your Client ID from Web3Auth Dashboard
//   chainConfig: {
//     chainNamespace: "eip155",
//     chainId: "0x1", // Please use 0x5 for Goerli Testnet
//   },
// });

function App({ Component, pageProps, ...rest }) {
  const {store, props} = wrapper.useWrappedStore(rest);

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  // useEffect(async () => {
  //   const initWeb3Auth = async () => {
  //     const delayInMilliseconds = 5000;
  //     setTimeout(async function () {
  //       await web3auth.initModal();
  //     }, delayInMilliseconds);
  
  //   };
  //   initWeb3Auth();
 
  // }, [])

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default App;

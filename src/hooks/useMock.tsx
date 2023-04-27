import { useEffect, useState } from 'react'

declare global{
  interface Window {
    ethereum?:any;
  }
}

const base64 = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjAvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQiPg0KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4NCjxzdmcgdmVyc2lvbj0iMS4wIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgDQoJIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDY0IDY0IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA2NCA2NCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBmaWxsPSIjMzk0MjQwIiBkPSJNNTIsNjMuOTk5Yy0xLjAzOSwwLTIuMDYyLTAuNDA2LTIuODI4LTEuMTcyTDMyLDQ1LjY1NUwxNC44MjgsNjIuODI3DQoJCWMtMS4xNDgsMS4xNDUtMi44NjMsMS40ODgtNC4zNTksMC44NjdDOC45NzMsNjMuMDc3LDgsNjEuNjE2LDgsNTkuOTk5di01NmMwLTIuMjExLDEuNzg5LTQsNC00aDQwYzIuMjExLDAsNCwxLjc4OSw0LDR2NTYNCgkJYzAsMS42MTctMC45NzMsMy4wNzgtMi40NjksMy42OTVDNTMuMDM1LDYzLjkwMSw1Mi41MTYsNjMuOTk5LDUyLDYzLjk5OXogTTMyLDM1Ljk5OWMxLjAyMywwLDIuMDQ3LDAuMzkxLDIuODI4LDEuMTcyTDQ4LDUwLjM0Mw0KCQlWNy45OTlIMTZ2NDIuMzQ0bDEzLjE3Mi0xMy4xNzJDMjkuOTUzLDM2LjM5LDMwLjk3NywzNS45OTksMzIsMzUuOTk5eiIvPg0KCTxwYXRoIGZpbGw9IiNGNzZENTciIGQ9Ik0zMiwzNS45OTljMS4wMjMsMCwyLjA0NywwLjM5MSwyLjgyOCwxLjE3Mkw0OCw1MC4zNDNWNy45OTlIMTZ2NDIuMzQ0bDEzLjE3Mi0xMy4xNzINCgkJQzI5Ljk1MywzNi4zOSwzMC45NzcsMzUuOTk5LDMyLDM1Ljk5OXoiLz4NCjwvZz4NCjwvc3ZnPg=='

const useMock = () => {

  const [wallets, setWallets] = useState<EVMProviders>()

  useEffect(()=>{
    if(!window?.ethereum) return

    setWallets({
      "metamask":{
        info:{
          uuid:'1',
          name:'MetaMask',
          icon:base64,
          description:'An awesome wallet for awesome people'
        },
        ...window.ethereum 
      },
      "coinbase":{
        info:{
          uuid:'2',
          name:'Coinbase',
          icon:base64,
          description:'An awesome wallet for awesome people'
        },
        ...window.ethereum 
      },
      "trustwallet":{
        info:{
          uuid:'3',
          name:'Trust Wallet',
          icon:base64,
          description:'An awesome wallet for awesome people'
        },
        ...window.ethereum
      },
      "phantom":{
        info:{
          uuid:'4',
          name:'Phantom',
          icon:base64,
          description:'An awesome wallet for awesome people'
        },
        ...window.ethereum
      },
    })
  },[])


  return {wallets}
}

export default useMock
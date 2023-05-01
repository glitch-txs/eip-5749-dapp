import React, { useEffect, useState } from 'react'
import s from './s.module.scss'
import useMock from '@/hooks/useMock'
import Image from 'next/image'

declare global{
  interface Window {
    evmproviders?:EVMProviders;
  }
}

const Wallets = () => {

  const [provider, setProvider] = useState<ProviderWithInfo>()
  const [accounts, setAccounts] = useState<string[]>()

  // const {wallets: injectedWallets} = useMock()

  const [injectedWallets, setInjectedWallets] = useState<EVMProviders>()

  useEffect(()=>{
    setTimeout(()=>{
      if(window.evmproviders)
      walletInit()
      setInjectedWallets(window.evmproviders)
    },500)
  },[])


  async function handleWallet(wallet: ProviderWithInfo){
    const accounts = await wallet.request?.({method: 'eth_requestAccounts'})
    setAccounts(accounts)
    setProvider(wallet)
  }

  function walletInit(){
    if(window.evmproviders){
      //Check if user is connected
      Object.entries(window.evmproviders).forEach(async([k, v], i)=>{
        const accounts = await v.request?.({method: 'eth_accounts'})
        setAccounts(accounts)
        setProvider(v)
        return
      })
    }
  }

  return (
    <div style={{display: 'flex', flexDirection:'column', gap:'14px'}} >
    <section className={s.section} >
      <div className={s.container} >
        {injectedWallets ? Object.entries(injectedWallets).map(([k, v], i)=>(
          <div key={k} className={s.wallet} onClick={()=>handleWallet(v)} >
            <span>{v.info.icon && <Image src={v.info.icon} width={30} height={30} alt=''/>} {v.info.name}</span>
            <p>{v.info.description && v.info.description}</p>
          </div>
        )) :
        <div>
          there are no providers injected in window.evmproviders
        </div>
        }
      </div>
    </section>
    {accounts && accounts[0]}
    </div>
  )
}

export default Wallets
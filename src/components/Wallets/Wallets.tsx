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
      setInjectedWallets(window.evmproviders)
    },500)
  },[])


  const handleWallet = async(wallet: ProviderWithInfo)=>{
    const accounts = await wallet.request?.({method: 'eth_requestAccounts'})
    setAccounts(accounts)
    setProvider(wallet)
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
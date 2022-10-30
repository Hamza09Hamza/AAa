import Head from 'next/head'
import WhatIn from '../components/WhatsinA&A.jsx';
import HomePage from './../components/HomePage.jsx';


export default function Home() {
  return (
     <> <Head>
        <title>Ask & Answer</title>
        <meta 
          name="description" 
          content={` Ask & Answer  is where you can find all  the  Answers for your Question 
          , Also  challenging your friends and compete with them or everbody about any subject `}/>
        <link rel="icon" href="/Logo.png" />
      </Head>
      <HomePage/>
      <WhatIn/>
     
    </>
  )
}

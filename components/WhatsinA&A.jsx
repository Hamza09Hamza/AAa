import React from 'react'
import Circul from './Circurls'
import styles from '../styles/Home.module.css'
const WhatIn = () => {
    return ( <>
        <main className={styles.Main}>
            <Circul number={"fourth"}/>
            <Circul number={"seconde"}/>
            <Circul number={"fifth"}/>
        
            <h1 className={styles.HeaderTitle}> What's in Ask & Answer : </h1>
            <section className={styles.SectionDisplay}> 
                <div className={styles.gridElements}>
                    <img src="/Chat.png" className={styles.componentImage} alt="Chats" />
                    <div className={styles.componentText}>
                        <h2>Chat with Anyone</h2>
                        <span>
                            In any subject  suits you, 
                            you can talk  with our community 
                             about it freely and disscuss  about it 
                        </span>
                    </div>
                </div>
                <div className={styles.gridElements}>
                    <img src="/askQuestions.png" className={styles.componentImage} alt="ask Questions" />
                    <div className={styles.componentText}>
                        <h2>Find Answer’s to your Questions </h2>
                        <span>
                        Post your question and check and A&A family is  here for you to answer 
                        , So you for them as well  
                        </span>
                    </div>
                </div>
                <div className={styles.gridElements}    >
                    <img src="/Compete.png" className={styles.componentImage} alt="Winner" />
                    <div className={styles.componentText} >
                        <h2>Debate with friend </h2>
                        <span >
                        Start  debats with any one from  A&A community , 
                        more you public  debats more you win A&A points 
                        </span>
                    </div>
                </div>
                
            </section>
            
        </main>
    </> );
}
 
export default WhatIn;
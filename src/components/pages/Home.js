import React from 'react'
import Passagemform from '../passagens/Passagemform'
import styles from './Home.module.css'
function Home(){
    return(
        <div>
        <div>
        <h1 className={styles.text}> Bem-vindo a Tour BR, encontre aqui a sua melhor viagem!</h1>
        </div>
        
        <div className={styles.passagemform}> 
       
       <Passagemform btnText="Buscar Passagens"/>
        
       </div>
       </div>
       
    
    )
}

export default Home
import React from 'react'
import Cadastroform from '../form/Cadastroform'
import styles from './formscentro.module.css'

function Cadastro(){
    return(
        
        <div className={styles.forms}>
        
        <Cadastroform btnText= "Cadastrar"/>
        </div>
        
        
        
    )
}

export default Cadastro
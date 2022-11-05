import React from 'react'
import Logform from '../form/Logform'
import styles from './formscentro.module.css'
function Login(){
    return(
        
        <div className={styles.forms}>
        <Logform btnText="Entrar" />
        </div>
    )
}

export default Login
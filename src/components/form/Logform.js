import React from 'react'
import styles from './Logform.module.css'
import Input from './input'
import Submitbutton from './Submitbutton'
import login from '../images/icons8-login-48.png'

function Logform({btnText}){
    return(
        <div className={styles.passagemform}>
        <div>
          <h2> <img src ={login} width = "45px"/> Faça seu login:</h2>
        </div>
        <form className={styles.form}>
          <div className={styles.inputform}>
          <div>
          <Input
          type = "text"
          name = "name"
          placeholder = "Email"
          />
          </div>
          <div>
          <Input
          type = "password"
          name = "name"
          placeholder = "Senha"
          />
          </div>
          </div>
          <Submitbutton text={btnText} />
          </form>
          </div>
        
    )
}

export default Logform
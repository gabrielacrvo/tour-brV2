import React from 'react'
import styles from './Logform.module.css'
import Input from './input'
import Submitbutton from './Submitbutton'

function Logform({btnText}){
    return(
        <div className={styles.passagemform}>
        <div>
          <h3>  Login</h3>
        </div>
        <form className={styles.form}>
          <div className={styles.inputform}>
          <div>
          <Input
          type = "text"
          name = "name"
          placeholder = "Nome"
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
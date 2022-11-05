import React from 'react'
import Input from './input'
import styles from './Cadastroform.module.css'
import Submitbutton from './Submitbutton'

function Cadastroform({btnText}){
    return(
        <div className={styles.cadform}>
        <div>
          <h2>Cadastre-se:</h2>
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
          type = "text"
          name = "name"
          placeholder = "CPF"
          />
          </div>
          <div>
          <Input
          type = "text"
          name = "name"
          placeholder = "Rua"
          />
          </div>
          <div>
          <Input
          type = "text"
          name = "name"
          placeholder = "UF"
          />
          </div>
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
          name = "password"
          placeholder = "Senha"
          />
          </div>
          
          </div>
          <Submitbutton text={btnText} />
          </form>
      </div>
          

    )
}

export default Cadastroform
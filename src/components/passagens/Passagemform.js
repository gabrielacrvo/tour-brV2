import React from "react";
import styles from './Passagemform.module.css'
import Input from "../form/input";
import Submitbutton from "../form/Submitbutton";
import aviao from '../images/icons8-airplane-40.png'
function Passagemform({btnText}){
    return(
      
      <div className={styles.passagemform}>
        <div>
          <h3><img src={aviao}/>  Buscar passagem:</h3>
        </div>
        <form className={styles.form}>
          <div className={styles.inputform}>
          <div>
          <Input
          type = "text"
          name = "name"
          placeholder = "ORIGEM"
          />
          </div>
          <div>
          <Input
          type = "text"
          name = "name"
          placeholder = "DESTINO"
          />
          </div>
          <div className={styles.data}>
              <input type="date"/>
            </div>
            </div>
          <div>
          <Input
          type="number"
          text="Passageiros:"
          placeholder= "1 Passageiro" 
          />
          </div>
          <Submitbutton text={btnText} />
          </form>
      </div> 
          
        
            
            
           
       
    )
}

export default Passagemform
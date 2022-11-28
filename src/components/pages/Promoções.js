import React from 'react'
import Cardpromo from '../Cardpromo'
import styles from './Promo.module.css'
import promo from '../images/icons8-discount-48.png'
function Promoções(){
    return(
        <div>
           <div className={styles.container}>
              <h1><img src={promo} width = "43em"/>Promoções</h1>
           </div>
          <div>
            <Cardpromo/>
          </div>
        </div>
    ) 
}

export default Promoções
import React from 'react'
import styles from './Cardpromo.module.css'
import portog from './images/portog.svg'
import gramado from './images/Gramado-RS-Visit-Brasil-3-min-3.webp'
import jalap from './images/jalap.svg'
import macap from './images/macap.svg'
import novoai from './images/novoairao.svg'
import ourop from './images/ouropt.svg'
import fn from './images/fenoronha.svg'
import sluis from './images/sluis.svg'
function Cardpromo(){
    return(
        <div className= {styles.container}>
        <div className={styles.gallery}>
        <a target="_blank">
          <img src={portog} alt="Porto de Galinhas" width="600" height="400"/>
        </a>
        <div class={styles.desc}>
          <p><strong>Promoção: R$ 993,90</strong></p> Porto de Galinhas-PE
        </div>
        </div>
        
        <div className={styles.gallery}>
        <a target="_blank">
          <img src={gramado} alt="Gramado-RS" width="600" height="400"/>
        </a>
        <div class={styles.desc}>
          <p><strong>Promoção: R$ 815,00</strong></p> Gramado-RS
        </div>
        </div>

        <div className={styles.gallery}>
        <a target="_blank">
          <img src={jalap} alt="Jalapão-TO" width="600" height="400"/>
        </a>
        <div class={styles.desc}>
          <p><strong>Promoção: R$ 982,00</strong></p> Jalapão-TO
        </div>
        </div>

        <div className={styles.gallery}>
        <a target="_blank">
          <img src={macap} alt="Macapá-AP" width="600" height="400"/>
        </a>
        <div class={styles.desc}>
          <p><strong>Promoção: R$ 786,00</strong></p> Macapá-AP
        </div>
        </div>

        <div className={styles.gallery}>
        <a target="_blank">
          <img src={novoai} alt="Novo Airão-AM" width="600" height="400"/>
        </a>
        <div class={styles.desc}>
          <p><strong>Promoção: R$ 878,70</strong></p> Novo Airão-AM
        </div>
        </div>

        <div className={styles.gallery}>
        <a target="_blank">
          <img src={ourop} alt="Ouro Preto-MG" width="600" height="400"/>
        </a>
        <div class={styles.desc}>
          <p><strong>Promoção: R$ 839,00</strong></p> Ouro Preto-MG
        </div>
        </div>

        <div className={styles.gallery}>
        <a target="_blank">
          <img src={fn} alt="Fernando de Noronha-PE" width="600" height="400"/>
        </a>
        <div class={styles.desc}>
          <p><strong>Promoção: R$ 1590,00</strong></p> Fernando de Noronha-PE
        </div>
        </div>

        <div className={styles.gallery}>
        <a target="_blank">
          <img src={sluis} alt="São Luís-MA" width="600" height="400"/>
        </a>
        <div class={styles.desc}>
          <p><strong>Promoção: R$ 815,00</strong></p> São Luís-MA
        </div>
        </div>
        
        </div>
    )
}

export default Cardpromo
import React from 'react'
import styles from './Card.module.css'
import belem from './images/belem-do-para.webp'
import bonito from './images/bonitomss.svg'
import fn from './images/fenoronha.svg'
import foz from './images/fozig.svg'
import gramado from './images/Gramado-RS-Visit-Brasil-3-min-3.webp'
import jalap from './images/jalap.svg'
import macap from './images/macap.svg'
import novoai from './images/novoairao.svg'
import ourop from './images/ouropt.svg'
import portog from './images/portog.svg'
import sluis from './images/sluis.svg'
import valeita from './images/valedoitajai.webp'


function Card(){
    return(
        <div className={styles.container}>
        <div className={styles.gallery}>
        <a target="_blank">
          <img src={belem} alt="Belém-PA"/>
        </a>
        <div className={styles.desc}>Belém-PA</div>
      </div>

       <div className={styles.gallery}>
       <a target="_blank">
          <img src={bonito} alt="Belém-PA"/>
       </a>
      <div className={styles.desc}>Bonito-MS</div>
      </div>

      <div className={styles.gallery}>
       <a target="_blank">
          <img src={fn} alt="Belém-PA"/>
       </a>
       <div className={styles.desc}>Fernando de Noronha-PE</div>
      </div>
      <div className={styles.gallery}>
       <a target="_blank">
          <img src={foz} alt="Belém-PA"/>
       </a>
      <div className={styles.desc}>Foz do Iguaçu-PR</div>
      </div>

      <div className={styles.gallery}>
       <a target="_blank">
          <img src={gramado} alt="Gramado-RS"/>
       </a>
      <div className={styles.desc}>Gramado-RS</div>
      </div>

      <div className={styles.gallery}>
       <a target="_blank">
          <img src={jalap} alt="Jalapão-TO"/>
       </a>
      <div className={styles.desc}>Jalapão-TO</div>
      </div>

      <div className={styles.gallery}>
       <a target="_blank">
          <img src={macap} alt="Macapá-AP"/>
       </a>
      <div className={styles.desc}>Macapá-AP</div>
      </div>

      <div className={styles.gallery}>
       <a target="_blank">
          <img src={novoai} alt="Novo Airão-AM"/>
       </a>
      <div className={styles.desc}>Novo Airão-AM</div>
      </div>

      <div className={styles.gallery}>
       <a target="_blank">
          <img src={ourop} alt="Ouro Preto-MG"/>
       </a>
      <div className={styles.desc}>Ouro Preto-MG</div>
      </div>

      <div className={styles.gallery}>
       <a target="_blank">
          <img src={portog} alt="Porto de Galinhas-PE"/>
       </a>
      <div className={styles.desc}>Porto de Galinhas-PE</div>
      </div>

      <div className={styles.gallery}>
       <a target="_blank">
          <img src={sluis} alt="São Luís-MA"/>
       </a>
      <div className={styles.desc}>São Luís-MA</div>
      </div>

      <div className={styles.gallery}>
       <a target="_blank">
          <img src={valeita} alt="Vale do Itajaí-SC"/>
       </a>
      <div className={styles.desc}>Vale do Itajaí-SC</div>
      </div>
</div>
    )
}

export default Card
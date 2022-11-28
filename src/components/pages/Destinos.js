import React from 'react'
import Card from '../../components/Card'
import styles from './Destinos.module.css'
import map from '../images/icons8-map-48.png'
function Destinos(){
    return(
        <div>
            <div className={styles.container}>
        <h1> <img src={map} width = "43em"/><strong> Destinos</strong></h1>
        </div>
          <div>
       <Card/>
       </div>
    </div>
    )
}

export default Destinos
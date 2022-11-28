import React from 'react'
import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import LG from '../images/LG.png'
import {MdOutlineLocalOffer, MdLogin, MdOutlinePermContactCalendar} from "react-icons/md";
import {RiRoadMapLine} from "react-icons/ri"
function Navbar(){
    return(
      <nav className={styles.navbar}>
        
        <Container>
          <ul className={styles.list}>
           <li className= {styles.item}><Link to = "/"><img src={LG} width="75px"/></Link></li>
           <li className= {styles.item}><Link to = "/">Home</Link></li>
           <li className= {styles.item}><Link to = "/destinos"><RiRoadMapLine/> Destinos</Link></li>
           <li className= {styles.item}><Link to = "/promoções"><MdOutlineLocalOffer/> Promoções</Link></li>
           <li className= {styles.item}><Link to = "/cadastro"><MdOutlinePermContactCalendar/> Cadastre-se</Link></li>
           <li className= {styles.item}><Link to = "/login"><MdLogin/>  Login</Link></li>
          </ul>
        </Container>
        
      </nav>

    )
}

export default Navbar
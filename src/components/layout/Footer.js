import React from "react";
import {FaCcMastercard, FaCcPaypal, FaCcVisa, FaCcDinersClub} from 'react-icons/fa'
import styles from './Footer.module.css'
function Footer(){
     return(
        <footer className={styles.footer}>
         <ul className={styles.social_list}>
            <li>
            <FaCcMastercard/>
            </li>
            <li>
             <FaCcPaypal/>
            </li>
            <li>
            <FaCcVisa/>
            </li>
            <li>
               <FaCcDinersClub/>
            </li>
         </ul>
         <p className={styles.copy_right}><span> Tour BR</span> &copy; 2022</p>
        </footer>
     )
}

export default Footer
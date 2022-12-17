import React from 'react'
import styles from "./Main.module.scss"


export default function Maincomp() {
    return (
        <>
<div className={styles.bg}>
<video autoPlay muted loop style={{ width: '100%', backgroundSize:'cover'}}>
        <source src="/video/my.mp4" />
      </video>
    
    <div className={styles.overlay}>

        <div className={styles.head}>Hi</div>
    </div>
    
  </div>
  </>
    )
}
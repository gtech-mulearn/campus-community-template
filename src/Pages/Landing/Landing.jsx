import React from 'react'
import styles from "./Landing.module.css"

const Landing = () => {
  return (
    <>
   <div className={styles.main_container}>
    <div className={styles.first_view_container}>
        <div className={styles.first_view}>
            This is the Landing Page
        </div>
    </div>
   </div>
    </>
  )
}

export default Landing
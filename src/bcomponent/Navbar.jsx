import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const styles ={
        link:{
            color:'white',
            backgroundColor:'black',
            padding:'5px 10px',
            borderRadius:'5px',
            textDecoration:'none',
            margin:'0.5rem'
        
        }
    }
  return (
    <div>
        <Link to ="/" style={styles.link}>Home</Link>
        <Link to ="/about" style={styles.link}>About us</Link>
        <Link to ="/contact" style={styles.link} >Contact us</Link>
    </div>
  )
}

export default Navbar
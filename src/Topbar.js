import React from 'react';
import classes from './Topbar.module.css';
 const Topbar= (props) =>{

    return(
        <nav className={classes.Topbar}>
         <img src="amazonlogo.png" alt="amazon logo.png"/>
       </nav> 
    );
}
export default Topbar;
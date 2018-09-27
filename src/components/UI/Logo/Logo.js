import React from 'react';
import Class from './Logo.css';
import burgerLogo from '../../../asset/burger-logo (1).png';

const logo =(props)=>(
    <div className={Class.Logo}>
        <img src={burgerLogo} alt="myBurger" className={Class.LogoImage}/>
    </div>
);

export default logo;
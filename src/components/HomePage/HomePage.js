import React from 'react'
import GridList from '@material-ui/core/GridList';
import classes from './HomePage.css';
import image1 from '../../asset/burger.jpg';
import image2 from '../../asset/burger-logo (1).png'


const homePage =() =>{
    return(
        <div className={classes.root}>
            <GridList cellHeight={160} style={{width: '500px', height: '400px'}} >
                <img src ={image1} />
            </GridList>

            <GridList cellHeight={160} >
                <img src ={image2} />
            </GridList>
        </div>
    )

};

export default homePage;
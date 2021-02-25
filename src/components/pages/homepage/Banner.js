
import React from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
// import Link from '@material-ui/core/Link';
 import { Container } from '@material-ui/core';
 import BackgroundImage from './images/newbg.jpg' 
 import './Banner.css'


 

export default function Banner() {


  return (
      <Container>
      <div className="hero-image">
      <img id="hero" src = {BackgroundImage} alt ="image"  />
        <div className="hero-text">
            
        </div>
     </div>
   </Container>
  );
}



import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  container: {
    backgroundImage: 'url(../public/portada.png)',
    height: '100vh',
  },
}

class Home extends React.Component  {
  render(){
    const { classes } = this.props
    return (
      <div className={classes.container}>
        <img src={'../public/portada.png'} />
        Adrian Zubieta
      </div>
    );
  } 
}

export default injectSheet(styles)(Home);

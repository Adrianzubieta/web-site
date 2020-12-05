import React from 'react';
import injectSheet from 'react-jss';
import Navbar from './components/Navbar';
import Formation from './components/Formation';

const styles = {
  header: {
    display: 'flex',
    color: 'white',
    justifyContent: 'space-between'
  },
}

class Home extends React.Component  {
  constructor(props) {
    super(props);
    // No hagas esto!
    this.state = { 
      keySelected: '1',
    };
   }

  handleSelect = (key) => {
    this.setState({keySelected: key});
  }

  render(){
    const { classes } = this.props
    const {keySelected} = this.state;;
    return (
      <React.Fragment>
        <Navbar handleSelect={this.handleSelect}/>
        <Formation />
      </React.Fragment>
    );
  } 
}

export default injectSheet(styles)(Home);

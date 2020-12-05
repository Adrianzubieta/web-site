import React from 'react';
import { Layout, Menu } from 'antd';
import { FormOutlined, ExperimentOutlined, UserOutlined, HomeOutlined } from '@ant-design/icons';
import injectSheet from 'react-jss';

const { Header } = Layout;

const styles = {
  header: {
    display: 'flex',
    color: 'white',
    justifyContent: 'space-between'
  },
}

class Navbar extends React.Component  {
 
  handleSelect = ({ key }) => {
    const { handleSelect } = this.props;
    handleSelect(key);
  }

  render(){
    const { classes } = this.props
    return (
      <Layout>
        <Header className={classes.header}>
          <div>
            Adrian Zubieta
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            onSelect={this.handleSelect}
          >
            <Menu.Item key="1" icon={<HomeOutlined />}>Inicio</Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>Sobre Mi</Menu.Item>
            <Menu.Item key="3" icon={<ExperimentOutlined />}>Formacion</Menu.Item>
            <Menu.Item key="4" icon={<FormOutlined />}>Contacto</Menu.Item>
          </Menu>
        </Header>
      </Layout>
    );
  } 
}

export default injectSheet(styles)(Navbar);
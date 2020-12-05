import React from 'react';
import injectSheet from 'react-jss';
import { Form, Input, Button } from 'antd';

const { Item } = Form;
const { TextArea } = Input;

const styles = {
  container: {
   display: 'flex',
   justifyContent: 'center',
   padding: '3%',
  },
  form: {
    width: '70%',
  }
}

class Formation extends React.Component  {
 
  onFinish = values => {
    console.log('Success:', values);
  };

  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  render(){
    const { classes } = this.props
    return (
      <div className={classes.container}>
        <Form
          name="contact"
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          className={classes.form}
        >
          <Item
            name="email"
            rules={[{ required: true, message: 'Por favor ingrese su email!' }]}
          >
            <Input placeholder='Email'/>
          </Item>
    
          <Item
            name="subject"
            rules={[{ required: true, message: 'Por favor ingrese su asunto!' }]}
          >
            <Input placeholder='Asunto' />
          </Item>
          <Item
            name="message"
            rules={[{ required: true, message: 'Por favor ingrese su mensaje!' }]}
          >
            <TextArea placeholder='Mensaje' />
          </Item>
          <Item>
            <Button type="primary" htmlType="submit">
              Enviar
            </Button>
          </Item>
        </Form>
      </div>
    );
  } 
}

export default injectSheet(styles)(Formation);
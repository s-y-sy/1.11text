import React, { Component } from 'react'
import { Form, Input, Button, Icon, message } from 'antd'
import axios from 'axios'
import logo from './logo.png'
import './index.less'
const { Item } = Form
@Form.create()
 class Login extends Component {
    validator = (rule,value,callback)=>{
        const name = rule.field === 'username' ? '用户名' : '密码'
        const reg = /^\w+$/
        if (!value) {
            // 输入值为空
            callback(`${name}不能为空`);
          } else if (value.length < 4) {
            callback(`${name}必须大于4位`);
          } else if (value.length > 15) {
            callback(`${name}必须小于15位`);
          } else if (!reg.test(value)) {
            callback(`${name}只能包含英文、数字、下划线`);
          }
          callback()
    }
    login = e =>{
        e.prevent.Defaule()
        this.props.form.validateFields((err,values)=>{
            if(!err){
                const {username,password} = values
                axios
                    //会有跨域问题
                    .post('/api/login',{username,password})
                    .then(response=>{
                        if (response.data.status ===0){
                            this.props.history.replace('/')
                        }else{
                            message.error(response.data.msg)
                        }
                    })
                    .catch(err=>{
                        console.log(err)
                        message.error()
                    })
            }
        }
        )
    }
    render() {
        const {getFieldDecorator} = this.props.form
        return (
            <div className='login'>
              <header className='login-header'>
                <img src={logo} alt='logo' />
                <h1>React项目: 后台管理系统</h1>
              </header>
              <section className='login-section'>
                <h3>用户登录</h3>
                <Form className='login-form' onSubmit={this.login}>
                  <Item>
                    {getFieldDecorator('username', {
                      rules: [
                        {
                          validator: this.validator
                        }
                      ]
                    })(
                      <Input
                        prefix={
                          <Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />
                        }
                        placeholder='用户名'
                      />
                    )}
                  </Item>
                  <Item>
                    {getFieldDecorator('password', {
                      rules: [
                        {
                          validator: this.validator
                        }
                      ]
                    })(
                      <Input
                        prefix={
                          <Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />
                        }
                        placeholder='密码'
                      />
                    )}
                  </Item>
                  <Item>
                    <Button
                      className='login-form-btn'
                      type='primary'
                      htmlType='submit'
                    >
                      登录
                    </Button>
                  </Item>
                </Form>
              </section>
            </div>
          );
        }
      }
export default Login

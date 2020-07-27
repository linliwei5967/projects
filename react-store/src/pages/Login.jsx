import React, { Fragment } from 'react';

class Login extends React.Component {
  // State
  constructor(props){
    super(props)
    this.state = {
      isLike: false
    }
  }

  // 通过Refs来访问
  emailRef = React.createRef()
  PasswordRef = React.createRef()

  // 点赞事件
  HandleParse = () =>{
    this.setState({
      isLike: !this.state.isLike
    })
  }

  HandleSubmit = (event) =>{
    // 1.阻止默认事件行为
    event.preventDefault();

    // 2.获取表单数据
    const formData = {
      eamil: this.emailRef.current.value,
      Password: this.PasswordRef.current.value
    }

    console.log(formData)
    // 3.处理登录逻辑

    // 4.跳转到首页视图
    // this.props.history.push('/')
  }

  render() {
    return (
      <Fragment>
        <div className="login-wrapper">
          <form className="box login-box" onSubmit={this.HandleSubmit}>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input className="input" type="text" placeholder="Email" ref={this.emailRef}/>
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input className="input" type="text" placeholder="Password" ref={this.PasswordRef}/>
              </div>
            </div>
            <div className="control">
              <button className="button is-fullwidth is-primary">Login</button>
            </div>
          </form> 

          <div className="control">
              <button className="button is-fullwidth is-link" onClick={this.HandleParse}>
                {this.state.isLike?'No':'👍'}
              </button>
          </div>
        </div>
      </Fragment>
      // JSX 需要Babel转码器 Emmet
    )
  }
}

export default Login

import React from "react";

class Header extends React.Component {

  render() {
    return (
      <div className="header">
        <div className="grid">
          <div className="start">
            <a href="/">Home</a>
          </div>
          <div className="end">
            { this.props.nickName? (
              <span className="nickname">
                <i className="far fa-user"></i>
                {this.props.nickName}
              </span>
            ) : ( 
              <React.Fragment>
                  <a href="/">Login</a>
                  <a href="/">Register</a>
              </React.Fragment> 
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

import React from "react";
import { withRouter } from "react-router-dom";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const formValid = ({formErrors, ...rest}) =>{
  let valid = true;
  Object.values(formErrors).forEach(val =>{
    val.length > 0 && (valid = false);
  });
  Object.values(rest).forEach(val=>{
    val === null && (valid = false);
  })
  return valid;
}
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      name: null,
      email: null,
      password: null,
      formErrors:{
        name: "",
        email: "",
        password: ""
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const {name , value} = e.target;
    let formErrors = { ...this.state.formErrors} ;
    switch(name){
      case "name":
      formErrors.name = value.length < 3 && value.length > 0 ? "minimum 3 characters required" : "";
      break;
      case "email":
        formErrors.email = emailRegex.test(value) ? "" : "invalid email address";
        break;
      case "password":
        formErrors.password = value.length < 6 ? "minimum 6 characters required" : "";
        break;
      default:
        break; 
    }
    this.setState({formErrors, [name] : value}, ()=> console.log(this.state));
  }
  handleSubmit(e){
    if(formValid(this.state)){
      this.props.history.push("/blog");
    }
    else{
      console.error('invalid submission');
    }
  }
  render() {
    const{formErrors} = this.state;
    return (
      <div>
        <h2 className="form-title">Login</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input
            className={formErrors.name.length > 0 ? "error" : null}
            type="text"
            noValidate
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Your Name"
          />
          {formErrors.name.length > 0 && (<span style={{color:"red", fontSize:16}}>{formErrors.name}</span>)}
          <br />
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            placeholder="Enter your Email"
            onChange={this.handleChange}
          />
          {formErrors.email.length > 0 &&(<span style={{color:"red", fontSize:16}}>{formErrors.email}</span>)}
          <br />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.handleChange}
          />
          {formErrors.password.length > 0 && (<span style={{color:"red", fontSize:16}}>{formErrors.password}</span>)}
          <br />
            <button className="form-button">Submit</button>
        </form>
      </div>
    );
  }
}
export default withRouter(Login);

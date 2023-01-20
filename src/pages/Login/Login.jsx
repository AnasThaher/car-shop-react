import React ,{useState} from 'react'
import { json, useNavigate } from 'react-router-dom';
// import "./Login.css"
import './Login.css'
import carImg from '../../assets/image/car.png';
import swal from 'sweetalert';

const Login=()=> {
    const [user, setuser] = useState(false);
    
  const navigate = useNavigate();
  const  Loginfun = (request)=>{
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: request.email, password:request.password })
    };
        fetch("http://127.0.0.1:8000/api/login",requestOptions)
          .then((res) => res.json())
          .then((json) => {
            if(json.email){
                localStorage.setItem("loginUser",JSON.stringify(json));
                localStorage.setItem("isLogin",true);
                navigate('/', { replace: true });
            }else{
                swal('Email or password have error');
    
            }
      })
    }
  const handleLogin = (e) => {
    e.preventDefault();
  

    const email = e.target.email.value;
    const password = e.target.password.value;
    const request = {
         'email' : e.target.email.value,
         'password' : e.target.password.value,
    }
    Loginfun(request);
       
  }

  return (
    
    <div>
      
      
      <div className="Main-container">
        <div className="container-login">
            <div className="wrap-login">

                <div className="login-pic">
                    <img src={carImg} alt="IMG" />
                </div>

                <form className="login-form" onSubmit={handleLogin}>
                    <span className="login-form-title">Login</span>

                    <div className="wrap-input">
                        <input type="text" className="input" name="email" placeholder="Email" required />
                        <span className="focus-input"></span>
                        <span className="symbol-input">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                        </span>
                    </div>
                    <div className="wrap-input">
                        <input type="password" className="input" name="password" placeholder="Password" required />
                        <span className="focus-input"></span>
                        <span className="symbol-input">
                            <i className="fa fa-lock" aria-hidden="true"></i>
                        </span>
                    </div>

                    <div className="login-form-btn-container">
                        <button className="login-form-btn">Login</button>
                    </div>

                  <div className="text-center p-t-1">
                      <span className="txt1">Forgot</span>
                      <a href="#" className="txt2"> Username / Password ?</a>
                  </div>
                  <div className="text-center p-t-2">
                      <a href="#" className="txt2">Create Your Account <i className="fa fa-long-arrow-right " aria-hidden="true"></i></a>
                  </div>

                </form>

            </div>
        </div>
    </div>
      </div>
  )
}

export default Login
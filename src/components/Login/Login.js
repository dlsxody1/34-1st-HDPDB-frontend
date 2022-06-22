import React from 'react';
import './Login.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from 'react';

const Login = ({ data, closeModal }) => {
  const { title, subtitle, facebook, google, btn, text, footer } = data;
  const [loginInfo, setLoginInfo] = useState({
    id: '',
    pw: '',
  });
  const [idCheck, setIdCheck] = useState('');
  const [pwCheck, setPwCheck] = useState('');

  const [titleConvert, setTitleConvert] = useState([]);
  // useEffect(() => {
  //   const SighUpTitle = {
  //     title: 'GET $10 OFF',
  //     facebook: 'LOG IN WITH FACEBOOK',
  //     google: 'Continue with Google',
  //     btn: 'Continue',
  //     text: 'We will never spam you or sell your email to third parties.',
  //     footer: 'Already a member? Log In',
  //   };
  //   const loginTitle = {
  //     title: 'Log In To Drop',
  //     facebook: 'LOG IN WITH FACEBOOK',
  //     google: 'LOG IN WITH GOOGLE',
  //     btn: 'LOG IN',
  //     text: 'I FORGOT MY PASSWORD',
  //     footer: 'Not a member yet? Sign up',
  //   };
  //   setTitleConvert(loginTitle);
  // }, []);

  const saveLoginInfo = e => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const idCondition =
    loginInfo.id.includes('@') &&
    loginInfo.id.length > 5 &&
    loginInfo.id.includes('.');

  const IdChecked = () => {
    if (loginInfo.id.length === 0) {
      setIdCheck('This field is required');
    } else if (!idCondition) {
      setIdCheck('Not a valid email address');
    } else {
      setIdCheck('');
    }
  };
  const pwChecked = () => {
    if (idCondition) {
      if (loginInfo.pw.length === 0) {
        setPwCheck('This field is required');
      } else {
        setPwCheck('');
      }
    }
  };

  return (
    <>
      <div className="login_modal">
        <div className="login_main">
          <div className="login_title">
            <h2>{title}</h2>
            <button onClick={closeModal} className="title_btn">
              X
            </button>
          </div>

          <div className="login_social">
            <span className="login_social_span">{subtitle}</span>
            <button className="facebook_btn">
              <FontAwesomeIcon icon={faFacebook} className="facebook" />
              {facebook}
            </button>
            <button className="google_btn">
              <FontAwesomeIcon icon={faGoogle} className="google" />
              {google}
            </button>
          </div>
          <div className="devide_line" />
          <form className="login_form">
            <div className="email_box">
              <span className="email_span">Email</span>
              <input
                type="text"
                className="login_id_input"
                placeholder="Email"
                name="id"
                onKeyUp={IdChecked}
                onChange={saveLoginInfo}
              />
              <span className="email_warning">{idCheck}</span>
            </div>
            <div className="password_box">
              <span className="password_span">Password</span>
              <input
                type="password"
                className="login_pw_input"
                placeholder="Password"
                name="pw"
                onKeyUp={pwChecked}
                onChange={saveLoginInfo}
              />
              <span className="password_warning">{pwCheck}</span>
            </div>
          </form>
          <div className="login_continue_box">
            <button className="login_continue_btn"> {btn}</button>
          </div>
          <div className="login_footer">
            <span className="login_footer_span">{text}</span>
            <span className="login_footer_link">{footer}</span>
          </div>
        </div>
      </div>
      <div className="login_overlay" />
    </>
  );
};

export default Login;

const SIGNUP_DATA = {
  title: 'GET $10 OFF',
  subtitle:
    'Sign up and get $10 off your first Drop Studio purchase. Check your inbox to redeem.',
  facebook: 'Continue WITH FACEBOOK',
  google: 'Continue with Google',
  btn: 'Continue',
  text: 'We will never spam you or sell your email to third parties.',
  footer: 'Already a member? Log In',
};

const LOGIN_DATA = {
  title: 'Log In To Drop',
  facebook: 'LOG IN WITH FACEBOOK',
  google: 'LOG IN WITH GOOGLE',
  btn: 'LOG IN',
  text: 'I FORGOT MY PASSWORD',
  footer: 'Not a member yet? Sign up',
};
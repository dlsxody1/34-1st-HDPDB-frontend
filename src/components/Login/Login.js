import React from 'react';
import './Login.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const Login = ({ data, closeModal }) => {
  const { title, subtitle, facebook, google, btn, text, footer } = data;
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });
  const [idCheck, setIdCheck] = useState('');
  const [pwCheck, setPwCheck] = useState('');

  const saveLoginInfo = e => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const idCondition =
    loginInfo.email.includes('@') &&
    loginInfo.email.length > 5 &&
    loginInfo.email.includes('.');

  const IdChecked = () => {
    if (loginInfo.email.length === 0) {
      setIdCheck('This field is required');
    } else if (!idCondition) {
      setIdCheck('Not a valid email address');
    } else {
      setIdCheck('');
    }
  };
  const pwChecked = () => {
    if (idCondition) {
      if (loginInfo.password.length === 0) {
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
          <div className="divide_line" />
          <form className="login_form">
            <div className="email_box">
              <span className="email_span">Email</span>
              <input
                type="text"
                className="login_id_input"
                placeholder="Email"
                name="email"
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
                name="password"
                onKeyUp={pwChecked}
                onChange={saveLoginInfo}
              />
              <span className="password_warning">{pwCheck}</span>
            </div>
          </form>
          <div className="login_continue_box">
            <button
              onClick={() => {
                fetch('http://10.58.4.235:8000/users/signin', {
                  method: 'POST',
                  body: JSON.stringify({
                    email: loginInfo.email,
                    password: loginInfo.password,
                  }),
                })
                  .then(res => res.json())
                  .then(data => console.log(data));
              }}
              className="login_continue_btn"
            >
              {' '}
              {btn}
            </button>
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
import React, { useContext } from 'react';
import './Login.css';
import logo from '../../images/logo/logo.png';
import email from '../../images/login/email.png';
import key from '../../images/login/key.png';
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import firebaseConfig from '../../firebase.config';
import google from '../../images/login/google.png';
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
else firebase.app();


const Login = () => {
    const [authentication, setAuthentication] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const imgStyle = {
        transform: 'scale(1.5)',
        marginBottom: '20px',
    }

    const googleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then(result => {
                const user = result.user;
                setAuthentication({
                    loggedIn: true,
                    email: user.email,
                    displayName: user.displayName,
                    photoUrl: user.photoURL
                });
                history.replace(from);
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="App">
            {/* <Header /> */}
            <div className="App-header login-background">

                {/* <div className="mt-5"></div>
                <div className="mt-5"></div> */}

                <div className="parent-login-div text-dark">
                    <img style={imgStyle} src={logo} alt="" />
                    <h4>LOGIN TO <span className="sample-text">YOUR ACCOUNT</span></h4>
                    <p><small className="blur-text">Get access to the fabulous insight view</small></p>

                    <form className="login-form">
                        <div className="input-div d-flex align-items-center">
                            <img src={email} alt="" />
                            <input type="email" name="email" placeholder="Email" required />
                        </div>
                        <div className="input-div d-flex align-items-center">
                            <img src={key} alt="" />
                            <input type="password" name="password" placeholder="Password" required />
                        </div>
                        <input className="btn btn-primary" type="button" value="Login" />
                        <div className="text-end">
                            <span onClick={() => { history.push('/forget') }} className="forget-password">Forget password?</span>
                        </div>
                    </form>
                    <div className="mt-3"><p><small onClick={() => history.push('/create-account')} className="account-text">I don't have an account</small></p></div>
                    <div className="social-media">
                        <img onClick={googleSignIn} className="google" src={google} alt="" />
                    </div>
                </div>

                {/* <div className="mb-4"></div> */}

                {
                    // modalShow.state && <ModalUI heading="Error" body={modalShow.errorMessage} type="error" />
                }

            </div>
        </div>
    );
};

export default Login;
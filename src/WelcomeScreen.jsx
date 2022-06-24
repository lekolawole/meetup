import React from "react";
import './WelcomeScreen.css';


function WelcomeScreen(props) {
  return props.showWelcomeScreen ?
    (
      <div className="WelcomeScreen">
        <div className="welcome-container">
           <div className="illustration-wrapper">
          <img className="illustration" src="https://opendoodles.s3-us-west-1.amazonaws.com/rolling.png" alt="illustration" width="300"/>
          <img className="illustration" src="https://assets.website-files.com/5d5e2ff58f10c53dcffd8683/5d5e305b898356dc76c60d38_chilling.svg" alt="illustration" width="300" />
        </div>
        <div className="text-wrapper">
          <h1 className="welcome-text">Welcome to MeetUp</h1>
        <img src='https://github.com/lekolawole/meetup/blob/main/public/meet-app-192.png?raw=true' alt='logo' className="welcome-logo"/>
        <h4>Log in to see upcoming events around the world for full-stack developers</h4>
        <div className="button_cont" align="center">
          <div class="google-btn">
            <div class="google-icon-wrapper">
              <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google sign-in"/>
            </div>
            <button onClick={() => { props.getAccessToken() }} rel="nofollow noopener" class="btn-text">
              <b>Sign in with google</b>
            </button>
            </div>
        </div>
        <a href="https://lekolawole.github.io/meetup/privacy.html" rel="nofollow noopener">Privacy policy</a>
        </div>
        </div>
      </div> )
    : null }
export default WelcomeScreen;

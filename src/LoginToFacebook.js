import React from 'react'
import FacebookLogin from 'react-facebook-login';

export default function LoginToFacebook() {
    const responseFacebook = (response) => {
        console.log(response);
    }
    return (
        <FacebookLogin
            appId="652124149780153"
            autoLoad
            fields="name,email,picture"
            callback={responseFacebook}
            cssClass={"btn btn-outline-primary"}
            render={renderProps => (
                <button onClick={renderProps.onClick} className="btn btn-outline-primary" type="button">
                    Sign in with Facebook
                </button>
            )}
        />
    )
}

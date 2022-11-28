import React from 'react'
import { GoogleLogin } from 'react-google-login';

export default function LogintoGoogle() {
    const responseGoogle = (response) => {
        console.log(response);
    }
    return (
        <GoogleLogin
            clientId="947046100773-gabj5q9mp25scm97smn34k5u0btilrra.apps.googleusercontent.com"
            render={renderProps => (
                <button className="btn btn-outline-secondary" type="button"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}>
                    Sign in with Google
                </button>
            )}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    )
}

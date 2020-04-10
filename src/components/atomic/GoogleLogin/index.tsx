import * as React from 'react'
import GoogleLoginComponent from 'react-google-login';
const GoogleLogin = () => {
    const callBackFunction = (response) => {
        if (!response.profileObj) {
            return null;
        }

        console.log(response.profileObj.email)
    }
    
    return (
        <div>
            <GoogleLoginComponent 
                onFailure={callBackFunction}
                onSuccess={callBackFunction}
                clientId={'654464745849-scln7fcit9urchfrev24g93gevofn80h.apps.googleusercontent.com'}
                buttonText={'구글로그인'}
                cookiePolicy={'single_host_origin'}

            />
        </div>
    )
}

export default GoogleLogin;
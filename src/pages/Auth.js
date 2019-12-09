import React from "react";
import SignIn from "../components/SignIn/SignIn"
import NaverLogin from 'react-naver-login';

const Auth = () => {
  return  <NaverLogin 
  clientId="l4xNltkeJouI07153frC"
  callbackUrl="http://localhost:3000/Auth"
  render={(props) => <div onClick={props.onClick}>Naver Login</div>}
  onSuccess={(naverUser) => console.log(naverUser)}
  onFailure={() => console.error()}
/>
};

export default Auth;
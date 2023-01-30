import React from "react";
import { useCookies } from 'react-cookie'

const Home = () => {

  const [cookies, setCookie] = useCookies();

  return (
    <div>
      <a href="http://localhost:8080/oauth2/authorization/google?redirect_uri=http://localhost:3000">
        <button>Google Login</button>
      </a>
      <a href="http://localhost:8080/oauth2/authorization/naver?redirect_uri=http://localhost:3000">
        <button>Naver Login</button>
      </a>
      <a href="http://localhost:8080/oauth2/authorization/kakao?redirect_uri=http://localhost:3000">
        <button>Kakao Login</button>
      </a>
      <p>Access Token : {cookies.access_token}</p>
      <p>Refresh Token : {cookies.refresh_token}</p>
      <p>Access Token Expiration : {atob(cookies.access_token_expire_time, 'base64url')}</p>
    </div>
  );
};

export default Home;

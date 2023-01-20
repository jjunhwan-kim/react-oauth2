import React from "react";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [searchParams] = useSearchParams();
  const accessToken = searchParams.get("access_token");
  const refreshToken = searchParams.get("refresh_token");
  const accessTokenExpiration = searchParams.get("access_token_expiration");

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

      <p>Access Token : {accessToken}</p>
      <p>Refresh Token : {refreshToken}</p>
      <p>Access Token Expiration : {accessTokenExpiration}</p>
    </div>
  );
};

export default Home;

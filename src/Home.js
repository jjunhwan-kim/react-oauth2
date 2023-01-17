import React from "react";

const Home = () => {
  return (
    <div>
      <a href="http://localhost:8080/oauth2/authorization/google?redirect_uri=http://localhost:3000/info">
        <button>Google Login</button>
      </a>
      <a href="http://localhost:8080/oauth2/authorization/naver?redirect_uri=http://localhost:3000/info">
        <button>Naver Login</button>
      </a>
      <a href="http://localhost:8080/oauth2/authorization/kakao?redirect_uri=http://localhost:3000/info">
        <button>Kakao Login</button>
      </a>
    </div>
  );
};

export default Home;

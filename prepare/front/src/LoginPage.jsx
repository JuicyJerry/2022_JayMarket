import React from "react";
import NavigationPage from "./NavigationPage.jsx";

const LoginPage = () => {
  const [id, setId] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [value, setValue] = React.useState("");

  const ClearInputText = (e) => {

    setValue(e.currentTarget.value);
  }

  return (

    <>
      <NavigationPage />
      <header id="header"><h1>로그인</h1></header>

      <article id="loginWrap">

        <section>
          <form className="loginForm">
            <input type="text" placeholder="ID를 입력하세요" />
            <button className="clearBtn" onClick={ClearInputText}>X</button>
          </form>
          <form className="loginForm">
            <input type="text" placeholder="Password를 입력하세요" />
            <button className="clearBtn" onClick={ClearInputText}>X</button>
          </form>
        </section>

        <section id="loginBtn">
          <button type="submit">로그인</button>
          <button type="button">Google</button>
          <button type="button">Kakao</button>
        </section>


      </article >
    </>
  )
}

// module.exports = LoginPage;
export default LoginPage;
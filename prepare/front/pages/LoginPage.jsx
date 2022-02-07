import React, { useEffect } from "react";
import NavigationPage from "./NavigationPage.jsx";

const LoginPage = () => {
  const [id, setId] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [result, setResult] = React.useState([]);
  const [value, setValue] = React.useState("");

  const onIdSubmitForm = (e) => {
    console.log("onIdSubmitForm");
    setId(e.target.value);
  }

  const onPasswordSubmitForm = (e) => {
    console.log("onPasswordSubmitForm");
    // console.log(e.target.value);
    setPassword(e.target.value);
  }

  const onSubmitReset = () => {
    setId("");
    setPassword("");
    setResult([]);
  }

  const onClickSubmit = (e) => {
    e.preventDefault();
    console.log("id: ", id, "password: ", password, "result: ", result);

    if (result[0] === "" || result[1] === "") {
      alert("Id나 Password가 입력되지 않았습니다");
    }

    // useEffect(() => {
    //   axios.get("/login")
    // })
  }

  useEffect(() => {
    setResult([id, password]);
    console.log(result);
  }, [id, password])


  return (

    <>
      <NavigationPage />
      <header id="header"><h1>로그인</h1></header>
      <article id="loginWrap">

        <article>
          <form className="loginForm" onReset={onSubmitReset} >
            <input type="text" name="id-input" placeholder="ID를 입력하세요" onChange={onIdSubmitForm} autoFocus />
            {value.length > 0 && <button type="reset" className="clearBtn" ></button>}
          </form>
          <form className="loginForm" onReset={onSubmitReset}>
            <input type="password" name="passowrd-input" placeholder="Password를 입력하세요" onChange={onPasswordSubmitForm} autoFocus />
            {value.length > 0 && <button type="reset" className="clearBtn"></button>}
          </form>

          <form id="loginBtn" onSubmit={onClickSubmit} >
            <input type="submit" name="로그인" value="로그인" />
            <input type="submit" name="Google" value="Google" />
            <input type="button" name="둘러보기" value="둘러보기" />
          </form>
        </article>



      </article >
    </>
  )
}

// module.exports = LoginPage;
export default LoginPage;
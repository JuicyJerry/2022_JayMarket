import React from "react";

const LoginPage = () => {
  const [id, setId] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <>
      <header>로그인</header>
      <article>
        <form>
          <input type="text" placeholder="ID를 입력하세요" />
          <button type="reset" value="X"></button>
          <input type="text" placeholder="Password를 입력하세요" />
          <button type="reset" value="X"></button>
          <button type="submit" value="로그인"></button>
        </form >
        <form>
          <button type="button">Google</button>
          <button type="button">Kakao</button>
        </form>
      </article >
    </>
  )
}

// module.exports = LoginPage;
export default LoginPage;
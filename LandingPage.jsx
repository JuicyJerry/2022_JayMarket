import React from "react";
import NavigationPage from "./NavigationPage.jsx";

const LandingPage = () => {

  console.log("렌더링");

  return (
    <>
      <NavigationPage />
      <article>
        <form>
          <input type="text" placeholder="검색어를 입력하세요" />
          <button type="reset" value="X"></button>
          <button>입력</button>
        </form>

        <section>
          <p>
            결과을 기다려주세요
          </p>
        </section>
      </article>
    </>
  )
}

// module.exports = LandingPage;
export default LandingPage;
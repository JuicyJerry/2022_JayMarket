import React from "react";
import NavigationPage from "./NavigationPage.jsx";

const LandingPage = () => {

  console.log("렌더링");

  return (
    <>
      <NavigationPage />
      <article id="landingMotherWrap">
        <article id="searchWrap">
          <form>
            <input type="text" placeholder="검색어를 입력하세요" />
            <button type="reset">X</button>
            {/* <button>입력</button> */}
          </form>

        </article>
        <article id="resultWrap">
          <p>
            결과을 기다려주세요
          </p>
        </article>
      </article>
    </>
  )
}

// module.exports = LandingPage;
export default LandingPage;
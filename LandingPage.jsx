import React from "react";

const LandingPage = () => {

  console.log("렌더링");

  return (
    <>
      <header>
        <div>제이마켓에 환영합니다</div>
      </header>

      <nav>
        <ul id="menu">
          <li className="subPage">Home</li>
          <li className="subPage">Login</li>
          <li className="subPage">Donation</li>
        </ul>
      </nav>
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
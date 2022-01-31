import React from "react";
import ReactDOM from "react-dom";

export default class LandingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      // ...
    }
  }

  render() {
    console.log("렌더링");

    return (
      <React.Fragment>
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
      </React.Fragment>
    )
  }
}
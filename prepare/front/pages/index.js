import React from "react";
import AppLayout from "../components/AppLayout.js";
import styled from "styled-components";
import { Input } from 'antd';

const { Search } = Input;

// const Body = styled.div`
//   background-color: violet;
//   height: 40rem;
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
// `;

const Home = () => {

  return (
    <>
      <AppLayout />
      <div style={{ "display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "height": "55rem" }}>
        <Search style={{ "backgroundColor": "yellow", "width": "30rem", "height": "0rem" }} placeholder="검색어를 입력하세요 ex) 우유, 샐러드, 닭가슴살" enterButton="Search" size="large" loading />
      </div>
    </>
  );
}

export default Home;
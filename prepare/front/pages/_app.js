import PropTypes from "prop-types";
import React from "react";
import Head from "next/head";
import styled from "styled-components";

import "antd/dist/antd.css";
import { Layout, Button } from 'antd';

const { Header, Footer, Content } = Layout;

// const Title = styled.div`
//   color: red;
//   background-color: ##91d5ff;
// `;

const JayMarket = ({ Component }) => {


  return (
    <>
      <Head>
        <title>JayMarket</title>
      </Head>
      <Layout>
        <Header style={{ "background-color": "#5f0080" }}>
          {/* <Title style={{ "color": "red", "background-color": "##91d5ff" }}>Hello, JayMarket</Title> */}
          <Button href="/" style={{ "backgroundColor": "transparent", "color": "white", "border": "0px", "fontSize": "24px" }}>Hello, JayMarket</Button>
          {/* <h1 style={{ "color": "white" }}>Hello, JayMarket</h1> */}
        </Header>
        <Content>
          <Component />
        </Content>
        <Footer style={{ "background-color": "black", "position": "fixed", "bottom": "0", "width": "100%" }}>
          <a href="https://juicyjerry.tistory.com/" target="_blank" rel="noreffer noopener noreferrer" >Made by Jay</a>
        </Footer>
      </Layout>


    </>
  )

}

JayMarket.propTypes = {
  Component: PropTypes.elementType.isRequired,
}

export default JayMarket;
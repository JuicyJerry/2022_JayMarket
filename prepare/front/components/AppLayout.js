import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Row, Col, Button } from "antd";
import { HomeOutlined, UserAddOutlined, ApiOutlined } from "@ant-design/icons";

const AppLayout = ({ children }) => {
  // const Menus = styled(Button)`
  //   display: flex;
  //   flex-direction: row;
  //   justify-content: right;
  //   width: 100%;
  //   height: 100%;
  //   background-color: red;
  // `;

  return (
    <div style={{
      "display": "flex", "flexDirection": "row", "zIndex": "1", "justifyContent": "end", "alignItems": "center", "height": "3rem", "backgroundColor": "white"
    }}>
      <div style={{ "display": "flex", "justifyContent": "space-between", "width": "20rem" }}>
        <Button type="default" href="/" icon={<HomeOutlined style={{ "padding-left": "0rem" }} />}>홈</Button>
        <Button type="default" href="/login" icon={< ApiOutlined />}>로그인</Button >
        <Button style={{ "marginRight": "1.5rem" }} type="default" href="/signup" icon={<UserAddOutlined />}>회원가입</Button>
      </div>

      {children}
    </div>
  )
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppLayout;
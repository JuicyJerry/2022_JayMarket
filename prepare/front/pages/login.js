import React, { useEffect } from "react";
import AppLayout from "../components/AppLayout.js";
import styled from "styled-components";

import { Form, Input, Button, Checkbox } from 'antd';

// const Body = styled.div`
//   background-color: yellow;
//   height: 40rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

const LoginPage = () => {

  const onFinish = (e) => {
    console.log(e);
  }

  const onFinishFailed = (e) => {
    console.log(e);
  }

  return (
    <>
      <AppLayout />
      <div style={{ "display": "flex", "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "height": "55rem", "backgroundColor": "white" }}>
        <header id="header"><h1>로그인</h1></header>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>

  )
}

export default LoginPage;
/*
// {/* <Form className="loginForm">
// {/* <input type="text" name="id-input" placeholder="ID를 입력하세요" onChange={ } /> */
// <input type="text" name="id-input" placeholder="ID를 입력하세요" />
// {/* {value.length > 0 && <button type="reset" className="clearBtn" ></button>} */ }
// </Form >

//   {/* <form className="loginForm" onReset={ }> */ }
//   < Form className = "loginForm" >
//     {/* <input type="password" name="passowrd-input" placeholder="Password를 입력하세요" onChange={ } /> */ }
//     < input type = "password" name = "passowrd-input" placeholder = "Password를 입력하세요" />
//       {/* {value.length > 0 && <button type="reset" className="clearBtn"></button>} */ }
// </Form >

//   {/* <form id="loginBtn" onSubmit={ } > */ }
//   < Form id = "loginBtn" >
// <input type="submit" name="로그인" value="로그인" />
// <input type="button" name="둘러보기" value="둘러보기" />
// <input type="submit" name="구글" value="구글" />
// </Form > * /}
import React, { useEffect } from "react";
import AppLayout from "../components/AppLayout.js";
import styled from "styled-components";
import { Form, Input, Checkbox, Button } from 'antd';

// const Body = styled.div`
//   background-color: violet;
//   height: 40rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

const SignUp = () => {
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };


  return (
    <>
      < AppLayout />
      {/* <div style={{ "display": "flex", "flexDirection": "column", "justifyContent": "center", "backgroundColor": "yellow" }}> */}
      <div style={{
        "display": "flex", "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "height": "55rem"
      }}>
        <header id="header"><h1>회원가입</h1></header>
        <Form style={{
          "display": "flex", "flexDirection": "column", "justifyContent": "center", "alignItems": "end"
        }}>
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
            style={{ "width": "16.7rem" }}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
              },
            ]}
            {...tailFormItemLayout}

            style={{
              "width": "100%"
            }}
          >
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>
          </Form.Item>
          <Form.Item {...tailFormItemLayout} style={{
            "width": "100%"
          }}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  )
}

export default SignUp;
import React, { useState } from 'react';
import { Form, Input,  Select,  Button } from 'antd';
import LoginHeader from "./commonComponents/LoginHeader"
import styles from "./Login.module.css"

const { Option } = Select;

// const formItemLayout = {
//     labelCol: {
//         xs: {
//             span: 24,
//         },
//         sm: {
//             span: 8,
//         },
//     },
//     wrapperCol: {
//         xs: {
//             span: 24,
//         },
//         sm: {
//             span: 16,
//         },
//     },
// };


export default function RegistrationForm() {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };


    return (
        // <div className={styles.loginFormContainer}>
            <>
            <LoginHeader title="Sign up to TikTok" paragraph="Email and Password"/>
        <Form  form={form} name="register" onFinish={onFinish} >
            <Form.Item name="email"  rules={[{ type: 'email', message: 'The input is not valid E-mail!', }, {
                required: true, message: 'Please input your E-mail!',
            },]}>
                <Input placeholder="E-mail" />
            </Form.Item>

            <Form.Item name="password"  rules={[{ required: true, message: 'Please input your password!', },
            ]} hasFeedback>
                <Input.Password placeholder="Password"/>
            </Form.Item>

            <Form.Item name="confirm"  dependencies={['password']} hasFeedback rules={[{
                required:
                    true, message: 'Please confirm your password!',
            }, ({ getFieldValue }) => ({
                validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                    }

                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
            }),
            ]}
            >
                <Input.Password placeholder ="Confirm Password"/>
            </Form.Item>
            <Form.Item >
                <Button type="primary" htmlType="submit">
                    Register
        </Button>
            </Form.Item>
        </Form>
        </>
        // </div>
    );
};
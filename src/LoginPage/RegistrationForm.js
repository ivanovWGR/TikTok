import React, { useState } from 'react';
import { Form, Input, Select, Button } from 'antd';
import LoginHeader from "./commonComponents/LoginHeader"
import registerWithEmailAndPass from './utilRegFunctions/registerWithEmailAndPass'
import firebase, {DataBase} from '../firebase'

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


export default function RegistrationForm({ destroyModal }) {
    const [form] = Form.useForm();

    const close = destroyModal
    const onFinish = ({email, password, firstName, lastName, nickName}) => {
        console.log('Received values of form: ', `firstName: ${firstName}, lastName: ${lastName}, nickName: ${nickName}`);
        console.log(password)
        registerWithEmailAndPass(email, password, firstName, lastName, nickName)
        close()
    };


    return (
        // <div className={styles.loginFormContainer}>
        <>
            <LoginHeader title="Sign up to TikTok" paragraph="Email and Password" />
            <Form form={form} name="register" onFinish={onFinish} >
                <Form.Item name= "firstName" rules={[{required: true, message: 'Please enter your first name'}]}>
                <Input placeholder="First name" />
                </Form.Item>
                <Form.Item name= "lastName">
                <Input placeholder="Last name" rules={[{required: true, message: 'Please enter your last name'}]}/>
                </Form.Item>
                <Form.Item name= "nickName" >
                <Input placeholder="Nickname" />
                </Form.Item>
                <Form.Item name="email" rules={[{ type: 'email', message: 'The input is not valid E-mail!', }, {
                    required: true, message: 'Please input your E-mail!',
                },]}>
                    <Input placeholder="E-mail" />
                </Form.Item>

                <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!', },
                ]} hasFeedback>
                    <Input.Password placeholder="Password" />
                </Form.Item>

                <Form.Item name="confirm" dependencies={['password']} hasFeedback rules={[{
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
                    <Input.Password placeholder="Confirm Password" />
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
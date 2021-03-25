import { Form, Input, Button, } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import LoginHeader from "./commonComponents/LoginHeader"
import styles from "./Login.module.css"

export default function LoginForm() {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        // <div className={styles.loginFormContainer}>
            <>
            <LoginHeader title="Log in" paragraph="Email or Username"/>
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email or Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <a className={`login-form-forgot ${styles.forgotPass}` }href="">
                    Forgot password?
        </a>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className={`login-form-button ${styles.loginFormBtn}`}>
                    Log in
        </Button>

            </Form.Item>
        </Form>
        </>
        // {/* </div> */}
    );
};


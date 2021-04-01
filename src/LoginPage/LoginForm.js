import { Form, Input, Button, } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import firebase from '../firebase'
import LoginHeader from "./commonComponents/LoginHeader"
import styles from "./Login.module.css"

export default function LoginForm({ destroyModal }) {
    const close = destroyModal;
    
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        firebase.auth().signInWithEmailAndPassword(values.username, values.password)
            .then((userCredential) => {
                console.log('user credential ', userCredential)
                // Signed in

                const user = firebase.auth().currentUser;
                if (user) {
                    const name = user.displayName;
                    const email = user.email;
                    const photoUrl = user.photoURL;
                    const uid = user.uid;
                    console.log(`Name ${name}, Email ${email}, UID ${uid}`)

                } else {
                    // No user is signed in.
                }

                // ...
            })
            .then(()=>{
                close()
            })
            .catch((error) => {
                
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage)
                console.log(errorMessage)
            });
        
    };

    return (

        <>
            <LoginHeader title="Log in" paragraph="Email or Username" />
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
                    <a className={`login-form-forgot ${styles.forgotPass}`} href="">
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

    );
};


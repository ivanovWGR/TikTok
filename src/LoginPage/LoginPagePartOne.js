import { useState } from 'react'

import UseFacebook from "./commonComponents/UseFaceboo"
import UseTwitter from "./commonComponents/UseTwitter"
import UseGoogle from "./commonComponents/UseGoogle"
import styles from "./Login.module.css"
import UseEmail from './commonComponents/UseEmail'
import UseQr from './commonComponents/UseQr'
import UseApple from './commonComponents/UseApple'
import UseInstagram from "./commonComponents/UseInstagram"
import LoginHeader from "./commonComponents/LoginHeader"
import { IoClose } from 'react-icons/io5'
import { IoIosArrowBack } from 'react-icons/io'

import LoginForm from "./LoginForm"


export default function LoginPagePartOne({ onClick }) {

    const [bringForm, showForm] = useState(false)

    function goToLoginForm() {
        showForm(true)
    }
    return (

        bringForm ?
            // <div className={styles.loginPageRooter}>
            <>
                {/* <div className={styles.loginModalHeader}>
                    <IoIosArrowBack className={styles.backArrow} />
                    <IoClose />
                </div> */}
                <LoginForm />
                <p className={styles.signUp}>Don't have an account? <a href="#" onClick={onClick}> Sign up</a></p>
                </>
            // </div>
            :
            // <div className={styles.loginPageRooter}>
            <>
                {/* <div className={styles.loginModalHeader}>
                    <IoClose />
                </div> */}
                <LoginHeader title="Log in to Tik Tok"
                    paragraph="Manage your account, check notifications, comment on videos, and more." />
                <div className={styles.choicesOverflow}>
                    <UseQr text="Use QR code" />
                    <UseEmail onClick={goToLoginForm} text="Use phone/ email/ username" />
                    <UseFacebook text="Log in wit Facebook" />
                    <UseGoogle text="Log in with Google" />
                    <UseTwitter text="Log in with twitter" />
                    <UseApple text="Logi in with Apple" />
                    <UseInstagram text="Log in with Instagram" />
                </div>
                <p className={styles.signUp}>Don't have an account? <a href="#" onClick={onClick}> Sign up</a></p>
                </>
            // </div>
    )
}

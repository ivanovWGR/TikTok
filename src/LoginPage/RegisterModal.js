import { useState } from 'react'

import UseFacebook from "./commonComponents/UseFaceboo"
import UseTwitter from "./commonComponents/UseTwitter"
import UseGoogle from "./commonComponents/UseGoogle"
import styles from "./Login.module.css"
import UseEmail from './commonComponents/UseEmail'
import LoginHeader from "./commonComponents/LoginHeader"
import RegistrationForm from "./RegistrationForm"

export default function LoginPageTwo({ onClick, destroyModal }) {
    const [bringRegForm, showRegForm] = useState(false)
    function goToRegForm() {
        showRegForm(true)
    }
    return (
        bringRegForm ?
            <>
                <RegistrationForm className={styles.RegForm} destroyModal={destroyModal} />
                <p className={styles.signUp}>Allready have an account? <a href="#" onClick={onClick}> Log in</a></p>
            </>
            :
            <>
                <LoginHeader title="Sign up for Tik Tok"
                    paragraph="Create a profile, follow other accounts, make your own videos, and more." />

                <div className={styles.LoginPagePartTwo}>
                    <UseEmail onClick={goToRegForm} text="Use phone or email" />
                    {/* <UseFacebook text="Continue with Facebook" /> */}
                    <UseGoogle text="Continue with Google" />
                    {/* <UseTwitter text="Continue with twitter" /> */}
                </div>
                <p className={styles.signUp}>Allready have an account? <a href="#" onClick={onClick}> Log in</a></p>
            </>
    )
}
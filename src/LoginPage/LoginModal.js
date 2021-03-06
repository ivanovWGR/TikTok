import { useState } from 'react'

import UseGoogle from "./commonComponents/UseGoogle"
import styles from "./Login.module.css"
import UseEmail from './commonComponents/UseEmail'
import LoginHeader from "./commonComponents/LoginHeader"


import LoginForm from "./LoginForm"


export default function LoginModal({ onClick, destroyModal }) {

    const [bringForm, showForm] = useState(false)

    function goToLoginForm() {
        showForm(true)
    }
    return (
        bringForm ?

            <>
                <LoginForm destroyModal={destroyModal} />
                <p className={styles.signUp}>Don't have an account? <a href="#" onClick={onClick}> Sign up</a></p>
            </>

            :

            <>
                <LoginHeader title="Log in to Tik Tok"
                    paragraph="Manage your account, check notifications, comment on videos, and more." />
                <div className={styles.choicesOverflow}>
                    <UseEmail onClick={goToLoginForm} text="Use phone/ email/ username" />                    
                    <UseGoogle text="Log in with Google" shouldLogin destroyModal={destroyModal} />                   

                </div>
                <p className={styles.signUp}>Don't have an account? <a href="#" onClick={onClick}> Sign up</a></p>
            </>
       
    )
}

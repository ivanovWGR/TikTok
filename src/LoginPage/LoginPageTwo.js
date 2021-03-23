import UseFacebook from "./commonComponents/UseFaceboo"
import UseTwitter from "./commonComponents/UseTwitter"
import UseGoogle from "./commonComponents/UseGoogle"
import styles from "./Login.module.css"
import UseEmail from './commonComponents/UseEmail'
import LoginHeader from "./commonComponents/LoginHeader"
import { IoClose } from 'react-icons/io5'


export default function LoginPageTwo({onClick}){
    return(
        <div className={styles.loginPageRooter}>
    <div className={styles.loginModalHeader}>
        <IoClose onClick={onClick}/>
    </div>
    <LoginHeader title = "Sign up for Tik Tok" 
    paragraph = "Create a profile, follow other accounts, make your own videos, and more."/>
    
    <div className={styles.LoginPagePartTwo}>        
        <UseEmail text="Use phone or email" />
        <UseFacebook text="Continue with Facebook" />
        <UseGoogle text="Continue with Google" />
        <UseTwitter text="Continue with twitter" />        
    </div>
    <p className={styles.signUp}>Allready have an account? <a href="#"> Log in</a></p>
</div>
    )
}
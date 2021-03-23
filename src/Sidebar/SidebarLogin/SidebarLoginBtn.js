import styles from './SidebarLoginButton.module.css'
export default function SidebarLoginBtutton ({onClick}) {
    return (
        <div className = {styles.sidebarLoginBtn}>
            <div><span className = {styles.span}>Log in to follow creators, like videos, and view comments.</span></div>
            <button className = {styles.button} onClick={onClick}>Login</button>
        </div>
    )
}
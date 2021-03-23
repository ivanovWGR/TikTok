import styles from "../Login.module.css"


export default function LoginHeader({title, paragraph}){
    return(
        <div className={styles.loginH1} >
                <h1>{title}</h1>
                <p>{paragraph}</p>
            </div>
    )
}


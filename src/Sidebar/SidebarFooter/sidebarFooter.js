import styles from './SidebarFooter.module.css'
export default function SidebarFooter () {
    return (
        <div>
            <div className = {styles.containerSpan}>
                <span className = {styles.span}>About</span>
                <span className = {styles.span}>Newsroom</span>
                <span className = {styles.span}>Contact</span>
                <span className = {styles.span}>Careers</span>
                <span className = {styles.span}>ByteDance</span>
            </div>
            <div>
                <span className = {styles.span}>TikTok for Good</span>
                <span className = {styles.span}>Advertise</span>
                <span className = {styles.span}>Developers</span>
                <span className = {styles.span}>Transparency</span>
            </div>
            <div>
                <span className = {styles.span}>Help</span>
                <span className = {styles.span}>Safety</span>
                <span className = {styles.span}>Terms</span>
                <span className = {styles.span}>Privacy</span>
                <span className = {styles.span}>Cookies</span>
                <span className = {styles.span}>Creator Portal</span>
                <span className = {styles.span}>Community Guidelines</span>
                <span className = {styles.span}>Copyright</span>
            </div>
            <div>
                <span className = {styles.span}>More</span>
            </div>
            <div>
                <span className = {styles.span}>© 2021 TikTok</span>
            </div>
        </div>
    );
}
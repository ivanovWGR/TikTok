import styles from "./Footer.module.css";
export default function FooterUploadPage() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.container}>
          <a href="https://tiktok.com" target="_blank">
            <img
              className={styles.img}
              src="https://sf16-scmcdn-va.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/logo-7328701c910ebbccb5670085d243fc12.svg"
              alt="sign"
            />
            <img
              className={styles.img}
              src="https://sf16-scmcdn-va.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/logotext-9b4d14640f93065ec36dab71c806e135.svg"
              alt="sign"
            />
          </a>
        </div>

        <div className={styles.container}>
          <span className={styles.firstSpan}>Company</span>
          <a href="https://www.tiktok.com/about?lang=en" className={styles.span}>About</a>
          <a href="https://newsroom.tiktok.com/" className={styles.span}>Newsroom</a>
          <a href="https://www.tiktok.com/about/contact?lang=en" className={styles.span}>Contact</a>
          <a href="https://careers.tiktok.com" className={styles.span}>Careers</a>
          <a href="https://www.bytedance.com/" className={styles.span}>ByteDance</a>
        </div>

        <div className={styles.container}>
          <span className={styles.firstSpan}>Programs</span>
          <a href="https://www.tiktok.com/forgood" className={styles.span}>TikTok for Good</a>
          <a href="https://ads.tiktok.com/?refer=tiktok_web" className={styles.span}>Advertise</a>
          <a href="https://developers.tiktok.com/?refer=tiktok_web" className={styles.span}>Developers</a>
        </div>

        <div className={styles.container}>
          <span className={styles.firstSpan}>Support</span>
          <a href="https://support.tiktok.com/en" className={styles.span}>Help Center</a>
          <a href="https://www.tiktok.com/safety?lang=en" className={styles.span}>safety Center</a>
          <a href="https://www.tiktok.com/creators/creator-portal/en-us/" className={styles.span}>Creator Portal</a>
          <a href="https://www.tiktok.com/community-guidelines?lang=en" className={styles.span}>Community Guidelines</a>
          <a href="https://www.tiktok.com/transparency?lang=en" className={styles.span}>Transparency</a>
        </div>

        <div className={styles.container}>
          <span className={styles.firstSpan}>Legal</span>
          <a href="https://www.tiktok.com/legal/impressum?lang=en" className={styles.span}>Impressum</a>
          <a href="https://www.tiktok.com/legal/tiktok-website-cookies-policy?lang=en" className={styles.span}>TikTok.com Cookies Policy</a>
          <a href="https://www.tiktok.com/legal/copyright-policy?lang=en"  className={styles.span}>Intellectual Property Policy</a>
          <a href="https://www.tiktok.com/legal/law-enforcement?lang=en" className={styles.span}>Law Enforcement</a>
          <a href="https://www.tiktok.com/legal/privacy-policy?lang=en" className={styles.span}>Privacy Policy</a>
          <a href="https://www.tiktok.com/legal/terms-of-use?lang=en" className={styles.span}>Terms of Service</a>
        </div>
      </div>

      <div className={styles.containerSelect}>
        <div>
        <select className={styles.select}>
          <option className = {styles.option}>English</option>
          <option  className = {styles.option}>??????????????</option>
          <option className = {styles.option}>Deutsch</option>
          <option className = {styles.option} >Espa??ol</option>
          <option className = {styles.option}>Suomi (Suomi)</option>
          <option className = {styles.option}>Fran??ais</option>
          <option className = {styles.option}>Bahasa Indonesia (Indonesia)</option>
          <option className = {styles.option}>?????????????????????</option>
          <option className = {styles.option}>????????? (????????????)</option>
          <option className = {styles.option}>Bahasa Melayu (Malaysia)</option>
          <option className = {styles.option}>?????????????? (????????????)</option>
          <option className = {styles.option}>????????? (?????????)</option>
          <option className = {styles.option}>T??rk??e (T??rkiye)</option>
          <option className = {styles.option}>Ti???ng Vi???t (Vi???t Nam)</option>
          <option className = {styles.option}>????????????</option>
          <option className = {styles.option} >Afrikaans</option>
          <option className = {styles.option}>?????????? (??????????)</option>
          <option className = {styles.option}>Basa Jawa (Indonesia)</option>
          <option className = {styles.option}>Cebuano (Pilipinas)</option>
          <option className = {styles.option}>??e??tina (??esk?? republika)</option>
          <option className = {styles.option}>Italiano (Italia)</option>
          <option className = {styles.option}>Magyar (Magyarorsz??g)</option>
          <option className = {styles.option}>Nederlands (Nederland)</option>
          <option className = {styles.option}>Polski (Polska)</option>
          <option className = {styles.option}>Portugu??s (Brasil)</option>
          <option className = {styles.option}>Rom??n?? (Romania)</option>
          <option className = {styles.option}>Svenska (Sverige)</option>
          <option className = {styles.option}>Kiswahili</option>
          <option className = {styles.option}>Filipino (Pilipinas)</option>
          <option className = {styles.option}>???????????????? (????????????)</option>
          <option className = {styles.option}>isiZulu</option>
          <option className = {styles.option}>???????????????????? (??????????????)</option>
          <option className = {styles.option}>????????</option>
          <option className = {styles.option}>???????????????</option>
          <option className = {styles.option}>???????????????</option>
          <option className = {styles.option}>???????????????????????? (????????????)</option>
          <option className = {styles.option}>?????????????????? (????????????)</option>
          <option className = {styles.option}>?????????????????????</option>
          <option className = {styles.option}>????????????</option>
          <option className = {styles.option}>???????????????</option>
          <option className = {styles.option}>??????????????????</option>
          <option className = {styles.option}>???????????????</option>
          <option className = {styles.option}>??????????????????</option>
          <option className = {styles.option}>?????????????????? (??????????????????)</option>
          <option className = {styles.option}>??????????????? (?????????????????????)</option>
        </select>
        </div>
        <div><span className = {styles.span}>?? 2021 TikTok</span></div>
       
      </div>
    </div>
  );
}

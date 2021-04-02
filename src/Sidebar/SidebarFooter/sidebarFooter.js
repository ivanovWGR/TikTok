import React from "react";
import styles from "./SidebarFooter.module.scss";
export default function SidebarFooter() {
  return (
    <div>
      <div className={styles.containerSpan}>
        <a
          className={styles.span}
          href="https://www.tiktok.com/about?lang=en"
          target="_blank"
        >
          About
        </a>
        <a
          className={styles.span}
          href="https://newsroom.tiktok.com/"
          target="_blank"
        >
          Newsroom
        </a>
        <a
          className={styles.span}
          href="https://www.tiktok.com/about/contact?lang=en"
          target="_blank"
        >
          Contact
        </a>
        <a
          className={styles.span}
          href="https://careers.tiktok.com"
          target="_blank"
        >
          Careers
        </a>
        <a
          className={styles.span}
          href="https://www.bytedance.com/"
          target="_blank"
        >
          ByteDance
        </a>
      </div>

      <div className={styles.containerSpan}>
        <a
          className={styles.span}
          href="https://www.tiktok.com/forgood"
          target="_blank"
        >
          TikTok for Good
        </a>
        <a
          className={styles.span}
          href="https://ads.tiktok.com/?refer=tiktok_web"
          target="_blank"
        >
          Advertise
        </a>
        <a
          className={styles.span}
          href="https://developers.tiktok.com/?refer=tiktok_web"
          target="_blank"
        >
          Developers
        </a>
        <a
          className={styles.span}
          href="https://www.tiktok.com/transparency?lang=en"
          target="_blank"
        >
          Transparency
        </a>
      </div>

      <div className={styles.containerSpan}>
        <a
          className={styles.span}
          href="https://support.tiktok.com/en"
          target="_blank"
        >
          Help
        </a>
        <a
          className={styles.span}
          href="https://www.tiktok.com/safety?lang=en"
          target="_blank"
        >
          Safety
        </a>
        <a
          className={styles.span}
          href="https://www.tiktok.com/legal/terms-of-use?lang=en"
          target="_blank"
        >
          Terms
        </a>
        <a
          className={styles.span}
          href="https://www.tiktok.com/legal/privacy-policy?lang=en"
          target="_blank"
        >
          Privacy
        </a>
        <a
          className={styles.span}
          href="https://www.tiktok.com/legal/tiktok-website-cookies-policy?lang=en"
          target="_blank"
        >
          Cookies
        </a>
        <a
          className={styles.span}
          href="https://www.tiktok.com/creators/creator-portal/en-us/"
          target="_blank"
        >
          Creator Portal
        </a>
        <a
          className={styles.span}
          href="https://www.tiktok.com/community-guidelines?lang=en"
          target="_blank"
        >
          Community Guidelines
        </a>
        <a
          className={styles.span}
          href="https://www.tiktok.com/legal/copyright-policy?lang=en"
          target="_blank"
        >
          Copyright
        </a>
      </div>

      <div className={styles.containerSpan}>
        <p className={styles.paragraph}>More</p>
      </div>

      <div className={styles.containerSpan}>
        <p className={styles.paragraph}>© 2021 TikTok</p>
      </div>
    </div>
  );
}

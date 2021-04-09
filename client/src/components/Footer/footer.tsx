import React from "react";

import telegram from "../../details/icons/social-the-networkы/telegram-icon.png"
import instagram from "../../details/icons/social-the-networkы/instagram-icon.png"

import styles from "./footer.module.sass"
import titles from "../../modules/titles.module.sass"

export const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className={styles.social_networks}>
                <a href="#"><img src={telegram} alt="instagram"/></a>
                <a href="#"><img src={instagram} alt="telegram"/></a>
            </div>
            <div className={titles.footer_title}>GLHF</div>
        </footer>
    )
}

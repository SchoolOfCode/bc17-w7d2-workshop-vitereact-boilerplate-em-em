import React from "react";

import styles from "./Header.module.css";

const Header = function () {
    return (
        <header className={styles.site_header}>
            <h1 className={styles.site_header_h1}>🔥Fireplace Palace</h1>
        </header>
    );
}

export default Header;
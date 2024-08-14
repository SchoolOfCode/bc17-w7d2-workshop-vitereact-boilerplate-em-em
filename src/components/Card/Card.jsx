import React from "react";
import styles from "./Card.module.css";

const Card = function({card}) {
    return(
        <>
            <div className={styles.card}>
                <figure className={styles.card_figure}>
                    <img className={styles.card_img} src={card.image} alt={card.image_alt} />
                </figure>
                <h3 className={styles.card_h3}>{card.heading}</h3>
                <p className={styles.card_p}>{card.text}</p>
            </div>
        </>
    );
};

export default Card;
import React from "react";
import Hero from "../Hero/Hero.jsx"

import styles from "./Main.module.css";

const Main = function() {
    return (
        <>
            <main className={styles.site_main}>
                <Hero />
            <section className="how-it-works">
                <h2>How it works.</h2>
                <div className="card flex">
                    <figure className="card-img">
                        <img src="images/how-it-works-1.png" alt="" />
                    </figure>
                    <h3>Give us a call ...</h3>
                    <p>Call us and book a "Design Consultation" on a date and time to suit you.</p>
                </div>
                <div className="card flex">
                    <figure className="card-img">
                        <img src="images/how-it-works-2.png" alt="" />                    
                    </figure>
                    <h3>We come to you ...</h3>
                    <p>We come to your home to do an assessment of the space and to your style preference.</p>
                </div>
                <div className="card flex">
                    <figure className="card-img">
                        <img src="images/how-it-works-3.png" alt="" />
                    </figure>
                    <h3>We recommend ...</h3>
                    <p>We send you a bespoke set of fireplace recommendations.</p>
                </div>
            </section>
        </main>
        </>
    );
}

export default Main;
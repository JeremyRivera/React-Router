import React from 'react';
import styles from "./styles.module.scss";

const About = props => {
    return (
        <div className={styles.About}>
            {props.text}
        </div>
    );
}

export default About;
import React from 'react';
import styles from "./styles.module.scss";

const Portfolio = props => {
    return (
        <div className={styles.Portfolio}>
            {props.text}
        </div>
    );
}

export default Portfolio;
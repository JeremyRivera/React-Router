import React from 'react';
import TileContainer from '../../components/TileContainer';
import styles from "./styles.module.scss";

const Home = () => {
    return (
        <div className={styles.Home}>
            <div className={styles.tileComponent}>
                <TileContainer />
            </div>
        </div>
    );
}

export default Home;
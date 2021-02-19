import React from 'react';
import styles from "./styles.module.scss";
import PropTypes from "prop-types";

const Tile = props => {
    return (
        <div className={styles.Tile}>
            <div className={styles.tileName}>
                {props.tileName}
            </div>
            <div className={styles.tileDescription}>
                {props.tileDescription}
            </div>
        </div>
    );
}
Tile.propTypes = {
    tileName: PropTypes.string.isRequired,
    tileDescription: PropTypes.string.isRequired
};

export default Tile;
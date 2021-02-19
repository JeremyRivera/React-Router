import React from 'react';
import styles from "./styles.module.scss";
import Tile from "../Tile";

const TileContainer = props => {
    const data = [
        {
            tileName: 'Some Tile 0',
            tileDescription: 'Some tile description 0'
        },
        {
            tileName: 'Some Tile 1',
            tileDescription: 'Some Tile description 1'
        },
        {
            tileName: 'Some Tile 2',
            tileDescription: 'Some Tile description 2'
        },
        {
            tileName: 'Some Tile 3',
            tileDescription: 'Some Tile description 3'
        },
        {
            tileName: 'Some Tile 4',
            tileDescription: 'Some Tile description 4'
        }
    ];
    const TileContainer = data.map((d, i) => <Tile
        key={i}
        tileName={d.tileName}
        tileDescription={d.tileDescription}
    />
    );
    return (
        <div className={styles.TileContainer}>
            {TileContainer}
        </div>
    );
}

export default TileContainer;
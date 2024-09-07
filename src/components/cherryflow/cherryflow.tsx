import styles from './cherryflow.module.css';
import React from 'react';

type Props = {
    children: React.ReactNode;
};

const CherryFlow = ({ children }: Props) => {
    return (
        <div className={styles.flowContainer}>
            <div className={styles.flow}></div>
            <div className={styles.flowOverlay}></div>
            {children}
        </div>
    )
}

export default CherryFlow;
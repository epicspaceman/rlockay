import CherryFlow from '../cherryflow/cherryflow';
import styles from './inlinelink.module.css';
import React from 'react';
import Link from 'next/link'

type Props = {
    text: string;
    link: string;
}

const InlineLink = ({ text, link }: Props) => {
    return(
        <CherryFlow>
            <Link className={styles.textContainer} href={link}>{text}</Link>
        </CherryFlow>
    )
}

export default InlineLink;
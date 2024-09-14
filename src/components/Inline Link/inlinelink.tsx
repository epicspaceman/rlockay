import CherryFlow from '../cherryflow/cherryflow';
import styles from './inlinelink.module.css';
import React from 'react';
import Link from 'next/link'

type Props = {
    text: string;
    href: string;
}

const InlineLink = ({ text, href }: Props) => {
    return(
        <CherryFlow>
            <Link className={styles.textContainer} href={href}>{text}</Link>
        </CherryFlow>
    )
}

export default InlineLink;
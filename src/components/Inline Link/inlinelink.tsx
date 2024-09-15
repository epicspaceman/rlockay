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
            <Link className={styles.textContainer} href={href}>{text}</Link>
    )
}

export default InlineLink;
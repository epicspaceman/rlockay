import styles from './inlinelink.module.css';
import React, { ReactNode } from 'react';
import Link from 'next/link'



const InlineLink = ({ href, children, isDownload }: { href: string, children: ReactNode, isDownload?: boolean}) => {
    if (isDownload) {
        return (
            <a className={styles.textContainer} href={href} download>{children}</a>
        )
    }
    if (href.startsWith('/')) {
        return(
            <Link className={styles.textContainer} href={href} prefetch>{children}</Link>
        )
    }
    return(
        <a className={styles.textContainer} href={href} target='_blank'>{children}</a>
    )
}

export default InlineLink;
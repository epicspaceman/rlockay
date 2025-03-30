'use client'

import styles from '@/app/photography/page.module.css';

import InlineLink from '@/components/Inline Link/inlinelink';
import Photos from '@/components/photos/photos';

const Photography = () => {

    return(
        <main className={styles.main} id='photos-page-root'>
            <p className={styles.link}>
            <InlineLink href='/'>home</InlineLink></p>
            <div className={styles.photoCards} id='photocard-container'>
                <Photos />
            </div>
        </main>
    )
}

export default Photography;
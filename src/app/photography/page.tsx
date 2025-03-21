'use client'

import Title from '@/components/Title/title';
import styles from '@/app/photography/page.module.css';
import PhotoCard from '@/components/Photo Card/photocard';

import InlineLink from '@/components/Inline Link/inlinelink';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Photos from '@/components/photos/photos';
import { FormEvent, FormEventHandler, useRef } from 'react';

const Photography = () => {

    return(
        <main className={styles.main} id='photos-page-root'>
            <Title text='photography'/>
            <p className={styles.link}>
            <InlineLink href='/'>home</InlineLink></p>
            <div className={styles.photoCards} id='photocard-container'>
                <Photos />
            </div>
        </main>
    )
}

export default Photography;
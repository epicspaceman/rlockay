import Title from '@/components/Title/title';
import styles from '@/app/photography/page.module.css';
import PhotoCard from '@/components/Photo Card/photocard';
import Link from 'next/link';

import graffittiImage from '@/assets/photography/graffittiman-1.jpg';

import * as fs from 'fs';
import InlineLink from '@/components/Inline Link/inlinelink';

const Photography = () => {

    const files = fs.readdirSync('./src/assets/photography');

    const photos = files.map((file) => {
        const imagePath = require(`../../assets/photography/${file}`).default;

        return (
            <PhotoCard src={imagePath} alt='some image' key={file}/>
        );
    })


    return(
        <main className={styles.main} id='photos-page-root'>
            <Title text='photography'/>
            <p className={styles.link}><InlineLink href='/' text='home'/></p>
            <div className={styles.photoCards} id='photocard-container'>
                {photos}
            </div>
        </main>
    )
}

export default Photography;
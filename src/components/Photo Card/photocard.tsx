'use client'

import styles from '@/components/Photo Card/photocard.module.css';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import cherry from '@/assets/cherry-blossom-icon.svg'

type Props = {
    src: string;
    alt: string;
}

const PhotoCard = ({ src, alt }: Props) => {

    let [showEnlarged, setShowEnglarged] = useState(false);

    let enlargedImage = null;

    if (showEnlarged) {
        enlargedImage = (
            <div className={styles.enlargedImageContainer} onClick={()=>setShowEnglarged(!showEnlarged)}>
                <Image
                src={src}
                alt={alt}
                className={styles.image}

                />
            </div>
        );
    }

    return(
        <div>
            <div className={styles.imageContainer} onClick={()=>setShowEnglarged(!showEnlarged)}>
                <Image
                src={src}
                alt={alt}
                className={styles.image}
                />
                <Image 
                className={styles.cherryImage}
                src={cherry}
                alt="Cherry blossom"
                />
            </div>
            <div>{enlargedImage}</div>
        </div>
    )
}

export default PhotoCard;
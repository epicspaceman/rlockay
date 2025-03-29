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

    return(
        <div>
            <div className={styles.imageContainer} onClick={()=>setShowEnglarged(!showEnlarged)}>
                <Image
                src={src}
                alt={alt}
                className={styles.image}
                sizes='100%'
                width={0}
                height={0}
                />
                <div className={styles.overlay}/>
            </div>
            <div>
                {showEnlarged && (
                <div className={styles.enlargedImageContainer} onClick={()=>setShowEnglarged(!showEnlarged)}>
                    <Image
                    src={src}
                    alt={alt}
                    className={styles.image}
                    sizes='100vw'
                    width={0}
                    height={0}
                    />
                </div>
                )}
            </div>
        </div>
    )
}

export default PhotoCard;
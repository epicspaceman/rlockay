'use client'

import { useQuery, useQueryClient } from "@tanstack/react-query"
import { PutBlobResult } from "@vercel/blob"
import PhotoCard from "../Photo Card/photocard"
import styles from '@/components/photos/photos.module.css'
import cherryBlossom from '@/assets/cherry-blossom-icon.svg'
import Image from 'next/image'

const Photos = () => {
    const fetchPhotos = () => fetch('api/photos', {
        method: 'GET'
    })
        .then((res) => res.json())

    const {isLoading, isError, data, error} = useQuery({
        queryKey: ['photos'],
        queryFn: fetchPhotos
    })

    if (isError) {
        return (
            <span>Error: {error.message}</span>
        )
    }

    if (isLoading) {
        return (
            <div className={styles.loading}>
                <Image
                src={cherryBlossom}
                alt="A spinning cherry blossom"
                className={styles.blossom}
                sizes='100%'
                width={0}
                height={0}
                />
            </div>
        )
    }

    return (
        <div className={styles.photoCards}>
            {data?.map((blob: PutBlobResult) => <PhotoCard key={blob.pathname} src={blob.url} alt={blob.pathname}/>)}
        </div>
    )
}

export default Photos
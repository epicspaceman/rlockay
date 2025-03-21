'use client'

import { useQuery, useQueryClient } from "@tanstack/react-query"
import { PutBlobResult } from "@vercel/blob"
import PhotoCard from "../Photo Card/photocard"
import styles from '@/components/photos/photos.module.css'

const Photos = () => {
    const queryClient = useQueryClient()

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
            <span>Loading...</span>
        )
    }

    return (
        <div className={styles.photoCards}>
            {data?.map((blob: PutBlobResult, idx: number) => <PhotoCard key={blob.pathname} src={blob.url} alt={blob.pathname}/>)}
        </div>
    )
}

export default Photos
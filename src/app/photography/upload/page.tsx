'use client'

import styles from '@/app/photography/upload/page.module.css'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FormEvent, useRef } from 'react';

const UploadImages = () => {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: (file: File) => fetch(
            `/api/photos?filename=${file.name}`,
            {
                method: 'POST',
                body: file
            },
        ),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['photos']})
    })

    const inputFileRef = useRef<HTMLInputElement>(null)
    const passkeyRef = useRef<HTMLInputElement>(null)

    const uploadImage = (event: FormEvent) => {
        event.preventDefault();

        if (!inputFileRef.current?.files) {
            throw new Error('No file selected')
        }

        const passkey = passkeyRef.current?.value

        if (passkey === process.env.NEXT_PUBLIC_UPLOAD_PASS) {
            const file = inputFileRef.current.files[0]
            mutation.mutate(file)
            console.log('done')
        }
 
    }

    return (
        <main>
            <form onSubmit={uploadImage}>
                <input name='file' ref={inputFileRef} type='file' required/>
                <input name='passkey' ref={passkeyRef} type='password' required/>
                <button type='submit'>Upload</button>
            </form>
        </main>
    )
}

export default UploadImages
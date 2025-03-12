'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

type Images = {
    id: string;
    alt: string;
}

export function ImagePath (image: Images) {
    return <Image src={`/images/${image.id}.png`} alt = {image.alt} width="64" height = "64" />
}

export function qasLogo() {
    return <ImagePath id="qaslogo" alt="QAS LOGO" />
}

//404 Not Found GIF
export function notfoundgif() {
    const [gifSrc, setGifSrc] = useState<string | null>(null);


    useEffect(() => {

    
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;


    setGifSrc(isDarkMode
    ? '/gifs/notfounddark.gif' 
    : '/gifs/notfound.gif');
    },[]);

    return <img src = {gifSrc || undefined} id="404gif" alt="404 Not Found" />
}
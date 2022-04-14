import React, { useEffect, useState } from 'react';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const [images, setImatges] = useState([]);

    useEffect(() => {
        getGifs()
    }, []);

    const getGifs = async () => {

        const url = 'https://api.giphy.com/v1/gifs/search?q=rick+and+morty&limit=10&api_key=Kiv3X8jRLnfax71QjBcYT4O7Zt9SuG8J';
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        // console.log(gifs);
        setImatges(gifs);
    }

    return (
        <>
            <h3>{category}</h3>
            {
                images.map(img => (
                    <GifGridItem
                        key={img.id}
                        {...img}
                    />
                ))
            };
        </>
    )
}

export default GifGrid;
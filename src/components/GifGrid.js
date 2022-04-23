import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import GifGridItem from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

const GifGrid = ({ category }) => {

    // const [images, setImatges] = useState([]);

    const {loading} = useFetchGifs();
    console.log(loading);

    return (
        <>
        <h3>{category}</h3>
        {loading ? 'Cargando...' : 'Data cargada'}
        {/* <div className='card-grid'>
            {
                images.map(img => (
                    <GifGridItem
                        key={img.id}
                        {...img}
                    />
                ))
            };
        </div> */}
        </>
    )
}

export default GifGrid;
import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    // const handleAdd = () => {
    //     // setCategories(cats => [...cats, 'Pokemon']);
    //     setCategories([...categories, 'Pokemon'])
    // }

    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory/>
            <hr />

            <ol>
                {
                    categories.map(category => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
        </>
    )
};

export default GifExpertApp;
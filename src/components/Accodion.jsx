import React, { useEffect, useState } from 'react'
import "./accordion.css"
import User from './User'

const Accodion = () => {
    const [isActive, setIsActive] = useState(false);
    const [data, setdata] = useState([])

    const handleFetch = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const newRes = await response.json();
            console.log(newRes); // Check if the data is correctly fetched
            setdata(newRes);
        } catch (error) {
            console.error("Failed to fetch data", error);
        }
    };


    const handleOpen = (id) => {
        setIsActive((prevId) => (prevId === id ? false : id))
        // setIsActive(!isActive)
    }

    useEffect(() => {
        handleFetch()
    }, [])

    return (
        <>
            <h1>Accordion</h1>
            {data.map((element, index) => (
                <div className="accordion-container" key={index}>
                    <User title={element.title} body={element.body} isActive={isActive === element.id} setIsActive={setIsActive} toggle={() => handleOpen(element.id)} />
                </div>

            ))}


        </>
    )
}

export default Accodion

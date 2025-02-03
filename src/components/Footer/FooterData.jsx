import React, { useState } from 'react'
import "./footer.css"
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import FoooterData from "./footer.json"

const FooterData = () => {

    const [data, setData] = useState(FoooterData.contactInfo)

    const iconData = {
        MdPlace: <MdPlace />,
        IoCallSharp: <IoCallSharp />,
        TbMailPlus: <TbMailPlus />

    }
    console.log(111, data)
    return (
        <div>
            <footer>
                <div className="top_header">
                    {data.map((element, index) => (
                        <>
                            <section key={index}>
                                <span><i className="fa fa-map-marker"></i></span>
                                <span>{iconData[element.icon]}</span>
                                <span>{element.title}</span>
                                <span>{element.details}</span>
                            </section>
                        </>
                    ))}

                </div>

                <div className="copyright">
                    Copyright © 2021 websitename - All rights reserved
                </div>
            </footer>
        </div>
    )
}

export default FooterData

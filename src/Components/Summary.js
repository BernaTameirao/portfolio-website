import "./Summary.css";

import {Fragment} from "react";

const Summary = ({list = [], title}) => {

    const scrollToDiv = (data) => () => {

        document.getElementById(data).scrollIntoView({block: 'center', behavior: 'smooth'});
    };

    return (
        <div className="summary-body">
            <h2>{title}</h2>
            <div className="line-summary"/>
            <div className="summary-body-text-div">
                {list.map((topic, index)=>(
                    <Fragment key={index}>
                        <div className="summary-body-each-text-div" onClick={scrollToDiv(`topic${index}`)}>
                            <p>{Object.values(topic)[0]}</p>
                        </div>
                        <div className="line-summary"/>
                    </Fragment>
                ))}
            </div>
        </div>
    );
}

export {Summary};
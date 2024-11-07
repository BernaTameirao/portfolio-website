import './PhaseButton.css';
import {useState} from "react";

const PhaseButton = ({content= [], data=0, sendData}) => {

    const [currentIndex, setCurrentIndex] = useState(data);
    const [fading, setFading] = useState(false);

    const handleNext = () => {
        if(fading) return;

        setFading(true);
        setTimeout(() => {

            sendData(currentIndex === content.length - 1 ? 0 : currentIndex + 1);
            setCurrentIndex((prevIndex) => (prevIndex === content.length - 1 ? 0 : prevIndex + 1));
            setFading(false);
        }, 150);
    };

    return (
        <div className="phase-button">
            {content.map((item, index) => (
              <div className={`phase-button-${index} ${fading? `fade-0` : ''}`} onClick={handleNext} key={index}>
                  <img src={content[currentIndex]} alt={`Imagem ${currentIndex + 1}`}/>
              </div>
            ))}
        </div>
    );
}

export { PhaseButton };
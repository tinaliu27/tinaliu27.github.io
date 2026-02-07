import React from 'react';
import FlipCard from './FlipCard.css'; 

function FlipCard({frontContent, backContent}) {
    const [isFlipped, setIsFlipped] = useState(false); 

    const handleFlip = () => {
        setIsFlipped(!isFlipped); 
    }

    return (
        <div className = {`flip-card-container ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
            <div className = "flip-card-inner">
                <div className = "flip-card-front">
                    {frontContent}
                </div>
                <div className = "flip-card-back">
                    {backContent}
                </div>
            </div>
        </div>
    );
}

export default FlipCard; 
import { useEffect, useState } from "react";

const ImageCarousel = () => {
    const images = [
        '../public/imgs/green.jpg',
        '../public/imgs/jammu.jpg',
        '../public/imgs/singapore.jpg',
        '../public/imgs/Weekend.jpg'
    ];
    
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);
        
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div>
            <img src={images[currentIndex]} alt="carousel" style={{ width: '100%', height: '600px' }} />
        </div>
    );
};

export default ImageCarousel;

import image1 from '../../Assets/carouselImage4.jpg';
import image2 from '../../Assets/carouselImage7.jpg';
import image3 from '../../Assets/carouselImage9.jpg';
import image4 from '../../Assets/carouselImage10.jpg';
import image5 from '../../Assets/carouselImage11.jpg';

const CarouselImage1 = () => {
    return (
        <>
            <style>
                {`
                    .imgStyles {
                        width: 100vw;
                        height: 80vh;
                        object-fit: cover;
                    }

                    @media screen and (max-width: 768px) {
                        .imgStyles {
                            height:40vh;
                        }
                    }
                `}
            </style>
            <img src={image2} alt="Carousel1" className="imgStyles" />
        </>
    );
};

export const CarouselImage2 = () => {
    return (
        <>
            <img src={image1} alt="Carousel2" className="imgStyles" />
        </>
    );
};

export const CarouselImage3 = () => {
    return (
        <>
            <img src={image3} alt="Carousel3" className="imgStyles" />
        </>
    );
};

export const CarouselImage4 = () => {
    return (
        <>
            <img src={image4} alt="Carousel4" className="imgStyles" />
        </>
    );
};

export const CarouselImage5 = () => {
    return (
        <>
            <img src={image5} alt="Carousel5" className="imgStyles" />
        </>
    );
};

export default CarouselImage1;
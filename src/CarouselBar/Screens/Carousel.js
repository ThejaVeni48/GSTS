import Carousel from 'react-bootstrap/Carousel';
import CarouselImage1, { CarouselImage2, CarouselImage3, CarouselImage4, CarouselImage5 } from './images';
import styles from '../Styles/Carousel.module.css';

function CarouselPage() {
  return (
    <div id={styles.mainContainer}>
    <Carousel  indicators={false}>
      <Carousel.Item interval={1500}>
        <CarouselImage1 text="First slide" />
        <Carousel.Caption className={styles.overlayText}>
        <h3 className={styles.header}>
  Global Spark Tek Solutions
</h3>
<p className={styles.para}>Empowering Your Business with Cutting-Edge IT Innovation.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <CarouselImage2 text="Second slide" />
        <Carousel.Caption className={styles.overlayText}>
          <h3 className={styles.header}>Seamless IT Integration</h3>
          <p className={styles.para}>Streamline Operations with Tailored Technology Solutions</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <CarouselImage3 text="Third slide" />
        <Carousel.Caption className={styles.overlayText}>
        <h3 className={styles.header}>Database Mastery</h3>
        <p className={styles.para}>
          Optimizing Data Management for Scalable Growth
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <CarouselImage4 text="Four slide" />
        <Carousel.Caption className={styles.overlayText}>
          <h3 className={styles.header}>
            Cloud Transformation</h3>
            <p className={styles.para}>
          Scale Efficiently with Next-Gen Cloud Services
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <CarouselImage5 text="Fifth slide" />
        <Carousel.Caption className={styles.overlayText}>
        <h3 className={styles.header}>
            
            Future-Ready IT</h3>
            <p className={styles.para}>
          Driving Success Through Advanced Tech Strategies.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>

 
  );
}

export default CarouselPage;










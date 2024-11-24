import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css";
import "./notificationCarousel.css";


function NotificationHeader() {
    return(
        <Carousel className='notification_header' indicators={false}>
            <Carousel.Item  >
            <div className="carousel_content">
                 <p>Notification One</p>
            </div>
            </Carousel.Item>
            <Carousel.Item  >
            <div className="carousel_content">
                 <p>Notification Two</p>
            </div>
            </Carousel.Item>
                
        </Carousel>
    )
}

export default NotificationHeader;
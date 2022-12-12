import { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Home extends Component
{
    render(){
        return(
            <div>
            <h1 className="text-danger bg-light">Home display</h1>
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1363745804/photo/erp-document-management-concept-businessman-working-with-laptop-computer-with-icons-on.jpg?b=1&s=170667a&w=0&k=20&c=JEAUXWKJc2IVtQUcf7rGkXI8rcNd-lGwhxCHcjLimw0="
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1295900106/photo/data-scientists-male-programmer-using-laptop-analyzing-and-developing-in-various-information.jpg?s=612x612&w=0&k=20&c=2z9VEOlF7mAgeZDEsnetqFMyQS6xqjmXDoryrQ_LeOc="
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://thumbs.dreamstime.com/b/consultant-presenting-tag-cloud-information-technology-224099191.jpg"
          alt="Third slide"
          
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
     <br />
    <div className="row">
        <div className="col-3"><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.hindustantimes.com/tech/img/2022/06/13/1600x900/card-3212764_960_720_1655109881102_1655109902321.webp" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></div>
        <div className="col-3"><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.hindustantimes.com/tech/img/2022/06/13/1600x900/card-3212764_960_720_1655109881102_1655109902321.webp" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></div>
        <div className="col-3"><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.hindustantimes.com/tech/img/2022/06/13/1600x900/card-3212764_960_720_1655109881102_1655109902321.webp" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></div>
        <div className="col-3"><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.hindustantimes.com/tech/img/2022/06/13/1600x900/card-3212764_960_720_1655109881102_1655109902321.webp" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></div>
    </div>
    
    </div>
        )
    }
}
export default Home;
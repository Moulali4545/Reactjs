import React, { Component } from "react";
import {Link,Outlet} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class NavBar extends Component
{
    render(){
        return(
          
          
          
          <div>
           <div className="row">
            <div className="col-3"> <Card style={{ width: '18rem' }}>
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
            <div className="col-3"> <Card style={{ width: '18rem' }}>
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
            <div className="col-3"> <Card style={{ width: '18rem' }}>
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
            <div className="col-3"> <Card style={{ width: '18rem' }}>
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
    
             <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://thumbs.dreamstime.com/b/consultant-presenting-tag-cloud-information-technology-213591032.jpg"
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
          src="https://thumbs.dreamstime.com/b/internet-information-technology-concept-laptop-computer-showing-data-processing-screen-122397310.jpg"
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
            <nav className="navbar navbar-expand-lg bg-danger">
  <div className="container-fluid">
    <a className="navbar-brand" href="#/">
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/DashBoard">DashBoard</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/CustomerList">CustomerList</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/ShoppingCart">ShoppingCart</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/SignIn">SignIn</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/SignUp">SignUp</Link>
        </li>
        <div><li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Technologies
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/Technologies/Angular">Angular</Link></li>
            <li><Link className="dropdown-item" to="/Technologies/Reactts">React</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="#/">Something else here</Link></li>
            
          </ul>
        </li></div>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<Outlet/>
           </div>
        )
    }
}
export default NavBar
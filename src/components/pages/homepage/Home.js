import React from 'react'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import { Container } from '@material-ui/core';
import Banner from './Banner'

const HomePage=()=>{
  return(
  <div>
    <Banner/>
    <Container>
    <CardGroup style={{display: 'flex', flexDirection: 'row'}}>
      <Card style={{flex: 1}}>
        <Card.Img variant="top" src="https://vetnutrition.tufts.edu/wp-content/uploads/hungry-dog.jpg" height="280px" width="300px"/>
        <Card.Body>
          <Card.Title text-allign="center">Food</Card.Title>
          <Card.Text>
            Checkout variety of food for your pet
          </Card.Text>
        </Card.Body>
        
      </Card >
      <Card style={{flex: 1}}>
        <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/71JocRVTSKL._AC_SX466_.jpg" height="280px" width="300px" />
        <Card.Body>
          <Card.Title>Collar/Harness</Card.Title>
          <Card.Text>
            Checkout our variety of stylish and cute harnesses and collars
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card style={{flex: 1}}>
        <Card.Img variant="top" src="https://target.scene7.com/is/image/Target/GUEST_ae45a799-6aec-4c46-a45c-3413adbbb348?wid=488&hei=488&fmt=pjpeg" height="280px" width="300px"/>
        <Card.Body>
          <Card.Title>Clothing</Card.Title>
          <Card.Text>
            Widest range of pet Clothing available in our store
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{flex: 1}}>
        <Card.Img variant="top" src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2019/07/08112347/best-dog-treats-for-dog-training-treats-1.png" height="280px" width="300px" />
        <Card.Body>
          <Card.Title>Treats</Card.Title>
          <Card.Text>
            Your pets will do anything for the treats.Pamper them with our delicious variety of treats
          </Card.Text>
        </Card.Body>
        
      </Card>
    </CardGroup>
    <CardGroup style={{display: 'flex', flexDirection: 'row'}}>
      <Card style={{flex: 1}}> 
        <Card.Img variant="top" src="https://www.petguide.com/wp-content/uploads/2018/02/dog-dental-toy.jpg" height="280px" width="300px"/>
        <Card.Body>
          <Card.Title>Toys</Card.Title>
          <Card.Text>
            Checkbox our toy section your pet will love
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card style={{flex: 1}}>
        <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/1199/8502/files/DOg-Bowls-Mobile-Size.jpg?v=1605886487" height="280px" width="300px"/>
        <Card.Body>
          <Card.Title>Bowls/Feeders</Card.Title>
          <Card.Text>
            Check trendy bowls and feeders for your pets
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{flex: 1}}>
        <Card.Img variant="top" src="https://thebamboobazaar.com/wp-content/uploads/2019/05/1-dog-1024x1024.jpg" height="280px" width="300px" />
        <Card.Body>
          <Card.Title>Bedding</Card.Title>
          <Card.Text>
            Make your pet comfy with our Bedding range
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{flex: 1}}>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREuDM8vx5hRmyPE7V8X9e7ePhmk8B-ScbALw&usqp=CAU" height="280px" width="300px" />
        <Card.Body>
          <Card.Title>Grooming</Card.Title>
          <Card.Text>
            Long range of grooming products available
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>      
    </Container>   
  </div>
    );
};
export default HomePage;
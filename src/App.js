import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Name from './components/Name';
import Description from './components/Description';
import Image from './components/Image';
import Price from './components/Price';
import Button from 'react-bootstrap/Button';
import MyNavbar from './components/MyNavbar';

function App() {
  var name ="fatma";
  return (
    <>
    {/* <img src="/download.jpg"/> */}
      <MyNavbar/>
      <img src="flower.jpg" className='flower'/>
      <div className='App'>
      <Card style={{ width: '18rem' }}>
        <Image/>
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Card.Text>
         <Description/>
         <Price/>
        </Card.Text>
        <Button variant="primary">Add to cart</Button>

      </Card.Body>
    </Card>
        <img src="airpods-.png" className='im'/>
        <img src="box-airpods.png" className='imbox'/>

    </div>
    <div className='page'>
    {name?<h1>Hallo {name}</h1>:<h1>Hello there !</h1>}
    {name?<img src="https://i.pinimg.com/736x/db/b1/14/dbb1148d63b1fd9c2931f9d3ecab73a8.jpg"/>:null}
    </div>
    </>
  )
}

export default App

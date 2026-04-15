import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Name from './componets/Name';
import Description from './componets/Description';
import Image from './componets/Image';
import Price from './componets/Price';
function App() {
  var name ="fatma";
  return (
    <>
      <div className='App'>
      <Card style={{ width: '18rem' }}>
        <Image/>
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Card.Text>
         <Description/>
         <Price/>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className='page'>
    {name?<h1>Hallo {name}</h1>:<h1>Hello there !</h1>}
    {name?<img src="https://i.pinimg.com/736x/db/b1/14/dbb1148d63b1fd9c2931f9d3ecab73a8.jpg"/>:null}
    </div>
    </>
  )
}

export default App

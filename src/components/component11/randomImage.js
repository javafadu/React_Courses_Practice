import React, {useState} from 'react'
import {Card,Button} from "react-bootstrap"
const RandomImage = () => {
const [number,setNumber]=useState(1);
let image="";
if(number<=4)
    image="arka1.jpg";
else if(number<=7)
    image="arka2.jpg";
else
    image="arka3.jpg";

const change = () => {
    let randomNumber=Math.floor(Math.random()*10+1);
    setNumber(randomNumber);
 }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require(`../../assets/img/${image}`)} style={{height:'20rem'}}/>
      <Card.Body>
        <Card.Title>Rastgele Sayı : {number}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={change}>Resim Değiştir</Button>
      </Card.Body>
    </Card>

  )
}

export default RandomImage
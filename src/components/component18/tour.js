import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'

const Tour = ({id,image,info,name,price,removeTour}) => {

    const [readMore, setReadMore] = useState(false);


  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Title>{price} $</Card.Title>
        <Card.Text>
         {readMore ? info : `${info.substring(0,150)}...`}
        </Card.Text>
        <Button style={{border:"none", backgroundColor:"white", color:"blue", textDecoration:"underline"}} onClick={()=> setReadMore(!readMore)}>{readMore ? "Show less" : "Read more"}</Button>
        <Button style={{marginLeft:"1rem"}} onClick={()=>removeTour(id)}>Not interested</Button>
      </Card.Body>
    </Card>
  )
}

export default Tour
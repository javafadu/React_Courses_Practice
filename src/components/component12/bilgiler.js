import React, {useState} from 'react'
import data from './data'
import {Card,Button} from 'react-bootstrap'
const Bilgiler = () => {
    const [index,setIndex]=useState(0);

    const sonraki = (nxt) => { 
        if(nxt>data.length-1)
        nxt=0;
        setIndex(nxt);
     }
     const onceki = (prv) => { 
         if(prv<0)
         prv=data.length-1;
         setIndex(prv)
      } 
      const rastgele = () => { 
          let rnd = Math.floor(Math.random()*data.length);
          setIndex(rnd);
       } 
       const {resim,isim,tarih,metin,id}=data[index];  
  return (
    <div style={{padding:"20px"}}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={resim} />
      <Card.Body>
        <Card.Title style={{textAlign:"center"}}>{isim}</Card.Title>
        <Card.Title style={{textAlign:"center"}}>{id}</Card.Title>
        <Card.Text style={{textAlign:"center"}}>
        {metin}
        </Card.Text>
        <Button variant="danger" onClick={()=>onceki(index-1)}>Previous</Button>
        <Button variant="warning" className="ms-2 me-2" onClick={rastgele}>Random</Button>
        <Button variant="primary" onClick={()=>sonraki(index+1)}>Next</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Bilgiler
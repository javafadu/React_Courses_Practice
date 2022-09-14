import React,{useState} from "react";
import {Form,Button,Spinner,Container} from 'react-bootstrap'
const Form1 = () => {
    const [formData,setFormData]=useState({
        firstName:"",
        lastName:"",
        phone:"",
        email:"",
        web:"",
    })
    const [loading,setLoading]=useState(false);

    const handleFormData = (e) => { 
        const {name,value} = e.target;
        setFormData({...formData,[name]:value});
     }
     const handleSubmit = (e) => { 
         e.preventDefault();
         setLoading(true);
         setTimeout(() =>{
             //Burası fake API, sanki endpointe bağlanmış gibi yapmak için 
             alert("Data gönderildi.");
             setLoading(false);
         },2000)
      }
  return (
    <Container className="mt-5" style={{width:"40%"}}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            required
            minLength={3}
            maxLength={25}
            name="firstName"
            value={formData.firstName}
            onChange={handleFormData}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            required
            minLength={3}
            maxLength={25}
            name="lastName"
            value={formData.lastName}
            onChange={handleFormData}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleFormData}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="email"
            required
            name="email"
            value={formData.email}
            onChange={handleFormData}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Web Address</Form.Label>
          <Form.Control
            type="web"
            name="web"
            value={formData.web}
            onChange={handleFormData}
          />
        </Form.Group>
        <Button variant="warning" type="submit" disabled={loading}>{loading && <Spinner animation="border" />}{" "}Gönder</Button>
      </Form>
    </Container>
  );
};

export default Form1;
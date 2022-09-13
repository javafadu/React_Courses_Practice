import React, {useState,useEffect} from 'react'
import data from "./data.json"
import UserCard from './userCard';
import {Container,Row,Spinner} from 'react-bootstrap'
const UserCards = () => {
    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() =>{ 
            setUsers(data);
            setLoading(false);
        },2000)
    
    }, [])
    
  return (
    
    <Container>
        <Row>
            <div className = {loading ? "d-block" : "d-none"}><Spinner animation="border" />Loading...</div>
            {
                users.map((user)=>(<UserCard key={user.id} data={user}/>))
            }
        </Row>
    </Container>
  )
}

export default UserCards
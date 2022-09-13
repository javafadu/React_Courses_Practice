import React from 'react'
import {Card} from 'react-bootstrap'
const UserCard = ({data}) => {
    const {avatar_url,login,html_url}=data;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={avatar_url} />
      <Card.Body>
        <Card.Title><a href={html_url} target="_blank">{login}</a></Card.Title>
      </Card.Body>
    </Card>
  )
}
export default UserCard
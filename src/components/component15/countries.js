import React from 'react'
import { useEffect, useState } from 'react';
import { Container, Spinner, Table } from 'react-bootstrap';
import Country from './country';
import data from "./data.json";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(()=> {
        setTimeout(()=> {
            setCountries(data);
            setLoading(false);
        },2000)

    },[])

    const removeById = (id)=> {
        const newArray = countries.filter((country)=>country.ccn3!=id);
        setCountries(newArray);
    }
    


  return (
    <Container>
        
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Flag</th>
          <th>Country</th>
          <th>Population</th>
          <th>Capital</th>
          <th>Edit/Delete</th>
        </tr>
      </thead>
      <tbody>
            <tr><td className={loading ? "d-block": "d-none"}><Spinner animation="border" />Loading...</td></tr> 
                {

                    countries.map((country,index)=> {

                    return (

                        <Country key={country.index} index = {index} data={country} onRemoveCountry={removeById}/>
                    )    

                    })

                }

        
      </tbody>
    </Table>


    </Container>
  )
}

export default Countries
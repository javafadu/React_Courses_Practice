import React, { useEffect, useState } from 'react';
import data from "./data.json";
import Tour from './tour';


const Tours = () => {
    const [tours, setTours] = useState([]);
    
    useEffect(() => {
      setTours(data);
    
    }, [])
    
    const removeTour = (id) => { 
        const arr = tours.filter(tour=>tour.id!=id);
        setTours(arr);
     }



  return (
    <div>
        <h2 className='text-center'>Our Tours</h2>
        <div style={{width:"75%", marginRight:"auto", marginLeft:"auto"}}>
            {
                tours.map((tour)=> (<Tour key={tour.id} {...tour} removeTour={removeTour}/>) )

            }
        </div>
    </div>
  )
}

export default Tours
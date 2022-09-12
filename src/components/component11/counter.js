import React, {useState,useEffect} from 'react'

const Counter = () => {
    const [counter,setCounter] = useState(0);

    const arttir = (newCount) => { 
        setCounter(newCount);
     }

     const azalt = (newCount) => { 
         setCounter(newCount);
      }

      useEffect(() => {
        document.title=counter;
      }, [counter])
      

  return (
    <div className="p-3">
        <p>{counter}</p>
        <button className="btn btn-primary" onClick={()=>arttir(counter+1)}>Arttır</button>
        <button className="btn btn-danger" onClick={()=>azalt(counter-1)}>Azalt</button>
        <button className="btn btn-warning" onClick={()=>setCounter(0)}>Sıfırla</button>
    </div>
  )
}

export default Counter
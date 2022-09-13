import React, { useState } from 'react';
import data from "./data";
import "./text.css";

const Text = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState([]);

    const handleSubmit = (e) => { 
        e.preventDefault();
        let amount = parseInt(count);
        if(count<=0) amount=1;
        if(count>data.length) amount=data.length;

        setText(data.slice(0,amount));
     }

  return (

    
    <section className='section-center'>
        <h3>Paragraph Numbers</h3>
        <form action="" className="lorem-form" onSubmit={handleSubmit}>
            <label htmlFor='amount'>Paragraphs</label>
            <input type="number" id="amount" value={count} onChange={(e)=>setCount(e.target.value)}/>
            <button className='btn'>Generate</button>
        </form>
        <article className='lorem-text'>
            {
                text.map((item,index)=>(<p key={index}>{item}</p>))
            }
        </article>
    </section>
  )
}

export default Text
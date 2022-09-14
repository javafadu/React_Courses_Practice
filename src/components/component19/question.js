import React, {useState} from 'react'
import {AiOutlineMinusSquare,AiOutlinePlusSquare} from 'react-icons/ai'
const Question = ({title,info}) => {
    const [showInfo,setShowInfo]= useState(false);
  return (
    <article>
        <header>
            <h4>{title}</h4>
            <button className="btn" onClick={()=>setShowInfo(!showInfo)}>
                {showInfo ?  <AiOutlineMinusSquare/> : <AiOutlinePlusSquare/>}
            </button>
        </header>
         {showInfo && (<p>{info}</p>)}
    </article>
  )
}
export default Question
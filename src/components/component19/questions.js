import React, {useState} from 'react'
import data from './data'
import Question from './question'
import "./question.css";
const Questions = () => {
    const [questions,setQuestions]= useState(data);
  return (
      <main>
    <div className="container" style={{width:"70%"}}>
        <h3>Questions and answers about login</h3>
        <section className='section'>
            {
                questions.map(question=>{
                    return(
                        <Question key={question.id} {...question}/>
                    )
                })
            }
        </section>
    </div>
    </main>
  )
}

export default Questions
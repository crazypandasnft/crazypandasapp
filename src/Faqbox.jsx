import React, {useState} from 'react'

const Faqbox = ({question, answer}) => {
    const [show, setshow] = useState(false);
  return (
      <>
      <div className='questioncss d-flex text-start justify-content-between'>
          <h3>{question}</h3>
          <h4 style={{cursor: "pointer"}} className='plusminusbtn' onClick={() => setshow(!show)}>{show? "➖" : "➕"}</h4>
      </div>
      {
          show && <p className='answercss text-start' dangerouslySetInnerHTML={{__html:answer}}></p>
      }
      
      </>

  )
}

export default Faqbox
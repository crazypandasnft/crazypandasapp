import React, {useState} from 'react';
import accordionData from './Faqcontent';
import Faqbox from './Faqbox';
import Navbar from './Navbar';

const Faq = () => {
 const [faqData, setfaqData] = useState(accordionData);
  return (
    <>
    <section className='staking'>
      <Navbar/>
      <div className=' faq-container col-lg-8 col-md-10 col-11 mx-auto text-center'>
      <h1>FAQs</h1>
    { 
      faqData.map((ce) =>{
        const {id} = ce;
        return <Faqbox key={id} {...ce}/>
      })
    }
    </div>
    </section>
    
    </>
  )
}

export default Faq

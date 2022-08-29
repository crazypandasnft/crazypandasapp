import React, {useState} from 'react';
import accordionData from './Faqcontent';
import Faqbox from './Faqbox';
import Navbar from './Navbar';

const Faq = () => {
 const [faqData] = useState(accordionData);
  return (
    <>
    <section className='staking'>
      <Navbar/>
      <div className='faq-container col-lg-8 col-md-10 col-11 mx-auto text-center'>
      <h2 className='h2'>FAQs</h2>
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

import React from 'react'
// import './App.css';
import state1stimg from '../assets/images/state1stimg.jpg';
import state2ndimg from '../assets/images/state2ndimg.jpg';
import stateimg3rd from '../assets/images/stateimg3rd.jpg';
import stateimg4th from '../assets/images/stateimg4th.jpg';
import stateimg5th from '../assets/images/stateimg5th.jpg';
import Footer from '../Footer/Footer';
import { Header } from '../Header';
import Button from 'react-bootstrap/Button';

const Home = () => {
    return (
      
      <div className="App">
        <Header/>
        <div className='statebutton'>
        <Button variant="success">State</Button>
        </div>
        <div className='line container'style={{borderStyle:'solid', borderWidth:'0.1px 0 0 0', borderColor:'GrayText'}}></div>
       <div className='container'>
        <div className='state1 container col-sm-5'>
        
          <div className='stateimg1st '>
          <img src={state1stimg} style={{width:'600px', height:'350px'}} alt='sample' className="zoom-image"></img>
          <h3 style={{fontFamily:'revert-layer', margin:'20px 0 0px 0'}}><b>'दो-राज्य समाधान का वर्तमान युद्ध से कोई लेना-देना नहीं है'</b></h3>
          <p style={{fontFamily:'fantasy'}}>मध्य पूर्व को किस तरह देखना चाहिए, इस बारे में हमारे सहयोगियों के अपने-अपने दृष्टिकोण हैं। हम इस पर चर्चा कर सकते हैं और साथ मिलकर काम कर सकते हैं। 
            लेकिन सबसे पहले हमास, एक आतंकवादी संगठन को रोकना होगा, दक्षिण भारत में इजरायल के महावाणिज्यदूत ने कहा</p>
            <p style={{color:'gray'}}>06 जून 2024</p>
          </div>
          </div>
          
  
          <div className='state2'>
          <div className='state3'>
          <div className='stateimg2nd'>
            <img src={state2ndimg} style={{width:'270px', height:'190px'}} alt='sample' className="zoom-image"></img>
            <h5 style={{margin:'10px 0 10px 0',lineHeight:'30px'}}><b>यूपी कांग्रेस के नेता चाहते हैं कि <br/> प्रियंका गांधी राज्य इकाई का <br/>नेतृत्व करें</b></h5>
            <p style={{color:'gray'}}>10 जून 2024</p>
          </div>
          <div className='stateimg3rd'>
            <img src={stateimg3rd} style={{width:'270px', height:'190px'}} alt='sample' className="zoom-image"></img>
            <h5 style={{margin:'10px 0 10px 0', lineHeight:'30px'}}><b>पहली बार सांसद बने हर्ष मल्होत्रा <br/>​​मोदी सरकार में राज्य मंत्री बने</b></h5>
            <p style={{color:'gray'}}>10 जून 2024</p>
          </div>
          </div>
          
          <div className='state4 container'>
            <div className='stateimg4th '>
              <img src={stateimg4th} style={{width:'270px', height:'190px'}} alt='sample' className="zoom-image"></img>
              <h5 style={{margin:'10px 0 10px 0', lineHeight:'30px'}}><b>विधानसभा चुनावों को ध्यान में <br/> रखते हुए भाजपा ने केरल से दो <br/> लोगों को मोदी मंत्रिमंडल में<br/> शामिल किया</b></h5>
              <p style={{color:'gray'}}>10 जून 2024</p>
            </div>
            <div className='stateimg5th'>
              <img src={stateimg5th} style={{width:'260px', height:'190px'}} alt='sample' className="zoom-image"></img>
              <h5 style={{margin:'10px 0 10px 0', lineHeight:'30px'}}><b>लोकसभा चुनाव में हार के बाद <br/> यूपी के सीएम ने युवाओं से संपर्क साधा</b></h5>
              <p style={{color:'gray'}}>10 जून 2024</p>
            </div>
          </div>
          </div>
          
      </div>
      <Footer/>
      
      </div>
    );
  }

export default Home;
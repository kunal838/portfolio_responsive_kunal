import React from 'react';
import './Home.css'
import logo from './logo.svg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Home() {
  return (
    <div className='home'>
      <div className="home__logo"data-aos="fade-right" ><img className="logo" src={logo}/></div>
      
      <h1 data-aos="fade-up"
     data-aos-duration="3000">Hey,   I am kunal</h1>
      <div data-aos="fade-up"
     data-aos-duration="3000">
     
      This is my portfolio,In the project section I have posted some of my react project I have command over python and javascript<br/> , I have done many projects in this . Being a self learner and after deep introspection I found 
                    out the zeal in me towards programming 
                    </div>

<br/><br/>

       
    </div>
  );
}

export default Home;

import React from 'react';
import profileIMG from '../assets/profilePhoto.png';
import Card from '../UI/Card';
import img1 from '../assets/photo1.png';
import img2 from '../assets/photo2.png';
import img3 from '../assets/photo3.png';
import img4 from '../assets/photo_4.png';
import img5 from '../assets/photo5.png';
import img6 from '../assets/photo6.png';
import './home.css';

const Home = () => {
  return (
    <div className='home-container'>
      <div className="profile-card">
        <img src={profileIMG} alt="" className='profile-img'/>
        <h1 className="name">Rodney Cotton</h1>
        <h3 className="country">Helsinki, Finland</h3>
        <div className="cards">
          <Card title="100" desc="Posts"/>
          <Card title="2,242" desc="Follower"/>
          <Card title="1,432" desc="Following"/>
        </div>
      </div>
      <div className='gallery'>
        <img src={img1} alt="Photo1" className="photo1"/>
        <img src={img2} alt="Photo2" className="photo2"/>
        <img src={img3} alt="Photo3" className="photo3"/>
        <img src={img4} alt="Photo4" className="photo4"/>
        <img src={img5} alt="Photo5" className="photo5"/>
        <img src={img6} alt="Photo6" className="photo6"/>
      </div>

      <footer>created by <a href="https://github.com/yassinehaimouch">Yassine Haimouch</a> - devChallenges.io</footer>
    </div>
  )
}

export default Home
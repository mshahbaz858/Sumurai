import React from 'react'
import AboutSection from '../Components/About/AboutSection';
import AboutTemplate from '../Components/HOC/AboutTemplate';
import Achievement from '../Components/Home/Achievements/Achievement';
import HeaderView from '../Components/Home/HeaderView'
import HomeBody from '../Components/Home/HomeBody';
import NavbarCustom from '../Components/Home/NavbarCustom';
import TabArea from '../Components/Home/TabArea/TabArea';


import AllServices from '../Components/Services/AllServices';
import logo from '../Images/bg.jpg';
import ClientReviews from '../Components/Home/ClientReviews/ClientReviews';
import MachineLNews from '../Components/Home/MachineLNews/MachineLNews';
import PageStarter from './StyledComponent/PageStarter';


function Home() {
    return (
        <>
        
        <PageStarter className='Home mb-5' >
            <div className="home_BG_Div d-none d-md-block">
                <img src={logo} alt="bg image"/>
            </div>
            <div className='home-bg-div container'>
                
            </div>
            <HomeBody/>
        </PageStarter>
                     
            <AboutTemplate/>
            <AllServices/>
            
            <Achievement/>
            <ClientReviews/>
            <MachineLNews/>

            
        </>
    )
}

export default Home

import React from 'react'
import HomeSection from './components/HomeSection/HomeSection'
import men from '../../assets/images/men.png';
import women from '../../assets/images/women.png';
import electronics from '../../assets/images/electronics.png';
import jewelery from '../../assets/images/jewelery.png';

const Home = () => {
    return (
        <div className="home-field">
            <HomeSection img={men} title="awesome" content="yes" bg={false} reverse={false} button="More men's clothing" />
            <HomeSection img={women} title="awesome" content="yes" bg={true} reverse={true} button="More women's clothing" />
            <HomeSection img={electronics} title="awesome" content="yes" bg={false} reverse={false} button="More electronics" />
            <HomeSection img={jewelery} title="awesome" content="yes" bg={true} reverse={true} button="More jewelery" />
        </div>
    )
}

export default Home
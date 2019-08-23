import React from "react";
import Background from "../components/Background";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import Services from "../components/Services";
import FeturedRooms from '../components/FeaturedRooms';
import Button from "../components/StyledBackground";
export default function Home() {

    return (
        <>
    <Background>
        <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
        <Link to='/rooms' className="btn-primary">Our rooms</Link> 
        </Banner>
        </Background>
        <Services />
        <FeturedRooms/>
        <Button>Isaac</Button>
        </>
    );
}
import React from "react";
import Backgound from "../components/Background";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
const Rooms = () => {
    return (
    <Backgound background="roomsBackground">
        <Banner title="our rooms">
            <Link to="/" className="btn-primary">
                return home
            </Link>    
        </Banner>
    </Backgound>   
    );
};

export default Rooms;
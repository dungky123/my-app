import React from "react";
import Background from "../components/Background";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";

export default function Error() {
    return (
    <Background>
        <Banner title="404" subtitle="page not found">
            <Link to ="/" className="btn-primary">
                return home
            </Link>
        </Banner>
    </Background>
        );
}
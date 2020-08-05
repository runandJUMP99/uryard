import React, {useEffect, useState} from "react";

import Backdrop from "./Backdrop/Backdrop";
import Display from "./Display/Display";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

import classes from "./Layout.module.css";
import axios from "../axios";

const Layout = () => {
    const [featuredYard, setFeaturedYard] = useState("");
    const [fetchedYards, setFetchedYards] = useState([]);

    useEffect(() => {
        axios.get("/yards.json" )
            .then(res => {
                for (let key in res.data) {
                    fetchedYards.push({
                        ...res.data[key],
                        id: key
                    });
                }

                handleChange();
            })
            .catch(err => {
                console.log(err);
            });

    }, []);

    function handleChange() {
        let randomYard = fetchedYards[Math.floor(fetchedYards.length * Math.random())];
        setFeaturedYard(randomYard.path);
    }

    return (
        <div className={classes.Layout}>
            <Backdrop />
            <Header />
            <Display featuredYard={featuredYard} />
            <Footer handleChange={handleChange} />
        </div>
    );
};

export default Layout;
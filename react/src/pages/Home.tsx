import BasicList from '../components/BasicList';
import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    const [isShowButton, setIsShowButton] = useState(false);

    const hideButton = () => {
        setIsShowButton(false);
    };

    const showButton = () => {
        setIsShowButton(true);
    };

    return (
        <>
            <h3>{"Welcome to CVWO's sample react app! Here's a basic list for you to experiment with."}</h3>
            <br />
            <BasicList />
            <br />
            <Typewriter
                onInit={(typewriter) => {
                    hideButton();
                    typewriter
                        .changeDelay(80)
                        .pauseFor(1500)
                        .typeString("It's a little plain isn't it?")
                        .callFunction(showButton)
                        .start();
                }}
            />
            <br />
            {isShowButton && (
                <Button variant="contained" color="primary" component={Link} to="/styled">
                    {'Yes'}
                </Button>
            )}
        </>
    );
};

export default Home;

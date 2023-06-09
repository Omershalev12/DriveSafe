// import { ListItem, IconButton } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import './App.css';
import ItemList from './ItemList';
// import {Link} from 'react-router-dom';

const Home = () => {
    const [isCalculating, setIsCalculating] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [tokens, setTokens] = useState(4895.78);

    const togglePopup = () => {        
        setShowPopup(!showPopup);
        if (showPopup){
            setTokens(tokens +50);
        }
    };

    const handleButtonClick = () => {
        if (isCalculating) {
            togglePopup();
            return;
        }

        setIsCalculating(true);
        setTimer(0);

        setTimeout(() => {
            setIsRunning(!isRunning);
            setIsCalculating(false);
        }, 1000);
    };

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        };
    }, [isRunning]);

    useEffect(() => {
        if (timer > 0 && isCalculating) {
            setShowPopup(true);
        } else {
            setShowPopup(false);
        }
    }, [timer]);

    const formatTime = (time) => {
        const hours = Math.floor(time / 3600).toString().padStart(2, '0');
        const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
        const seconds = Math.floor(time % 60).toString().padStart(2, '0');

        return `${hours}:${minutes}:${seconds}`;
    };

    return (
        <div className="app">
            <header className="app-header">
                <div className="header-left">
                    <a href='/'><img className='logo' src={"DriveSafe.png"} height={60} width={156} /></a>
                </div>
                <div className="header-right">
                    <div className="hello-text">Hello, David!</div>
                </div>
            </header>
            <div className='token-div'>
                <div className="tokens-text">{tokens}</div>
                <img className='token' src={"token.png"} height={20} width={20} />
            </div>
            <main className="app-content">
                <div className="circle-container">
                    <button
                        className={`circle ${isCalculating ? 'calculating' : ''}`}
                        onClick={handleButtonClick}
                    >
                        <div className="circle-inner">
                            {isCalculating ? (
                                <div className="spinner"></div>
                            ) : (
                                <div className="button-text">
                                    {isRunning ? formatTime(timer) : 'New trip'}
                                </div>
                            )}
                        </div>
                    </button>
                    {showPopup && <div className="popup">
                        <button className="close-button" onClick={togglePopup}>
                            X
                        </button><h2>You earned 50 Points for Driving Safely!</h2>
                        <br />
                        <h4>Avarage speed was 14 kph</h4>
                        <h4>You had 0 sudden stops, Congrats!</h4>
                        <h3>Keep driving safely</h3></div>}
                </div>
            </main>
            <div>
                <ItemList />
            </div>
            <footer className="app-footer">
                <nav className="navbar">
                    <ul className="nav-list">
                        <li className="nav-item">Home</li>
                        <li className="nav-item"><a className='link' href='./Stats'>Stats</a></li>
                        <li className="nav-item"><a className='link' href='./Articles'>Articles</a></li>
                        <li className="nav-item"><a className='link' href='./Profile'>Profile</a></li>
                    </ul>
                </nav>
            </footer>
        </div>
    );
};

export default Home;
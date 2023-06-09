import { ListItem } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import './App.css';
import ArticleList from './ArticleList';
import ItemList from './ItemList';


const Articles = () => {
    const tokens = 4895.78;


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
            <div className='article'><h2>Articles</h2></div>
            <main className="app-content">
                <ArticleList />
            </main>

            <footer className="app-footer">
                <nav className="navbar">
                    <ul className="nav-list">
                        <li className="nav-item"><a className='link' href='./'>Home</a></li>
                        <li className="nav-item"><a className='link' href='./Stats'>Stats</a></li>
                        <li className="nav-item"><a className='link' href='./Articles'>Articles</a></li>
                        <li className="nav-item"><a className='link' href='./Profile'>Profile</a></li>
                    </ul>
                </nav>
            </footer>
        </div>
    );
};

export default Articles;
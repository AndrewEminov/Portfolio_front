import React from 'react';
import styles from './landing.module.scss';
import {Home} from "./components/home/home";

export function LandingPage() {
    return (
        <div className={ styles.container}>
            <Home/>
        </div>
    )
}
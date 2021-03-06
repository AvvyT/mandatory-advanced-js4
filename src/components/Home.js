import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import '../App.css';
import './Home.css';

function ChooseNames(props) {
    const [first, updateFirst] = useState("Player1");
    const [second, updateSecond] = useState("Player2");

    const focus = (e) => e.target.select();

    return (
        <div className='App'>
            <Helmet>
                <title>Home page</title>
            </Helmet>
            <h1>Connect Four</h1>

            <div>
                <h2>Choose a players name</h2>
                <main>
                    <input maxLength={11}
                        type="text"
                        className='style-input'
                        placeholder=' Write players name..'
                        value={first}
                        onClick={focus}
                        onChange={e => {
                            updateFirst(e.target.value);
                            props.onChangeOne(e);
                        }}
                    /><br></br>
                    <input maxLength={11}
                        type="text"
                        className='style-input'
                        placeholder=' Write players name..'
                        value={second}
                        onClick={focus}
                        onChange={e => {
                            updateSecond(e.target.value);
                            props.onChangeTwo(e);
                        }}
                    /><br />

                    <button className='start'
                        type='submit'
                        onClick={props.login}
                    >Play</button>
                </main>
            </div>
        </div>
    );
}
export default ChooseNames;
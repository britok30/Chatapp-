import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal';
import './Join.css';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    const onClick = (e) => {
        return !name || !room ? e.preventDefault() : null;
    };

    return (
        <div className="join-hero">
            <div className="outer-container">
                <div className="inner-container">
                    <Fade bottom cascade duration={5000} distance="20px">
                        <h1 className="heading">The ChatApp</h1>
                    </Fade>

                    <div>
                        <input
                            className="input"
                            type="text"
                            placeholder="Name"
                            type="text"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <input
                            className="input"
                            type="text"
                            placeholder="Room"
                            type="text"
                            value={room}
                            onChange={(e) => {
                                setRoom(e.target.value);
                            }}
                        />
                    </div>
                    <Link
                        onClick={onClick}
                        to={`/chat?name=${name}&room=${room}`}
                    >
                        <button className="button" type="submit">
                            Sign In
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Join;

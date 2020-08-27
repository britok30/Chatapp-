import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="join-hero">
            <div className="joinOuterContainer">
                <div className="joinInnerContainer">
                    <h1 className="heading">Welcome to ChatApp</h1>
                    <div>
                        <input
                            type="text"
                            placeholder="joinInput"
                            type="text"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="joinInput"
                            type="text"
                            value={room}
                            onChange={(e) => {
                                setRoom(e.target.value);
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Join;

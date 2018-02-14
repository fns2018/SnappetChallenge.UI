import React from 'react';

import './ControlBar.css';

const ControlBar = () => {
    return (
        <div className="control-bar">
            <div className="control-bar-left">
                <div>
                    <div>
                        <div className="toggle-btn toggle-btn-left">
                            <svg className="icon" id="5e5a6c97-c9a2-448a-854c-c88657e57ef9" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>balls</title><path d="M23.69,11.53a4.47,4.47,0,0,0-4.39,3.61H12.7a4.47,4.47,0,1,0,0,1.73h6.6a4.47,4.47,0,1,0,4.39-5.34Z"/></svg>
                        </div>
                        <div className=" toggle-btn toggle-btn-right">
                            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>person</title><g id="c49a1313-0074-4af1-86ee-e15c459abd9f" data-name="Layer 2"><g id="6d5e4561-974b-44ee-b276-d2a7c6ce8511" data-name="layer1"><g id="75fa56fe-e287-40b3-93ad-daab39438160" data-name="Readspeaker"><g id="515a9735-378f-4678-a1fd-31b0ebc981b8" data-name="circle3338"><circle cx="16.05" cy="10.42" r="6.24"/></g><g id="6c2fd0d9-a4eb-432d-b533-0d62d942f9c4" data-name="path3346"><path d="M11.27,18.31a3.27,3.27,0,0,0-2.6,1.44,5.6,5.6,0,0,0-1,3.31v3.71a1,1,0,0,0,1,1H23.29a1,1,0,0,0,1-1V22.63h0a5.52,5.52,0,0,0-1-2.88,3.27,3.27,0,0,0-2.6-1.44Z"/></g></g></g></g></svg>
                        </div>
                    </div>
                </div>
                <div className="dropdown">
                    <div className="btn btn-default">
                        <div style={{display: 'inline-block'}}>Math Grade 5</div>
                        <svg style={{display: 'inline-block'}} className="icon" id="4277e692-56ed-4859-b091-d691c1a257d8" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>Down</title><path d="M27.78,9.51a2,2,0,0,0-2.85,0L16,18.45l-8.86-9a2,2,0,0,0-2.85,0,2,2,0,0,0,0,2.85L14.61,22.58a2,2,0,0,0,2.85,0L27.78,12.26a2,2,0,0,0,0-2.75Z"/></svg>
                    </div>
                </div>
            </div>

            <div className="btn btn-blue">
                    Add learning objective
                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>Plus</title><g id="6f243fd7-c556-47e1-8f68-0331adaf55b1" data-name="Layer 2"><g id="2eca55ae-b0da-4acb-a077-deef613d2c13" data-name="path102"><path d="M18.11,28.42c0-3.81,0-6.63,0-10.31H28.42c2.72,0,2.72-4.22,0-4.22H18.11V3.58c0-2.72-4.22-2.72-4.22,0,0,3.81,0,6.63,0,10.31H3.58c-2.72,0-2.72,4.22,0,4.22H13.89V28.42C13.89,31.14,18.11,31.14,18.11,28.42Z"/></g></g></svg>
            </div>

            <div className="btn btn-purple">
                Automatic update
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>Refresh</title><g id="cad83917-f4af-40e8-a5a7-6e4782600ab2" data-name="Layer 2"><path d="M7.53,7.85A12,12,0,0,1,22.37,6.17l1.91-2.25a.67.67,0,0,1,1.17.32l1.55,7a.67.67,0,0,1-.67.79l-7.19-.39a.67.67,0,0,1-.51-1.11l1.71-2A8.9,8.9,0,1,0,24.89,17a1.54,1.54,0,0,1,3.08.22A12,12,0,1,1,7.53,7.85Z"/></g></svg>
            </div>
        </div>
    )
}

export default ControlBar;
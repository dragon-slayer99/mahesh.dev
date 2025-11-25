import React from 'react';
import TextType from './TextType'
import './Content.css'
// import ProfileImg from '../../../assets/Coding 5.svg'
import Tooltip from './Tooltip';
const Content = () => {
    return (
        <>
            <section className="hero-section">
                <div className="hero-container">
                    <div className="hero-content">
                        <div className='type-text-div'>
                            <h1 className='type-text'>
                                <TextType
                                    text={["I am Mahesh", "I am a CS Student"]}
                                    typingSpeed={200}
                                    pauseDuration={1500}
                                    deletingSpeed={200}
                                    showCursor={true}
                                    cursorCharacter="_"
                                />
                            </h1>
                        </div>

                        <div className="hero-subtitle">
                            <h1>
                                Simplicity is the ultimate innovation
                            </h1>
                            <p>
                                — I believe the best solutions are not the most complicated ones, but the ones that make life easier, faster, and more meaningful.
                            </p>

                        </div>
                        <Tooltip />
                    </div>

                    {/* <div className="hero-image">
                        <img
                            src={ProfileImg}
                            alt="Hero Image"
                        />
                    </div> */}
                </div>
            </section>
        </>
    );
};

export default Content;
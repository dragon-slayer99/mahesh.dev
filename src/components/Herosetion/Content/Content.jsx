import React from 'react';
import TextType from './TextType'
import './Content.css'
// import ProfileImg from '../../../assets/PROFILE_IMG.png'
import ProfileImg from '../../../../public/Coding 5.svg'
// import ProfileImg from '../../../../public/profile_picture.svg'
import Tooltip from './Tooltip';
const Content = () => {
    return (
        <>
            <section className="hero-section scrollAnimate fadeAnimate">
                <div className="hero-container">
                    <div className="hero-content">
                        <h1 className='type-text'>I am
                            <TextType
                                text={[" Mahesh", " a student"]}
                                typingSpeed={200}
                                pauseDuration={1500}
                                deletingSpeed={200}
                                showCursor={true}
                                cursorCharacter="|"
                            />
                        </h1>
                        <p className="hero-subtitle">
                            Simplicity is the ultimate innovation — I believe the best solutions are not the most complicated ones, but the ones that make life easier, faster, and more meaningful.
                        </p>
                        <Tooltip/>
                    </div>
                    
                    <div className="hero-image">
                        <img
                            src={ProfileImg}
                            alt="Hero Image"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Content;
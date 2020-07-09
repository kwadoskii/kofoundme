import React from 'react';
import Section from './Section';
import Button from './Button';
import img1 from '../images/photo-of-man-holding-a-book-927022.jpg';
import img2 from '../images/photo-of-people-doing-handshakes-3183197.jpg';
import img3 from '../images/woman-in-front-of-her-computer-3059745.jpg';

const Jumbotron = () => {
    return (
        <div>
            <Section paddingTop='pt-5'>
                <div className="col-md-6 header-aside">
                    <div className="header">
                        <h2>Find a technical and non-technical <span className="xblue">co-founder</span> for your startup, idea or existing business</h2>
                    </div>

                    <div className="mute">
                        <p className="mute-p">
                            Get ahead of the strainous activity of searching for co-founder by making us do all the hard work and match you with co-founders and advisors best suited to your needs.
                        </p>

                        <Button 
                            name="Get Started"
                            type="button"
                            class="btn btn-primary pr-5 pl-5 font-weight-normal"
                        />
                    </div>                   
                </div>

                <div className="col-md-6 pic-aside">
                    <div className="picc-aside"></div>
                        <div className="row" style={{ marginRight: -80 }}>
                            <div className="col-md-4 ximg" style={{ backgroundImage: `url(${img1})`, height: 220 }}></div>
                            <div className="col-md-6 ximg" style={{ backgroundImage: `url(${img2})`, width: '100%', marginTop: -30, marginRight: -30 }}></div>
                        </div>
                        <div className="row mt-5 ml-1">
                            <div className="col-md-12 ximg" style={{ backgroundImage: `url(${img3})`, width: '100%', minHeight: 470, marginTop: -30 }}></div>
                        </div>        
                </div>
            </Section>
        </div>
    );
}

export default Jumbotron;
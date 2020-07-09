import React from 'react';
import Section from './Section';
import img1 from '../images/photo-of-man-holding-a-book-927022.jpg';
import img2 from '../images/photo-of-people-doing-handshakes-3183197.jpg';
import img3 from '../images/woman-in-front-of-her-computer-3059745.jpg';

const About = () => {
    return (
        <div>
            <Section paddingTop='pt-5'>
                <div className="col-md-6">
                    {/* <div className='about-bg'> */}
                    <div className="row about-bg">
                        <div className="col-md-6 ximg mt-img" style={{ backgroundImage: `url(${img1})`, height: 220}}></div>
                        <div className="col-md-4 ximg mt-img" style={{ backgroundImage: `url(${img2})`, height: 180}}></div>
                        <div className="col-md-10 col-md-offset-1 ximg" style={{ backgroundImage: `url(${img3})`, height: 420}}></div>
                    </div>
                    {/* </div> */}
                </div>

                <div className="col-md-6 about">
                    <h5 className='xblue bolder'>About Us</h5>
                    <h2 className='about-header'>The first of<br></br> its kind in Africa</h2>

                    <p className='col-md-9 about-p mt-4'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel. Id neque aliquam vestibulum morbi blandit cursus. Nulla pellentesque dignissim enim sit amet venenatis urna cursus. Vitae nunc sed velit dignissim sodales ut eu sem integer. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Nisi quis eleifend quam adipiscing. Cursus metus aliquam eleifend mi. Fermentum iaculis eu non diam phasellus vestibulum lorem. Pulvinar mattis nunc sed blandit libero volutpat sed. Amet volutpat consequat mauris nunc congue nisi. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Sed vulputate odio ut enim blandit volutpat maecenas volutpat. Sit amet porttitor eget dolor morbi non. Tellus cras adipiscing enim eu turpis egestas pretium. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Scelerisque fermentum dui faucibus in ornare quam viverra.
                    </p>
                {/* <div className="row">
                    <div className="col-md-12">
                        <div className="cornerpiece"></div>
                    </div>
                </div> */}
                </div>

            </Section>
            
        </div>
    );
}

export default About;
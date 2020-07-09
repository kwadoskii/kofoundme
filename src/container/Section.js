import React from 'react';

const Section = (props) => {
    return (
        <div className={`pl-5  ${props.paddingTop}`}>
            <div className="row">
                {props.children}
            </div>
        </div>
    );
}

export default Section;
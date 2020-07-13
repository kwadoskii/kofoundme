import React from 'react';

const Section = (props) => {
    const classes = props.classes ? props.classes : "";
    return (
        <div className="row mr-0">
            <div className={`pl-5  ${props.paddingTop} ${classes}`}>
                {props.children}
            </div>
        </div>
    );
}

export default Section;
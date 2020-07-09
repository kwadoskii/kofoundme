import React from 'react';

const Button = (props) => {
    return (
        <div>
            <button 
                className={props.class} 
                type={props.type} >
                {props.name}
            </button>
        </div>
    );
}

export default Button;
import React from 'react';
import './Button.css';
function Button({children, type }) {
    const tenClass = `btn btn-${type}`;
    return(
        <button className ={tenClass}>
            {children}
        </button>
    )
}
export default Button;
import React from 'react';
import './Alert.css';
function Alert({text, type}){
 const alertText = `alert alert-${type}`;
 return(
    <div className={alertText}>
        {type == 'success' && '✔️'}
        {type == 'error' && '❌'}
        {type == 'warning' && '⚠️'}
        {text}
    </div>
 )

}
 export default Alert;
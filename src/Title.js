import React, { useState } from 'react';

const Title = () => {
    const [checked, setChecked] = useState(false);
    const onCheckbox = (e) => {
        console.log(e.target.checked);
    }
    return(
        <div className="input container">
            <h1>checkbox</h1>
            <input type='checkbox' onChange={onCheckbox} ></input>
          
        </div>
    )
}


export default Title
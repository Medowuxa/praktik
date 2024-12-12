import React from 'react';
import Pic1 from '../image/pets/ezh.jpg';

function Slide(props) {
    debugger;
    return (
       
            <div className={props.css_class}>
        <img
          src={'https://pets.сделай.site'+props.data.image}
          className="d-block m-auto"
          alt={props.data.kind}
          style={{ height: 200 }}
        />
        <h2 className="text-center">{props.data.kind}</h2>
        <p className="text-center">
          {props.data.description}
        </p>
      
        </div>
    );
}

export default Slide;
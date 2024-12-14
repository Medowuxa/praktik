import React from 'react';
import Pic1 from '../image/pets/ezh.jpg';

function Slide(props) {
  
    return (
       
            <div className={props.css_class} style={{marginTop: 20 }}>
              <h2 className="text-center text-success">{props.data.kind}</h2>
        <p className="text-center">
          {props.data.description}
        </p>
        <img
          src={'https://pets.сделай.site'+props.data.image}
          className="d-block m-auto"
          alt={props.data.kind}
          style={{ height: 250 , paddingBottom: 30 }}
        />
        
      
        </div>
    );
}

export default Slide;
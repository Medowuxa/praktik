import React, { useEffect, useState } from 'react';
import Pic1 from '../image/pets/ezh.jpg';
import Pic2 from '../image/pets/krol.jpeg';
import Pic3 from '../image/pets/porosya.jpg';
import Slide from './Slide';



function Slider(props) {


  // useEffect(()=>req_slide(slide, setSlide), []);
  
  // var props=[{
  //   "data": {
  //       "id": 6,
  //       "kind": "Кенгуру",
  //       "description": "Кенгуру из Бразилии, любит прыгать, ласковая",
  //       "image": "/storage/images/06vZ5JD5SiY9scNCLx6NRku8f7t85CvBbSmbGObu.png"
  //   },
  //   "css_class": "carousel-item active"
  // },
  // {
  //   "data": {
  //       "id": 6,
  //       "kind": "Кенгуру",
  //       "description": "Кенгуру из Бразилии, любит прыгать, ласковая",
  //       "image": "/storage/images/06vZ5JD5SiY9scNCLx6NRku8f7t85CvBbSmbGObu.png"
  //   },
  //   "css_class": "carousel-item"
  // },

  // {
  //   "data": {
  //       "id": 6,
  //       "kind": "Кенгуру",
  //       "description": "Кенгуру из Бразилии, любит прыгать, ласковая",
  //       "image": "/storage/images/06vZ5JD5SiY9scNCLx6NRku8f7t85CvBbSmbGObu.png"
  //   },
  //   "css_class": "carousel-item"
  // }

// ];

let [slide, setSlide]=useState({data:{pets:[]}});

useEffect(()=>req_slide(slide, setSlide), []);

function req_slide(slide, setSlide) {   
var requestOptions = {
method: 'GET',  
};

fetch("https://pets.сделай.site/api/pets/slider", requestOptions)
.then(response => response.json())
.then(result => {
console.log(result)
setSlide(result)
})
.catch(error => console.log('error', error));

}
let  slides=slide.data.pets.map((pet, index)=>{
if (index==0){return<Slide data={pet} key={index} css_class='carousel-item active'/>;        
} else {return <Slide data={pet} key={index} css_class='carousel-item'/>;

}})

let  indicators=slide.data.pets.map((pet, index)=>{
if (index==0){return <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" key={index+'btn'}></button>;        
} else {return  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} aria-label={"Slide "+(Number(index)+1)} key={index+'btn'}></button>;

}})


return (
<div>
<h2 className="text-center text-white bg-success m-2">Найденные животные</h2>
    <div id="carouselExampleIndicators" className="carousel slide carousel-dark w-50 m-auto" data-bs-ride="carousel" style={{minWidth: '250'}}>
<div className="carousel-indicators">
{indicators}
</div>
<div className="carousel-inner">

{slides}

</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
<span className="carousel-control-prev-icon" aria-hidden="true"></span>
<span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
<span className="carousel-control-next-icon" aria-hidden="true"></span>
<span className="visually-hidden">Next</span>
</button>     
</div>
  </div>

)


  // return (
  //       <div>
  //           <h2 className="text-center text-white bg-success m-2">Найденные животные</h2>
  // <div
  //   id="carouselExampleIndicators"
  //   className="carousel slide m-auto bg-success bg-opacity-25 w-75 p-2"
  //   data-bs-ride="carousel"
  //   style={{ minHeight: 400 }}
  // >
  //   <div className="carousel-indicators">
  //     <button
  //       type="button"
  //       data-bs-target="#carouselExampleIndicators"
  //       data-bs-slide-to={0}
  //       className="active"
  //       aria-current="true"
  //       aria-label="Slide 1"
  //     />
  //     <button
  //       type="button"
  //       data-bs-target="#carouselExampleIndicators"
  //       data-bs-slide-to={1}
  //       aria-label="Slide 2"
  //     />
  //     <button
  //       type="button"
  //       data-bs-target="#carouselExampleIndicators"
  //       data-bs-slide-to={2}
  //       aria-label="Slide 3"
  //     />
  //   </div>
  //   <div className="carousel-inner">
  //     {/* <div className="carousel-item active">
  //       <img
  //         src={Pic1}
  //         className="d-block m-auto"
  //         alt="Ежик"
  //         style={{ height: 200 }}
  //       />
  //       <h2 className="text-center">Найден ежик</h2>
  //       <p className="text-center">
  //         Маленький ежик, был утерян в приморcком районе
  //       </p>
  //     </div> */}
  //     {console.log(props)}
  //     <Slide {...props[0]}/>
  //     <Slide {...props[1]}/>
  //     <Slide {...props[2]}/>
  //     {/* <div className="carousel-item">
  //       <img
  //         src={Pic2}
  //         className="d-block m-auto"
  //         alt="Кролик"
  //         style={{ height: 200 }}
  //       />
  //       <h2 className="text-center">Найден кролик</h2>
  //       <p className="text-center">
  //         Пушистый кролик, был утерян в адмиралтейском районе
  //       </p>
  //     </div>
  //     <div className="carousel-item">
  //       <img
  //         src={Pic3}
  //         className="d-block m-auto"
  //         alt="Поросенок"
  //         style={{ height: 200 }}
  //       />
  //       <h2 className="text-center">Найден поросенок</h2>
  //       <p className="text-center">
  //         Розовый мини пиг, был утерян в пушкинском районе
  //       </p>
  //     </div> */}
  //   </div>
  //   <button
  //     className="carousel-control-prev"
  //     type="button"
  //     data-bs-target="#carouselExampleIndicators"
  //     data-bs-slide="prev"
  //   >
  //     <span className="carousel-control-prev-icon" aria-hidden="true" />
  //     <span className="visually-hidden">Предыдущий</span>
  //   </button>
  //   <button
  //     className="carousel-control-next"
  //     type="button"
  //     data-bs-target="#carouselExampleIndicators"
  //     data-bs-slide="next"
  //   >
  //     <span className="carousel-control-next-icon" aria-hidden="true" />
  //     <span className="visually-hidden">Следующий</span>
  //   </button>
  // </div>
  //       </div>
  //   );
};  

export default Slider;
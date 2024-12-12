// import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';


// function Slide(props) {
//   return (
//     <div className={props.css_class}>
//       <h2 className="text-center text-success">{props.data.kind}</h2>
//       <p className="text-center">{props.data.description}</p>
//       <img
//         src={'https://pets.сделай.site' + props.data.image}
//         className="d-block m-auto"
//         alt="photo_pets"
//         style={{ height: '200px' }}
//       />
//     </div>
//   );
// }

// function Loader(props) {
//   return (
//     <div className="justify-content-center align-items-center" id="loader" style={props.display}>
//       <div className="fs-1 text-success">...Идет загрузка</div>
//     </div>
//   );
// }

// function Carousel() {
//   const [slide, setSlide] = useState({ data: { pets: [] } });
//   const [show, setShow] = useState({ display: 'flex' });

//   useEffect(() => {
//     req_slide(setSlide, setShow);
//   }, []);

//   function req_slide(setSlide, setShow) {
//     var requestOptions = { method: 'GET' };

//     fetch('https://pets.сделай.site/api/pets/slider', requestOptions)
//       .then((response) => response.json())
//       .then((result) => {
//         setSlide(result);
//         setShow({ display: 'none' });
//       })
//       .catch((error) => console.log('error', error));
//   }

//   const slides = slide.data.pets.map((pet) => (
//     <Slide data={pet} key={pet.id} css_class="carousel-item" />
//   ));

//   const indicators = slide.data.pets.map((pet, index) => (
//     <button
//       type="button"
//       data-bs-target="#carouselExampleIndicators"
//       data-bs-slide-to={index}
//       className={index === 0 ? 'active' : ''}
//       aria-label={`Slide ${index + 1}`}
//       key={pet.id + 'btn'}
//     ></button>
//   ));

//   return (
//     <div>
//       <Loader display={show} />
//       <div id="carouselExampleIndicators" className="carousel slide carousel-dark w-50 m-auto" data-bs-ride="carousel">
//         <div className="carousel-indicators">{indicators}</div>
//         <div className="carousel-inner">{slides}</div>
//         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>
//     </div>
//   );
// }

// const root = document.getElementById('root');
// ReactDOM.render(<Carousel />, root);

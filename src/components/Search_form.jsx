import { useState, useEffect } from "react";
import CardsList from "./Card_List";
import { useLocation } from "react-router-dom";
import { QuickSearchRequest } from "./Request";


const ComponentName = () => {
  const location = useLocation();
    const query = location.state?.query
    const [card, setCard] = useState({ data: { orders: [] } });
    const [kind, setKind] = useState('')
    const [district, setDistrict] = useState('')

    const searchRequest = (card, setCard) => {
        fetch(`https://pets.сделай.site/api/search/order?district=${district}&kind=${kind}`).then(response => response.json())
            .then(result => {
                console.log(result)
                setCard(result)
            }).catch(error => console.log('error', error));
    } 

    useEffect(() => {
        QuickSearchRequest(query, card, setCard)
    }, [query]);

    return (
   <div>
      <h2 className="text-center bg-success text-white" >Поиск по объявлениям</h2>
      <form className="w-25 m-auto minContainer">
          <div className="row mb-3">
              <div className="col-sm-10 w-100">
                  <label htmlFor="input3" className="col-form-label">Район</label>
                  <input className="form-control m-auto" id="input3" onChange={(e) => setDistrict(e.target.value)}/>
              </div>
          </div>
          <div className="row mb-3">
              <div className="col-sm-10 w-100">
                  <label htmlFor="inputPassword3" className="col-form-label">Вид</label>
                  <input className="form-control w-100" onChange={(e) => setKind(e.target.value)} />
              </div>
          </div>
          <p className="btn bg-success text-white"  onClick={() => {
              searchRequest(card, setCard)
          }}>Найти</p>
      </form>
      <CardsList data={card.data.orders} itemsPerPage={6}/>
  </div>
    );
};

export default ComponentName;
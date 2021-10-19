import React from 'react';
import './modal.css';
function Modal({ condition, modalAction, products, deleteProducts, clearBasket}) {

let style;
let productsList;
if (condition==="on") style={display: "block"};
else style = {display: "none" };

if (products!==undefined&&products.length>0) {
    productsList = products.map((product, index)=>{
        return(
            <tr key={index}>
                <td><i className="fa fa-trash-o deleteprod" onClick={()=>deleteProducts(index)}></i></td>
                <td className="hide-on-phone">{product.name}</td>
                <td><div className="prod-icon"><img src={product.img} alt={product.name} /></div></td>
                <td>{product.price}$</td>
            </tr>
        )
    });
    var sum = products.reduce((s, current)=>{
        return s+current.price;
    },0);
}
else productsList = <tr><td colSpan="4" style={{textAlign: "center"}}><h2>No items added!</h2></td></tr>

    const modalHeader = <div className="row" id="user-info">
        <div className="col-md-3">
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name" placeholder="John" />
        </div>
        <div className="col-md-3">
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="email" placeholder="example@mail.com" />
        </div>
        <div className="col-md-3">
            <label htmlFor="phone">Phone: </label>
            <input type="text" id="phone" name="phone" placeholder="+995-00-01-02" />
        </div>
        <div className="col-md-3">
            <label htmlFor="address">Adress: </label>
            <input type="text" id="address" name="address" placeholder="Tbilisi, Rustaveli Ave..."/>
        </div>
    </div>;

    const modalBody = <table>
        <thead>
            <tr><td colSpan="5" id="order-details">Order details</td></tr>
            <tr id="order-header">
                <th></th>
                <th className="hide-on-phone">name</th>
                <th>img</th>
                <th>price</th>
            </tr>
        </thead>
        <tbody>
            {productsList}
        </tbody>
        <tfoot>
            <tr>
                <td>
                    <button className="basket-button">Order</button>
                    <button className="basket-button" onClick={() => clearBasket()}>Clear</button>
                </td>
                <td colSpan="4" id="sum"><b>Sum: </b><span>{sum}</span>$</td>
            </tr>
        </tfoot>
    </table>;
    

  return (
      <div id="myModal" className="modal" style={style}>
            <div className="container">
                <div className="modal-content">
                    <span className="close" onClick={() => {modalAction("off") }}>&times;</span>
                    {modalHeader}
                    {modalBody}
                </div>
            </div>

      </div>
  )
}
export default Modal;
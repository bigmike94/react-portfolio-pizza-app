import React, {useState, useEffect} from 'react';
import './product.css';

function Product({id}){
    const [product, setProduct]  = useState(null);
        useEffect(()=>{
            fetch(`http://localhost:3000/products/${id}`).then(response => response.json())
            .then(data => {setProduct(data)});
        });
        if (product === null) return <div>loading...</div>;
        let images;
        if (product.imgs!==undefined) {
            images = product.imgs.map((img, index) => {
                return (
                    <div className="col-md-6" key={index}>
                        <img src={img} className="img-fluid" alt={`${product.name}${index}`} />
                    </div>
                )
            })
        }
        else{
            images = <div className="col-md-12">
                        <img src={product.img} className="img-fluid" alt={`${product.name}`} />
                    </div>
        }
        return (
            <div className="row" id="info-section">
                <div className="col-md-4">
                    <div className="row">
                        {images}
                    </div>
                </div>
                <div className="col-md-8">
                    <div><b>Name:</b>&nbsp;{product.name}</div>
                    <div><b>Price:</b>&nbsp;{product.price}$</div>
                    <h5>Description:</h5>
                    <p>{product.desc}</p>
                </div>
            </div>
        );
}
export default Product;
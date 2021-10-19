import React, {useState, useEffect} from 'react';
import './products.css';
import {Link} from 'react-router-dom';
function Products({onProductAdd, page=1}){
        const limit = 12;
        const pages = [];
        let pagination;
        const [products, setProducts] = useState(null);
        const [total_pages, setTotal_pages] = useState(1);
        const [currentPage, setcurrentPage] = useState(1);
        useEffect(() => {
            fetch(`http://localhost:3000/products`).then(response => response.json())
                .then(data => {
                    if (data.length % limit === 0) setTotal_pages(data.length/limit);
                    else setTotal_pages(Math.ceil(data.length / limit));
                });
        }, []);
        useEffect(() => {
            fetch(`http://localhost:3000/products?_page=${page}&_limit=${limit}`).then(response => response.json())
                .then(data => {setProducts(data); setcurrentPage(page)});
        }, [page]);
        let productsList;
        if (products === null) productsList = "loading...";
        else {
            productsList = products.map((product, index) => {
                let product_desc = product.desc;
                if (product.desc.length>50) {
                    product_desc = product.desc.substring(0, 50)+"...";
                }
                return (
                    <div className="сol-md-2" key={index}>
                        <div className="product" key={product.id}>
                            <div className="product-img">
                                <img src={product.img} alt={product.name} className="img-fluid"/>
                            </div>
                            <div className="product-details">
                                <div><b>Name:</b><span>&nbsp;{product.name}</span></div>
                                <div><b>Price:</b><span>&nbsp;{product.price}$</span></div>
                                <div><b>Desc:</b>&nbsp;{product_desc}</div>
                            </div>
                            <div className="plus-prod" onClick={() => onProductAdd(product)}>
                                <i className="fa fa-plus"></i>
                            </div>
                            <Link type="button" to={`/products/${product.id}`} className="btn view-button btn-lg">View</Link>
                        </div>
                    </div>
                    
                );
            });
        }
        for (let i = 1; i <= total_pages; i++) {
            pages.push(i);
        }
        if (pages.length>1) {
            pagination = pages.map((nextPage, index) => {
                return <li className={`page-item ${nextPage === parseInt(currentPage) ? "active" : ""}`} key={index}><Link className="page-link" to={`/products/page/${nextPage}`}>{nextPage}</Link></li>
            });
        }
        else pagination=null;
       
        return (
            <React.Fragment>
                <div id="products-wrapper" className="row mx-auto">
                    {productsList}
                    <div className="col-10">
                        <ul className="pagination flex-wrap">
                            <li className={`page-item ${page <= 1 ? "d-none" : ""}`}>
                                <Link className="page-link" to={`/products/page/${parseInt(page) - 1}`}>
                                    <i className="fa fa-chevron-left"></i>
                                </Link>
                            </li>
                            {pagination}
                            <li className={`page-item ${page >= total_pages ? "d-none" : ""}`}>
                                <Link className="page-link" to={`/products/page/${parseInt(page) + 1}`}>
                                    <i className="fa fa-chevron-right"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        )
}
export default Products;
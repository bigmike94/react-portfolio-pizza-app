import React, {Component} from 'react';
import './app.css'
import Header from '../Header';
import Products from '../Products';
import Modal from '../Modal';
import Footer from '../Footer';
import About from '../About';
import Product from '../Product';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
class App extends Component {
  state = {
    productsState: [],
    modal: "off"
  }
  addProduct = (product) => {
    this.setState((state) => {
      state.productsState.push(product);
      localStorage.products = JSON.stringify(state.productsState);
      return state;
    });
  }
  componentDidMount(){
    if (localStorage.products!==undefined) {
     this.setState((state)=>{
       state.productsState = JSON.parse(localStorage.products);
       return state;
     })
    }
  }
  modalAction = (condition)=>{
    this.setState((state)=>{
      state.modal = condition;
      return state;
    })
  }
  deleteProducts = (index)=>{
    this.setState((state)=>{
      state.productsState.splice(index, 1);
      localStorage.products = JSON.stringify(state.productsState);
      return state;
    })
  }
  clearBasket = ()=>{
    this.setState({productsState: []});
    localStorage.removeItem("products");
  }
  render(){
     return (
       <React.Fragment>
         <Router>
             <Header modalAction={this.modalAction} />
             <main className="container-fluid">
             <Switch>
               <Route path="/" exact render={() => <Products onProductAdd={this.addProduct} />}/>
               <Route path="/products" exact render={() => <Products onProductAdd={this.addProduct} />} />
               {/* <Route path="/products/page/:pagenum" exact render={({ match, history}) => <Products page={match.params.pagenum} onProductAdd={this.addProduct} path={history.location.pathname}/>} /> */}
               <Route path="/products/page/:pagenum" exact render={({match}) => <Products page={match.params.pagenum} onProductAdd={this.addProduct}/>} />
               <Route path="/about" component={About} exact />
               <Route path="/products/:id" exact render={({ match }) => <Product id={match.params.id} />} />
               <Route exact render={() => <h1 className="text-center" id="error">404! Nothing Found</h1>} />
              </Switch>
             </main>
             <Footer />
         </Router>
         <Modal condition={this.state.modal} modalAction={this.modalAction} products={this.state.productsState} deleteProducts={this.deleteProducts} clearBasket={this.clearBasket} />
       </React.Fragment>
    );
  }
}
export default App;
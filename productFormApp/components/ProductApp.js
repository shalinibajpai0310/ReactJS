import React from 'react';
import ProductForm from './ProductForm'
import ProductTable from './ProductTable'

class ProductApp extends React.Component {
    constructor(props){
        super(props);
         this.state = {products:  [  {id: 1, name: 'Chair', quantity: 20, price: 800},
   	           {id: 2, name: 'Bag', quantity: 110, price: 2400},
	           {id: 3, name: 'Laptop', quantity: 40000, price: 12}
                   ]
        };
        this.getProducts = this.getProducts.bind(this);
    }
     getProducts(){
         return this.state.products;
     }
	render() {
		return <div><ProductForm data={this.getProducts} /><ProductTable products={this.getProducts}/></div>
	}
}

export default ProductApp
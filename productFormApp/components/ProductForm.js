import React from 'react';
import ProductTable from './ProductTable';

class ProductForm extends React.Component {
    constructor(props){
        super(props)
        this.oldProducts = this.props.data();
        console.log(" old products list ",this.oldProducts);
        this.state={producList : this.oldProducts}
        this.action = this.action.bind(this)
    }

    action(){
        console.log("name ",this.refs.name.value);
        if( this.refs.name.value.length < 3 ){
            alert('Name should be atleast 3 chars long')
        }

        if( isNaN(this.refs.quantity.value) ){
            alert('Quantity should be a number')
        }
        var json = JSON.parse(JSON.stringify({id: 4, name: this.refs.name.value,price:this.refs.price.value,quantity:this.refs.price.value}))
        console.log("JSON ",json);
        this.setState({producList:this.state.producList.push(json)});
        console.log("JSON ",this.state.producList);
    }
	render() {
		return <div className="container">
        <h1>Product List Application</h1><br/>
        <form>
        <div className="form-group">
        <label>Name : </label>
        <input type='text' name='name' ref="name"></input><br/>
        </div>
        <div className="form-group">
        <label>Quantity : </label>
        <input type='text' name='quantity' ref='quantity'></input><br/>
        </div>
        <div className="form-group">
        <label>Price : </label>
        <input type='text' name='price' ref='price'></input><br/>
        </div>
        <br/>
            <input type="button" className="btn btn-primary" name='addProduct' value='Add' onClick={this.action.bind(this)}/>
       </form>
        </div>
	}
}

export default ProductForm
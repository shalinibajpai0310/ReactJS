import React from 'react';

class ProductForm extends React.Component {

    action(){
        console.log("name ",this.refs.name.value);
        if( this.refs.name.value.length < 3 ){
            alert('Name should be atleast 3 chars long')
        }
        console.log(this.refs.quantity.value);
        if( isNaN(this.refs.quantity.value) ){
            alert('Quantity should be a number')
        }

    }
	render() {
		return <div><h1>Product List Application</h1><br/>
        <label>Name : </label>
        <input type='text' name='name' ref="name"></input><br/>
        <label>Quantity : </label>
        <input type='text' name='quantity' ref='quantity'></input><br/>
        <label>Price : </label>
        <input type='text' name='price' ref='price'></input><br/>
        <br/>
       <input type="button" name='addProduct' value='Add' onClick={this.action.bind(this)}/>
        </div>
	}
}

export default ProductForm
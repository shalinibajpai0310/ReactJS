import React from 'react';

class ProductTable extends React.Component {
	constructor(props){
		super(props)
		this.products = this.props.products();
		console.log("products ",this.products);
	}
	render() {
		return <div>
				<table>
				<thead>
					<tr><td>ID</td>
						<td>Name</td>
						<td>Quantity</td>
						<td>Price</td>
						<td>Actions</td>
					</tr>
					</thead>
					<tbody>
					<tr><td>{this.products[0].id}</td>
						<td>{this.products[0].name}</td>
						<td>{this.products[0].quantity}</td>
						<td>{this.products[0].price}</td>
						<td><input type="button" value="edit"/><input type="button" value="delete"/></td>
					</tr>
					<tr><td>{this.products[1].id}</td>
						<td>{this.products[1].name}</td>
						<td>{this.products[1].quantity}</td>
						<td>{this.products[1].price}</td>
						<td><input type="button" value="edit"/><input type="button" value="delete"/></td>
					</tr>
					</tbody>
				</table>
		</div>
	}
}

export default ProductTable
import React from 'react';

class ProductTable extends React.Component {
	constructor(props){
		super(props)
		this.products = this.props.products();
		console.log("products ",this.products);
		this.products.map(function(product,i) {
           console.log(i,"==>",product);
          })
	}
	render() {
		return <div className="container">
				<table className="table table-bordered">
				<thead>
					<tr><td>ID</td>
						<td>Name</td>
						<td>Quantity</td>
						<td>Price</td>
						<td>Actions</td>
					</tr>
				</thead>
				<tbody>
						{
							this.products.map(function(product,index){
								return <tr key={index}>
									<td>{product.id}</td>
									<td>{product.name}</td>
									<td>{product.quantity}</td>
									<td>{product.price}</td>
									<td><input type="button" value="edit"/><input type="button" value="delete"/></td>
								</tr>
							})
						}			
				</tbody>
				</table>
		</div>
	}
}

export default ProductTable
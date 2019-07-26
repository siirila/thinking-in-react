import React from 'react';
import './App.css';

let exampleData = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

function SearchBar() {
  return (
    <div>
      <input type="text" placeholder="Search..." />
      <input type="checkbox" id="in-stock" />
      <label htmlFor="in-stock">Only show products in stock</label>
    </div>
  );
}

function ProductTable(props) {
  function getProductRow(product) {
    return <ProductRow product={product} />
  }

  let productRows = props.products.map(
    getProductRow
  );

  return (
    <table>
      <thead>
        <tr>
            <th>Name</th>
            <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {/* <ProductCategoryRow category={props.products[0].category} /> */}
        {productRows}
      </tbody>
    </table>
  );
}

function ProductCategoryRow(props) {
  return (
    <tr>
      <td><b>{props.category}</b></td>
    </tr>
  );
}

function ProductRow(props) {
  let productName = props.product.name;
  let price = props.product.price;

  return (
      <tr>
          <td>{productName}</td>
          <td>{price}</td>
      </tr>
  );
}

/*
FilterableProductTable
    SearchBar
    ProductTable
        ProductCategoryRow
        ProductRow

*/

function FilterableProductTable() {
  return (
    <div className="App">
      <SearchBar />
      <ProductTable products={exampleData} />
    </div>
  );
}

export default FilterableProductTable;

import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
export default class CategoryList extends Component {
  constructor(props)
  {
    super(props)
    this.state={categories:[
    {categoryId:1,categoryName:"Mustafa"},
    {categoryId:2,categoryName:"Musti"}]}
  }
  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
          {this.state.categories.map(category=>
            <ListGroupItem key={"category.categoryId"}>{category.categoryName
            }</ListGroupItem>
            )}
        </ListGroup>
      </div>
    );
  }
}

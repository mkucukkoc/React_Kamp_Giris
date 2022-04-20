import React from "react";
import { Col, Container, Row } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi"
import ProductList from "./ProductList";

let productInfo={title:"ProductList"}
let categoryInfo={title:"CategoryList"}
function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Navi></Navi>
        </Row>
        <Row>
          <Col xs="3">
          <CategoryList info={categoryInfo} />
          </Col>
          <Col xs="9">
          <ProductList info={productInfo}/>
          </Col>
          
      </Row>
      </Container>
    </div>
  );
}

export default App;

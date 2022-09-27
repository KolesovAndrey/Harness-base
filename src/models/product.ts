class Product {
  id: number;
  productNumber: number;
  productName: string;
  customer: string;

  constructor(productNumber: number, productName: string, customer: string) {
    this.id = Math.random();
    this.productNumber = productNumber;
    this.productName = productName;
    this.customer = customer;
  }
}

export default Product;

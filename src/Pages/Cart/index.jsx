import { useState } from "react";
import PageWrapper from "../../components/PageWrapper";
import Button from "../../components/button";
import ProductTable from "../../components/ProductsTable";
import Image from "../../assets/picture1.jpg";

const products = [
  {
    image: Image,
    product: "Laptop",
    price: 1200,
    quantity: 1,
    total: 1200,
  },
  {
    image: Image,
    product: "Headphones",
    price: 150,
    quantity: 2,
    total: 300,
  },
  {
    image: Image,
    product: "Monitor",
    price: 450,
    quantity: 1,
    total: 450,
  },
];

const Cart = () => {
  const [isEmpty, setIsEmpty] = useState(false);
  return (
    <>
      {isEmpty ? (
        <div className="flex flex-col justify-center items-center h-[calc(100vh-15rem)]">
          <h2 className="mb-[3.5rem] text-xl font-normal">
            Your cart is currently empty. Fill it with some goodies!
          </h2>
          <Button variant="outline" small>
            Return to shop
          </Button>
        </div>
      ) : (
        <PageWrapper title="Your Cart">
          <div className="container mb-40">
            <ProductTable data={products} />
          </div>
        </PageWrapper>
      )}
    </>
  );
};

export default Cart;

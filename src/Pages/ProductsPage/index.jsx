import PageWrapper from "../../components/PageWrapper";
import CardList from "../../components/CardList";
import picture1 from "../../assets/picture1.jpg";
import picture2 from "../../assets/picture2.jpg";
import picture3 from "../../assets/picture3.jpg";
import picture4 from "../../assets/picture4.jpg";
import CustomSelect from "../../components/Select";
import { useState } from "react";
import { AvailabilityFilter, PriceFilter } from "../../components/Filter";

const sampleLists = [
  {
    imgSrc: picture1,
    title: "Product 1",
    price: "$10.99",
    sale: true,
    prev: "$12.49",
    current: "$5",
    multipleOptions: true,
  },
  {
    imgSrc: picture2,
    title: "Product 2",
    price: "$12.49",
  },
  {
    imgSrc: picture3,
    title: "Product 3",
    price: "$8.99",
    soldOut: true,
  },
  {
    imgSrc: picture4,
    title: "Product 4",
    price: "$15.99",
  },
  {
    imgSrc: picture1,
    title: "Product 1",
    price: "$10.99",
    sale: true,
    prev: "$12.49",
    current: "$5",
    multipleOptions: true,
  },
  {
    imgSrc: picture2,
    title: "Product 2",
    price: "$12.49",
  },
  {
    imgSrc: picture3,
    title: "Product 3",
    price: "$8.99",
    soldOut: true,
  },
  {
    imgSrc: picture4,
    title: "Product 4",
    price: "$15.99",
  },
  {
    imgSrc: picture1,
    title: "Product 1",
    price: "$10.99",
    sale: true,
    prev: "$12.49",
    current: "$5",
    multipleOptions: true,
  },
  {
    imgSrc: picture2,
    title: "Product 2",
    price: "$12.49",
  },
  {
    imgSrc: picture3,
    title: "Product 3",
    price: "$8.99",
    soldOut: true,
  },
  {
    imgSrc: picture4,
    title: "Product 4",
    price: "$15.99",
  },
];

const sortingOptions = [
  { value: "featured", label: "Featured" },
  { value: "best-selling", label: "Best selling" },
  { value: "alpha-asc", label: "Alphabetically, A-Z" },
  { value: "alpha-desc", label: "Alphabetically, Z-A" },
  { value: "price-asc", label: "Price, low to high" },
  { value: "price-desc", label: "Price, high to low" },
  { value: "date-old", label: "Date, old to new" },
  { value: "date-new", label: "Date, new to old" },
];

const ProductsPage = () => {
  const [sortBy, setSortBy] = useState("USD");

  console.log(sortBy);

  const handleChange = (option) => {
    setSortBy(option.value);
  };
  return (
    <PageWrapper title="Products">
      <div>
        <div className="flex justify-between items-center container mt-3 mb-5">
          <div className="flex items-center gap-4">
            <span className="text-sm">Filter:</span>
            <AvailabilityFilter />
            <PriceFilter />
          </div>
          <div className="flex items-center gap-4">
            <CustomSelect
              options={sortingOptions}
              // defaultOption={currencies[0]}
              onChange={handleChange}
              placeholder="SORT BY"
              className="w-[12.5rem]"
            />
            <span className="text-sm text-secondary">400 products</span>
          </div>
        </div>
        <CardList lists={sampleLists} />
      </div>
    </PageWrapper>
  );
};

export default ProductsPage;

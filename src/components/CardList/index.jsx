import React from "react";
import PropTypes from "prop-types";
import Button from "../button";
import Card from "../card";

const CardList = ({ lists, title, showMore }) => {
  return (
    <section className="container">
      <p className="text-2xl pb-8 tracking-widest uppercase">{title}</p>
      <div className="w-full flex gap-4">
        {lists.map(
          (
            {
              imgSrc,
              title,
              price,
              sale,
              prev,
              current,
              multipleOptions,
              soldOut,
            },
            index
          ) => (
            <React.Fragment key={index}>
              <Card
                imgSrc={imgSrc}
                title={title}
                price={price}
                sale={sale}
                prev={prev}
                current={current}
                multipleOptions={multipleOptions}
                soldOut={soldOut}
              />
            </React.Fragment>
          )
        )}
      </div>
      <div className="flex w-full justify-center pt-10">
        {showMore && (
          <Button large className="min-w-[14rem]">
            view all
          </Button>
        )}
      </div>
    </section>
  );
};

CardList.propTypes = {
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      imgSrc: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
  showMore: PropTypes.bool,
};

export default CardList;

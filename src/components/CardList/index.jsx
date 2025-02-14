import React from "react";
import PropTypes from "prop-types";
import Button from "../button";
import Card from "../card";

const CardItems = ({ lists, hideButtons }) => {
  return (
    <>
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
              hideButtons={hideButtons}
            />
          </React.Fragment>
        )
      )}
    </>
  );
};

CardItems.propTypes = {
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      imgSrc: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      sale: PropTypes.bool,
      prev: PropTypes.number,
      current: PropTypes.number,
      multipleOptions: PropTypes.bool,
      soldOut: PropTypes.bool,
    })
  ).isRequired,
  hideButtons: PropTypes.bool,
};

const CardList = ({ lists, title, showMore, type }) => {
  return (
    <section className="container">
      {title && (
        <p className="text-2xl pb-8 tracking-widest uppercase">{title}</p>
      )}
      {type === "collections" ? (
        <div className="w-full flex gap-2">
          <CardItems lists={lists} hideButtons />
        </div>
      ) : (
        <div className="w-full flex flex-wrap gap-x-4 gap-y-10">
          <CardItems lists={lists} />
        </div>
      )}

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
      sale: PropTypes.bool,
      prev: PropTypes.number,
      current: PropTypes.number,
      multipleOptions: PropTypes.bool,
      soldOut: PropTypes.bool,
    })
  ).isRequired,
  title: PropTypes.string,
  showMore: PropTypes.bool,
  type: PropTypes.oneOf(["collections", "default"]),
};

CardList.defaultProps = {
  title: "",
  showMore: false,
  hideButtons: false,
  type: "default",
};

export default CardList;

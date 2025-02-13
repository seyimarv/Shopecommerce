import PageWrapper from "../../components/PageWrapper";
import picture1 from "../../assets/picture1.jpg";
import picture2 from "../../assets/picture2.jpg";
import picture3 from "../../assets/picture3.jpg";
import picture4 from "../../assets/picture4.jpg";
import Card from "../../components/card";

const sampleLists = [
  {
    imgSrc: picture1,
    title: "Product 1",
  },
  {
    imgSrc: picture2,
    title: "Product 2",
  },
  {
    imgSrc: picture3,
    title: "Product 3",
  },
  {
    imgSrc: picture4,
    title: "Product 4",
  },
  {
    imgSrc: picture4,
    title: "Product 4",
  },
  {
    imgSrc: picture4,
    title: "Product 4",
  },
  {
    imgSrc: picture4,
    title: "Product 4",
  },
  {
    imgSrc: picture4,
    title: "Product 4",
  },
  {
    imgSrc: picture4,
    title: "Product 4",
  },
];

const Collections = () => {
  return (
    <PageWrapper title="collections">
      <div className="flex flex-wrap w-full container gap-x-2 gap-y-20 pb-30">
        {sampleLists.map(
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
            <div key={index} className="w-[calc((100%-16px)/3)]">
              <Card
                imgSrc={imgSrc}
                title={title}
                price={price}
                sale={sale}
                prev={prev}
                current={current}
                multipleOptions={multipleOptions}
                soldOut={soldOut}
                hideButtons
                type="collections"
                className="h-120"
              />
            </div>
          )
        )}
      </div>
    </PageWrapper>
  );
};

export default Collections;

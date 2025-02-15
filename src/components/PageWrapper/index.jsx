import PropTypes from "prop-types";

const PageWrapper = ({ title, children }) => {
  return (
    <div className="mt-15">
      <h2 className="container text-4xl pb-8 tracking-widest uppercase">{title}</h2>
      <section>{children}</section>
    </div>
  );
};

PageWrapper.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default PageWrapper;

import Filter from ".";

const AvailabilityFilter = () => {
  return (
    <Filter label="Availability">
      <p className="text-sm font-medium mb-2">0 selected</p>
      <div className="flex justify-between items-center mb-2">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="form-checkbox" /> In stock (445)
        </label>
      </div>
      <div className="flex justify-between items-center">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="form-checkbox" /> Out of stock (40)
        </label>
      </div>
    </Filter>
  );
};

export default AvailabilityFilter;

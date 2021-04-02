import React from 'react';

const AddExpenseForm = () => {
  return (
    <form>
      <div className="form-group">
        <label>Name</label>
        <input type="text" name="" id="" className="form-control" />
      </div>
      <div className="form-group">
        <label>Cost</label>
        <input type="number" name="" id="" className="form-control" />
      </div>
      <button className="btn btn-primary">Save</button>
    </form>
  );
};

export default AddExpenseForm;

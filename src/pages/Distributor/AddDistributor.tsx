import React from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

const AddDistributor: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName="Add Distributor" />
      <div className="col-sm-12">
        <div
          className="btn-group float-sm-right add-button"
          style={{ justifyContent: 'end' }}
        >
          <button className="btn btn-success btn-sm">Distributor List</button>
        </div>
      </div>
      sas
    </>
  );
};

export default AddDistributor;

import React, { Fragment } from "react";
import SingleEleForm from "../SingleEleForm/SingleEleForm";

const ProductForms = ({ handleDelete, forms, setForms ,eleData ,setEleData }) => {
  return (
    <div>
      {forms?.map((form, index) => (
        <Fragment key={index}>
          <SingleEleForm
            handleDelete={handleDelete}
            form={form}
            index={index}
            forms={forms}
            setForms={setForms}
            eleData={eleData}
            setEleData={setEleData}
          />
        </Fragment>
      ))}
    </div>
  );
};

export default ProductForms;

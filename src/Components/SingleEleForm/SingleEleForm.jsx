import React, { useEffect, useState } from "react";
import Type from "../../../Data.json";
import "./SingleEleForm.css"
const SingleEleForm = ({
  handleDelete,
  forms,
  setForms,
  form,
  index,
  eleData,
  setEleData,
}) => {
  const [eleForm, setELeForm] = useState(form);
  const handleInputsData = (index, name, value) => {
    let tempValue = value;
    if (name == "Product_Name") {
      setELeForm((eleForm) => ({ ...eleForm, [name]: tempValue }));
    } else {
      setELeForm((eleForm) => ({ ...eleForm, [name]: tempValue }));
    }
  };
  const [isProdSelect, setIsProdSelect] = useState(false);
  const [searchProdResult, setSearchProdResult] = useState([]);
  let prodType = Type[2].ProductName;
  useEffect(() => {
    let tempEleForms = forms;
    tempEleForms[index] = eleForm;

    setForms([...tempEleForms]);
    setEleData((eleData) => ({ ...eleData, product: [...tempEleForms] }));
  }, [eleForm]);
  const handleDeleteFrom = () => {
    handleDelete(index);
  };
  const handleProdName = (selectProdcut) => {
    setELeForm((eleForm) => ({ ...eleForm, Product_Name: selectProdcut }));
    setIsProdSelect(true);
  };
  const handleSearchProdName = () => {
    let tempProdsSearch =[]
    if (eleForm.Product_Name !== "" && !isProdSelect) {
      tempProdsSearch = prodType?.filter((prods) =>
        prods.productName.toLowerCase().includes(eleForm.Product_Name.toLowerCase())
        );
        setSearchProdResult(tempProdsSearch);
    } else {
      setSearchProdResult(tempProdsSearch);
      setIsProdSelect(false);
    }
  };
  useEffect(() => {
    handleSearchProdName();
  }, [eleForm.Product_Name]);
  return (
    <div className="ProdForm">
      <p>
        <input
          type="text"
          value={form.Product_Name}
          placeholder="Product Name"
          onChange={(e) =>
            handleInputsData(index, "Product_Name", e.target.value)
          }
        />
      </p>
      {searchProdResult.length !=0 && !isProdSelect ? (
        <div className="SearchProdsResult">
          <ul>
            {searchProdResult.map((ProdName ,index) => (
              <li key={index} onClick={()=>handleProdName(ProdName.productName)}>{ProdName.productName}</li>
            ))}
          </ul>
        </div>
      ) : null}
      <p>
        <input
          type="number"
          value={form.Quantity}
          placeholder="Product Quantity"
          onChange={(e) =>
            handleInputsData(index, "Product_Quantity", e.target.value)
          }
        />
      </p>
      <button type="button" onClick={handleDeleteFrom}>
        Delete
      </button>
    </div>
  );
};

export default SingleEleForm;

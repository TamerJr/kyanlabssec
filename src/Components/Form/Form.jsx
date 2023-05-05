import React, { useEffect, useState } from "react";
import ProductForms from "../ProductFroms/ProductForms";
import Types from "../../../Data.json";
import "./Forms.css";
const Form = ({
  handleDelete,
  handleAddForm,
  setForms,
  forms,
  setDataList,
  dataList,
}) => {
  const serviceType = Types[0].servicesType;
  const serviceName = Types[1].ServiceName;
  const [isSelect, setIsSelect] = useState(false);
  const [eleData, setEleData] = useState({
    name: "",
    ServiceAmount: "",
    typeOFService: "",
    product: [...forms],
  });
  const [searchResult, setSearchResult] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDataList([...dataList, eleData]);
  };
  useEffect(() => {
    setEleData((eleData) => ({ ...eleData, product: [...forms] }));
  }, [forms.length]);
  const handleSearch = () => {
    let tempSearchResult = [];

    if (eleData.name != "" && !isSelect) {
      tempSearchResult = serviceName.filter((name) =>
        name.serviceName.toLowerCase().includes(eleData.name.toLowerCase())
      );
      setSearchResult([...tempSearchResult]);
    } else {
      setIsSelect(false);
      setSearchResult(tempSearchResult);
    }
  };
  const handleSelectedElement = (selectedName) => {
    setEleData((eleData) => ({ ...eleData, name: selectedName }));
    setIsSelect(true);
  };
  useEffect(() => {
    handleSearch();
  }, [eleData.name]);
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <select
            onChange={(e) =>
              setEleData((eleData) => ({
                ...eleData,
                typeOFService: e.target.value,
              }))
            }
          >
            <option>-----</option>
            {serviceType.map((service) => (
              <option key={service.type} value={service.type}>
                {service.type}
              </option>
            ))}
          </select>
          <input
            type="text"
            value={eleData.name}
            placeholder="Enter Service Name"
            onChange={(e) =>
              setEleData((eleData) => ({ ...eleData, name: e.target.value }))
            }
          />
          {searchResult.length > 0 && !isSelect ? (
            <div className="SearchResult">
              <ul>
                {searchResult?.map((searchName, index) => (
                  <li
                    key={index}
                    onClick={() =>
                      handleSelectedElement(searchName.serviceName)
                    }
                  >
                    {searchName.serviceName}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          <input
            type="number"
            value={eleData.ServiceAmount}
            placeholder="Enter Service Amount"
            onChange={(e) =>
              setEleData((eleData) => ({
                ...eleData,
                ServiceAmount: e.target.value,
              }))
            }
          />
        </div>
        <div className="FormList_Container">
          <ProductForms
            handleDelete={handleDelete}
            setForms={setForms}
            forms={forms}
            eleData={eleData}
            setEleData={setEleData}
          />
        </div>
        <button type="submit"> Done</button>
        <button type="button" onClick={handleAddForm}>
          {" "}
          AddForm
        </button>
      </div>
    </form>
  );
};

export default Form;

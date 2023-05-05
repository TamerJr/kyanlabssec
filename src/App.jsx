import { useEffect, useState } from "react";

import "./App.css";
import Form from "./Components/Form/Form";

function App() {
  const [forms, setForms] = useState([]);
  // let data = JSON.parse(localStorage.getItem("Data"));
  const [dataList, setDataList] = useState(JSON.parse(localStorage.getItem("Data")) || []);

  const handleAddForm = () => {
    setForms([...forms, { Product_Name: "", Product_Quantity: null }]);
  };
  const handleDelete = (formIndex) => {
    let tempFormsArr = forms.filter((_, index) => index !== formIndex);
    setForms(tempFormsArr);
  };
   localStorage.setItem("Data", JSON.stringify([...dataList]));
  useEffect(() => {
    setForms[forms];
  }, [forms.length]);
  return (
    <>
      <h1>
        <Form
          handleDelete={handleDelete}
          handleAddForm={handleAddForm}
          setForms={setForms}
          forms={forms}
          dataList={dataList}
          setDataList={setDataList}
        />
      </h1>
    </>
  );
}

export default App;

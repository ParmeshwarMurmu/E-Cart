import axios from 'axios';
import React, { useState } from 'react';

function FileUploadForm() {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const fileInput = React.createRef();

  const handleName = (e) => {
      setName(e.target.value);
  };
  const handlePrice = (e) => {
      setPrice(e.target.value);
  };

     const onSubmit = async (e) => {
      e.preventDefault();

      // const product = {
      //     name: name,
      //     price: price,
      //     productImage: [fileInput.current.files[0].name, fileInput.current.files[1].name, fileInput.current.files[2].name, ],
      // };

      // const data = new FormData()

      const formData = new FormData();
      formData.append('name', name);
      formData.append('price', price);
      formData.append('photos', fileInput.current.files[0]);
      formData.append('photos', fileInput.current.files[1]);
      formData.append('photos', fileInput.current.files[2]);

      

      


      axios
          .post("http://localhost:8080/adminWomen/uploads", formData)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));

      alert(`Selected file - ${fileInput.current.files[0].name} ${fileInput.current.files[1].name} ${fileInput.current.files[2].name}`);
      // console.log(fileInput.current.files[0]);
  };

  return (
      <div>
          <h2>Add Product</h2>

          <form onSubmit={onSubmit}>
              <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleName}
              />
              <br />
              <input
                  type="text"
                  name="price"
                  value={price}
                  onChange={handlePrice}
              />
              <br />
              <input type="file" name='photos' ref={fileInput} multiple />
              <br />
              <input type="submit" value="Submit" />
          </form>

          <hr />
      </div>
  );
}

export default FileUploadForm;

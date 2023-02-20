import React, { useState } from "react";


const AddItemForm = (props) => {

  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={openModal}>Add Product</button>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div
            className="absolute w-full h-full bg-gray-900 opacity-50"
            onClick={closeModal}
          ></div>
          <div className="bg-white rounded-lg ">
            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md backdrop-blur">
              <div>
                <h1 className="text-black text-left text-2xl">New Product</h1>
              </div>
              <form>
                <div
                  className="border-dashed border-2 border-gray-400 p-6 my-4 w-76 text-center"
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                >
                  <p>Drag and drop or browse for an image file.</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                  {file && (
                    <div>
                      <img src={URL.createObjectURL(file)} alt="upload icon" />
                    </div>
                  )}
                </div>
                <div className="form-group mb-6 flex w-full">
                  <label
                    for="exampleInputEmail2"
                    className="form-label inline-block mb-2 text-gray-700"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInputEmail2"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group mb-6 flex w-full">
                  <label
                    for="exampleInputEmail2"
                    className="form-label inline-block mb-2 text-gray-700"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInputEmail2"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group mb-6 flex w-full">
                  <label
                    for="exampleInputEmail2"
                    className="form-label inline-block mb-2 text-gray-700"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInputEmail2"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group mb-6 flex w-full">
                  <label
                    for="exampleInputEmail2"
                    className="form-label inline-block mb-2 text-gray-700"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInputEmail2"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group mb-6 flex w-full">
                  <label
                    for="exampleInputEmail2"
                    className="form-label inline-block mb-2 text-gray-700"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInputEmail2"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group mb-6 flex w-full">
                  <label
                    for="exampleInputEmail2"
                    className="form-label inline-block mb-2 text-gray-700"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInputEmail2"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group mb-6 flex w-full">
                  <label
                    for="exampleInputEmail2"
                    className="form-label inline-block mb-2 text-gray-700"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInputEmail2"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div className="flex gap-2 justify-end">
                  <button
                    type="button"
                    className="inline-block px-6 py-2 border-2 border-gray-200 text-gray-200 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="
                    
                    px-6
                    py-2.5
                    bg-blue-600
                    text-white
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    rounded
                    shadow-md
                    hover:bg-blue-700 hover:shadow-lg
                    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-blue-800 active:shadow-lg
                    transition
                    duration-150
                    ease-in-out"
                  >
                    Add Product
                  </button>
                </div>
              </form>
            </div>
            <button onClick={closeModal}>Close Modal</button>
          </div>
        </div>
      )}
    </>
  );
};

export default AddItemForm;

import React, { useState } from "react";

const AdminAddItems = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    const selectedUrl = URL.createObjectURL(file);
    setImagePreview(selectedUrl);
  };

  const handleFromSubmit = event => { 
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", selectedFile);
    const data = Object.fromEntries(formData);
    console.log(data);
  }


  return (
    <div className="bg-white border-4 rounded-lg shadow relative m-10">
      <div className="flex items-start justify-between p-5 border-b rounded-t">
        <h3 className="text-xl font-semibold">Edit product</h3>
        
      </div>

      <div className="p-6 space-y-6">
        <form onSubmit={e => handleFromSubmit(e)}>
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                name="product-name"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Product Name
              </label>
              <input
                type="text"
                name="product-name"
                id="product-name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Chicken Burger"
                required=""
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                name="category"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Category
              </label>
              <input
                type="text"
                name="category"
                id="category"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Food"
                required=""
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                name="brand"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Quantity
              </label>
              <input
                type="number"
                name="Quantity"
                id="Quantity"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="01"
                required=""
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                name="price"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="$230"
                required=""
              />
            </div>
            <div className="col-span-full">
              <label
                name="product-details"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Product Details
              </label>
              <textarea
                id="product-details"
                rows="6"
                className="bg-gray-50 border resize-none outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                placeholder="Details"
              ></textarea>
            </div>
            <div className="col-span-full">
              <label
                name="product-image"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Product Image
              </label>
              <div className="flex items-center space-x-2">
                <label
                  htmlFor="product-image"
                  className="cursor-pointer text-white bg-primary hover:bg-green-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-full text-sm px-5 py-2.5 text-center"
                >
                  Upload Image
                </label>
                <span className="text-gray-500">{selectedFile ? selectedFile.name : "No file selected"}</span>
                <input
                  type="file"
                  id="product-image"
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>
            </div>

            {/* Image preview box */}
            {imagePreview && (
              <div className="col-span-full">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Image Preview
                </label>
                <div className="max-w-xs">
                  <img src={imagePreview} alt="Product Preview" className="w-full h-auto" />
                </div>
              </div>
            )}
          </div>
        </form>
      </div>

      <div className="p-6 border-t border-gray-200 rounded-b">
        <button
          className="text-white capitalize bg-primary hover:bg-green-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-full text-sm px-5 py-2.5 text-center"
          type="submit"
        >
          Add this product
        </button>
      </div>
    </div>
  );
};

export default AdminAddItems;

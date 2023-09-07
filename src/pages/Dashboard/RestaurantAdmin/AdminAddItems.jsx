import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useState } from "react";
import { v4 } from "uuid";
import { storage } from "../../../config/firebase/firebase.config";
import 'react-toastify/dist/ReactToastify.css';
import { toast as loaderPrompt, toast } from 'react-toastify';
import useRestaurant from "../../../hooks/useRestaurant";
const AdminAddItems = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [imageURL, setImageURL] = useState(null);
  const restaurant = useRestaurant();
  console.log(restaurant);
  const uploadMenuPic = (file) => {
    setIsLoading(true);
    const imgId = v4().slice(0, 10);
    const imagesRef = ref(storage, `menu-image/${imgId + selectedFile?.name}`);

    const uploadingPromise = uploadBytes(imagesRef, file);

    loaderPrompt.promise(uploadingPromise, {
      pending: 'Uploading...',
      success: 'Image Uploaded Successfully',
      error: 'Something went wrong , please try again later'
    }).then(() => {
      getDownloadURL(ref(storage, `menu-image/${imgId + selectedFile?.name}`))
        .then((url) => {
          console.log(url)
          if (url) {
            setImageURL(url);
            setIsLoading(false);
          }
          else {
            setIsLoading(false);
          }
        }).catch((err) => {
          setIsLoading(false);
        }).finally(() => {
          setIsLoading(false);
        })
    });
  };






  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size < 2 * 1024 * 1024) {
      setSelectedFile(file);
      const selectedUrl = URL.createObjectURL(file);
      setImagePreview(selectedUrl);
    } else {
      setSelectedFile(null);
      toast.error("Please select a file smaller than 2MB");
    }
  };

  const handleFromSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("product-name", event.target.elements["product-name"].value);
    formData.append("category", event.target.elements["category"].value);
    formData.append("product-details", event.target.elements["product-details"].value);
    const data = Object.fromEntries(formData);
    data.image = imageURL;
    data.submitted = new Date();
    data.status = "pending";
    data.restaurant = restaurant._id;
    data.price = parseInt(event.target.price.value);
    data.quantity = parseInt(event.target.Quantity.value);

    console.log(data);
  };
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
                required
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
                name="product-details"
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

                {
                  imageURL == null && <button onClick={() => uploadMenuPic(selectedFile)} type="button" className="px-3 py-1 text-sm bg-orange-400 font-bold text-white rounded-b-lg">Upload ? </button>
                }
                {
                  imageURL && <button
                    type="button"
                    className="px-3 py-1 text-sm bg-green-400 font-bold text-white rounded-b-lg">Uploaded</button>
                }

              </div>
            )}
          </div>
          <div className="p-6 border-b border-gray-200 rounded-b">
            <button
              className="text-white capitalize bg-primary hover:bg-green-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-full text-sm px-5 py-2.5 text-center"
              type="submit"
            >
              Add this product
            </button>
          </div>
        </form>
      </div>

    </div>
  );
};

export default AdminAddItems;

import { useState } from "react";

const DishActions = () => {
  const [formData, setFormData] = useState({
    name: "",
    restaurant: "",
    image: "",
    description: "",
    price: 0,
    category: [""],
    ingredients: [""],
  });

  const [modifiedData, setModifiedData] = useState({
    id: "",
    name: "",
    restaurant: "",
    image: "",
    description: "",
    price: 0,
    category: "",
    ingredients: "",
  });

  const [dishId, setDishId] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCategoryChange = (e, index) => {
    const { value } = e.target;
    const updatedCategories = [...formData.category];
    updatedCategories[index] = value;
    setFormData((prevState) => ({
      ...prevState,
      category: updatedCategories,
    }));
  };

  const handleIdChange = (e) => {
    setDishId(e.target.value);
  };

  const handleIngredientChange = (e, index) => {
    const { value } = e.target;
    const updatedIngredients = [...formData.ingredients];
    updatedIngredients[index] = value;
    setFormData((prevState) => ({
      ...prevState,
      ingredients: updatedIngredients,
    }));
  };

  const addField = (type) => {
    const updatedData = { ...formData };
    if (type === "category") {
      updatedData.category.push("");
    } else if (type === "ingredients") {
      updatedData.ingredients.push("");
    }
    setFormData(updatedData);
  };

  const handleModifiedChange = (e) => {
    setModifiedData({ ...modifiedData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3001/admin/addDish", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const errMsg = await res.text();
        throw new Error(errMsg);
      }
      window.alert("Dish Added Successfully");
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleModify = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `http://localhost:3001/admin/updateDish/${modifiedData.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(modifiedData),
        }
      );
      if (!res.ok) {
        const errMsg = await res.text();
        throw new Error(errMsg);
      }
      const responseData = await res.json();
      window.alert("Dish Updated Successfully");
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleDelete = async () => {
    try {
      const res = await fetch(
        `http://localhost:3001/admin/removeDish/${dishId}`,
        {
          method: "DELETE",
        }
      );
      if (!res.ok) {
        const errMsg = await response.text();
        throw new Error(errMsg);
      }
      window.alert("Dish removed Successfully");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="mx-10 my-7 font-serif flex justify-between">
      <div>
        <div className="font-bold	text-2xl flex justify-center border-2 border-yellow-200 rounded-3xl bg-orange-800 text-[#FCFCFC] py-2">
          Add Dish
        </div>
        <form onSubmit={handleSubmit} className="mx-5 my-5">
          <div className="m-3 font-bold">
            <label>Dish Name:</label>
            <input
              type="text"
              name="name"
              className="ml-2 rounded-md border-2 border-orange-700"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="m-3 font-bold">
            <label>restaurant id:</label>
            <input
              type="text"
              name="restaurant"
              className="ml-2 rounded-md border-2 border-orange-700"
              value={formData.restaurant}
              onChange={handleChange}
              required
            />
          </div>
          <div className="m-3 font-bold">
            <label>Description:</label>
            <input
              type="text"
              name="description"
              className="ml-2 rounded-md border-2 border-orange-700"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="m-3 font-bold">
            <label>Price:</label>
            <input
              type="number"
              name="price"
              className="ml-2 rounded-md border-2 border-orange-700"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="m-3 font-bold">
            <label>Categories:</label>
            {formData.category.map((categori, index) => (
              <div key={index}>
                <input
                  type="text"
                  className="ml-2 mt-2 rounded-md border-2 border-orange-700"
                  value={categori}
                  onChange={(e) => handleCategoryChange(e, index)}
                  required
                />
              </div>
            ))}
            <button
              type="button"
              onClick={() => addField("category")}
              className="ml-2 mt-2 bg-orange-600 hover:bg-yellow-600 text-[#FCFCFC] font-bold py-1 px-2 rounded"
            >
              Add Category
            </button>
          </div>
          <div className="m-3 font-bold">
            <label>Ingredients:</label>
            {formData.ingredients.map((ingredient, index) => (
              <div key={index}>
                <input
                  type="text"
                  className="ml-2 mt-2 rounded-md border-2 border-orange-700"
                  value={ingredient}
                  onChange={(e) => handleIngredientChange(e, index)}
                  required
                />
              </div>
            ))}
            <button
              type="button"
              onClick={() => addField("ingredients")}
              className="ml-2 mt-2 bg-orange-600 hover:bg-yellow-600 text-[#FCFCFC] font-bold py-1 px-2 rounded"
            >
              Add Ingredient
            </button>
          </div>
          <button
            type="submit"
            className=" border-2 border-yellow-500 font-bold text-[#FCFCFC] ml-3 py-2 px-20 rounded-2xl bg-orange-600 hover:bg-yellow-600"
          >
            Add Dish
          </button>
        </form>
      </div>
      <div>
        <div className="font-bold	text-2xl flex justify-center border-2 border-yellow-200 rounded-3xl bg-orange-800 text-[#FCFCFC] py-2">
          Modify Restaurant
        </div>
        <form onSubmit={handleModify} className="mx-5 my-5">
          <div className="m-3 font-bold ">
            <label>Dish id:</label>
            <input
              type="text"
              name="id"
              className="ml-2 rounded-md border-2 border-orange-700"
              value={modifiedData.id}
              onChange={handleModifiedChange}
              required
            />
          </div>
          <div className="m-3 font-bold ">
            <label>Dish Name:</label>
            <input
              type="text"
              name="name"
              className="ml-2 rounded-md border-2 border-orange-700 border-dashed"
              value={modifiedData.name}
              onChange={handleModifiedChange}
            />
          </div>
          <div className="m-3 font-bold ">
            <label>Restaurant id:</label>
            <input
              type="text"
              name="restaurant"
              className="ml-2 rounded-md border-2 border-orange-700 border-dashed"
              value={modifiedData.restaurant}
              onChange={handleModifiedChange}
            />
          </div>
          <div className="m-3 font-bold ">
            <label>description:</label>
            <input
              type="text"
              name="description"
              className="ml-2 rounded-md border-2 border-orange-700 border-dashed"
              value={modifiedData.description}
              onChange={handleModifiedChange}
            />
          </div>
          <div className="m-3 font-bold ">
            <label>Price:</label>
            <input
              type="number"
              name="price"
              className="ml-2 rounded-md border-2 border-orange-700 border-dashed"
              value={modifiedData.price}
              onChange={handleModifiedChange}
            />
          </div>
          <div className="m-3 font-bold ">
            <label>Category:</label>
            <input
              type="text"
              name="category"
              className="ml-2 rounded-md border-2 border-orange-700 border-dashed"
              value={modifiedData.category}
              onChange={handleModifiedChange}
            />
          </div>
          <div className="m-3 font-bold ">
            <label>Ingredients:</label>
            <input
              type="text"
              name="ingredients"
              className="ml-2 rounded-md border-2 border-orange-700 border-dashed"
              value={modifiedData.ingredients}
              onChange={handleModifiedChange}
            />
          </div>
          <button
            type="submit"
            className="  border-2 border-yellow-500 font-bold text-[#FCFCFC] ml-3 py-2 px-20 rounded-2xl bg-orange-600 hover:bg-yellow-600"
          >
            Update Restaurant
          </button>
        </form>
      </div>
      <div>
        <div className="font-bold	text-2xl flex justify-center border-2 border-yellow-200 rounded-3xl bg-orange-800 text-[#FCFCFC] py-2">
          Remove Dish
        </div>
        <div className="m-3 font-bold ">
          <label className="ml-5">Dish id:</label>
          <input
            type="text"
            value={dishId}
            onChange={handleIdChange}
            className="ml-2  rounded-md border-2 border-orange-700"
          />
        </div>
        <button
          onClick={handleDelete}
          className="  border-2 border-yellow-500 font-bold text-[#FCFCFC] ml-3 py-2 px-20 rounded-2xl bg-orange-600 hover:bg-yellow-600"
        >
          Delete Restaurant
        </button>
      </div>
    </div>
  );
};

export default DishActions;

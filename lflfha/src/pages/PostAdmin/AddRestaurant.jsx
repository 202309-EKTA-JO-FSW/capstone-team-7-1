import { useState } from "react";
import { Link } from "next/link";
import { useRouter } from "next/router";

const RestaurantActions = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    restaurantAddress: "",
    openingHours: "",
    description: "",
    phone: "",
    cuisineType: "",
    logo: "",
  });

  const [modifiedData, setModifiedData] = useState({
    id: "",
    name: "",
    restaurantAddress: "",
    openingHours: "",
    description: "",
    phone: "",
    cuisineType: "",
    logo: "",
  });

    const [restaurantId, setRestaurantId] = useState("");

  const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

  const handleModifiedChange = (e) => {
    setModifiedData({ ...modifiedData, [e.target.name]: e.target.value });
  };

    const handleIdChange = (e) => {
      setRestaurantId(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await fetch('http://localhost:3001/admin/addRestaurant', {
              method: 'POST',
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData)
            });
            if (!res.ok) {
              const errMsg = await res.text();
              throw new Error(errMsg);
            }
            const responseData = await res.json();
            window.alert('Restaurant Added Successfully');
        }
        catch(err){
            console.log(err.message);
        }
    }


  const handleModify = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `http://localhost:3001/admin/updateRestaurant/${modifiedData.id}`,
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
      window.alert("Restaurant Updated Successfully");
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleDelete = async () => {
    try {
      const res = await fetch(
        `http://localhost:3001/admin/removeRestaurant/${restaurantId}`,
        {
          method: "DELETE",
        }
      );
      if (!res.ok) {
        const errMsg = await response.text();
        throw new Error(errMsg);
      }
      window.alert("Restaurant removed Successfully");
    } catch (err) {
      console.log(err.message);
    }
  };

    return(
        <div className="mx-10 my-7 font-serif flex justify-between">
          <div>
            <div className="font-bold	text-2xl flex justify-center border-2 border-yellow-200 rounded-3xl bg-orange-800 text-white py-2">Add Restaurant</div>
            <form onSubmit={handleSubmit} className="mx-5 my-5">
              <div className="m-3 font-bold ">
                <label>Restaurant Name:</label>
                <input type="text" name="name" className="ml-2 rounded-md border-2 border-orange-700" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="m-3 font-bold ">
                <label>Restaurant Address:</label>
                <input type="text" name="restaurantAddress" className="ml-2 rounded-md border-2 border-orange-700" value={formData.restaurantAddress} onChange={handleChange} required />
              </div>
              <div className="m-3 font-bold ">
                <label>Opening Hours:</label>
                <input type="text" name="openingHours" className="ml-2 rounded-md border-2 border-orange-700" value={formData.openingHours} onChange={handleChange} required />
              </div>
              <div className="m-3 font-bold ">
                <label>Restaurant Description:</label>
                <input type="text" name="description" className="ml-2 rounded-md border-2 border-orange-700" value={formData.description} onChange={handleChange} required />
              </div>
              <div className="m-3 font-bold ">
                <label>Restaurant Logo:</label>
                <input type="text" name="logo" className="ml-2 rounded-md border-2 border-orange-700" value={formData.logo} onChange={handleChange} required />
              </div>
              <div className="m-3 font-bold ">  
                <label>Restaurant Phone:</label>
                <input type="text" name="phone" className="ml-2 rounded-md border-2 border-orange-700" value={formData.phone} onChange={handleChange} required />
              </div>  
              <div className="m-3 font-bold ">
                <label>Restaurant Cuisine:</label>
                <input type="text" name="cuisineType" className="ml-2 rounded-md border-2 border-orange-700" value={formData.cuisineType} onChange={handleChange} required />
              </div>
              <div className="flex justify-center">
              <button type="submit" className=" border-2 border-yellow-500 font-bold text-white ml-3 py-2 px-20 rounded-2xl bg-orange-600 hover:bg-yellow-600">Add Restaurant</button>
              </div>
            </form>
          </div>  
          <div>
            <div className="font-bold	text-2xl flex justify-center border-2 border-yellow-200 rounded-3xl bg-orange-800 text-white py-2">Modify Restaurant</div>
            <form onSubmit={handleModify} className="mx-5 my-5">
              <div  className="m-3 font-bold ">
                <label>Restaurant id:</label>
                <input type="text" name="id" className="ml-2 rounded-md border-2 border-orange-700" value={modifiedData.id} onChange={handleModifiedChange} required />
              </div>
              <div className="m-3 font-bold ">
                <label>Restaurant Name:</label>
                <input type="text" name="name" className="ml-2 rounded-md border-2 border-orange-700 border-dashed" value={modifiedData.name} onChange={handleModifiedChange} />
              </div>
              <div className="m-3 font-bold ">
                <label>Restaurant Address:</label>
                <input type="text" className="ml-2 rounded-md border-2 border-orange-700 border-dashed" value={modifiedData.restaurantAddress} onChange={handleModifiedChange} />
              </div>
              <div className="m-3 font-bold ">
                <label>Opening Hours:</label>
                <input type="text" name="openingHours" className="ml-2 rounded-md border-2 border-orange-700 border-dashed" value={modifiedData.openingHours} onChange={handleModifiedChange} />
              </div> 
              <div className="m-3 font-bold ">
                <label>Restaurant Description:</label> 
                <input type="text" name="description" className="ml-2 rounded-md border-2 border-orange-700 border-dashed" value={modifiedData.description} onChange={handleModifiedChange} />
              </div>
              <div className="m-3 font-bold ">
                <label>Restaurant Logo:</label> 
                <input type="text" name="logo" className="ml-2 rounded-md border-2 border-orange-700 border-dashed" value={modifiedData.logo} onChange={handleModifiedChange} />
              </div>
              <div className="m-3 font-bold ">
                <label>Restaurant Phone:</label>
                <input type="text" name="phone" className="ml-2 rounded-md border-2 border-orange-700 border-dashed" value={modifiedData.phone} onChange={handleModifiedChange} />
              </div>
              <div className="m-3 font-bold ">
                <label>Restaurant Cuisine:</label>
                <input type="text" name="cuisineType" className="ml-2 rounded-md border-2 border-orange-700 border-dashed" value={modifiedData.cuisineType} onChange={handleModifiedChange} />
              </div>
              <div className="flex justify-center">
              <button type="submit" className=" border-2 border-yellow-500 font-bold text-white ml-3 py-2 px-20 rounded-2xl bg-orange-600 hover:bg-yellow-600">Update Restaurant</button>
              </div>
            </form>
          </div>  
          <div>
            <div className="font-bold	text-2xl flex justify-center border-2 border-yellow-200 rounded-3xl bg-orange-800 text-white py-2 ">Remove Restaurant</div>
            <div className="m-3 font-bold ">
                <label className="ml-5">Restaurant id:</label>
              <input
                type="text"
                value={restaurantId}
                onChange={handleIdChange}
                className=" ml-2  rounded-md border-2 border-orange-700"
              />
            </div>
            <div className="flex justify-center">
            <button onClick={handleDelete} className=" border-2 border-yellow-500 font-bold text-white ml-3 py-2 px-20 rounded-2xl bg-orange-600 hover:bg-yellow-600">Delete Restaurant</button>
            </div>
          </div>
            {/* <button onClick={() => {router.push("/PostAdmin/AddDish")}}>press here</button> */}
        </div>
    );
}

    

export default RestaurantActions;


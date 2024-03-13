import { useState } from "react";
import axios from "axios";

const addRestaurant = () => {
    const [formData, setFormData] = useState({
        name: '',
        restaurantAddress: '',
        openingHours: '',
        description: '',
        phone: '',
        cuisineType: ''
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.post('http://localhost:3001/admin/addRestaurant', formData);
            console.log(res.data);
        }
        catch(err){
            console.log(err.res.data);
        }
    }


    return(
        <div>
            <div>Add Restaurant</div>
            <form>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                <input type="text" name="restaurantAddress" placeholder="Address" value={formData.restaurantAddress} onChange={handleChange} required />
                <input type="text" name="openingHours" placeholder="Opening Hours" value={formData.openingHours} onChange={handleChange} required />
                <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
                <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
                <input type="text" name="cuisineType" placeholder="Cuisine Type" value={formData.cuisineType} onChange={handleChange} required />
                <button type="submit">Add Restaurant</button>
            </form>
        </div>
    )
};

export default addRestaurant;
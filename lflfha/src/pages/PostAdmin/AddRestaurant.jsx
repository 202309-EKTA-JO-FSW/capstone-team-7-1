// import { useState } from "react";

// const restaurantActions = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         restaurantAddress: '',
//         openingHours: '',
//         description: '',
//         phone: '',
//         cuisineType: ''
//     });

//     const [modifiedData, setModifiedData] = useState({
//       id: '',
//       name: '',
//       restaurantAddress: '',
//       openingHours: '',
//       description: '',
//       phone: '',
//       cuisineType: ''
//   });

//     const handleChange = (e) => {
//         setFormData({...formData, [e.target.name]: e.target.value});
//     };

//     const handleModifiedChange = (e) => {
//       setModifiedData({...modifiedData, [e.target.name]: e.target.value});
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try{
//             const res = await fetch('http://localhost:3001/admin/addRestaurant', {
//               method: 'POST',
//               headers: {
//                 "Content-Type": "application/json",
//               },
//               body: JSON.stringify(formData)
//             });
//             if (!res.ok) {
//               const errorMessage = await res.text();
//               throw new Error(errorMessage);
//             }
//             const responseData = await res.json();
//             console.log(responseData);
//         }
//         catch(err){
//             console.log(err.message);
//         }
//     }

//     const handleModify = async (e) => {
//       e.preventDefault();
//       try {
//         const res = await fetch(`http://localhost:3001/admin/updateRestaurant/${modifiedData.id}`, {
//           method: 'PUT',
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(modifiedData)
//         });
//         if (!res.ok) {
//           const errorMessage = await res.text();
//           throw new Error(errorMessage);
//         }
//         const responseData = await res.json();
//         console.log(responseData);
//     } catch(err) {
//         console.log(err.message);
//     }
//     }

//     return(
//         <div>
//             <div>Add Restaurant</div>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
//                 <input type="text" name="restaurantAddress" placeholder="Address" value={formData.restaurantAddress} onChange={handleChange} required />
//                 <input type="text" name="openingHours" placeholder="Opening Hours" value={formData.openingHours} onChange={handleChange} required />
//                 <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
//                 <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
//                 <input type="text" name="cuisineType" placeholder="Cuisine Type" value={formData.cuisineType} onChange={handleChange} required />
//                 <button type="submit">Add Restaurant</button>
//             </form>

//             <div>Modify Restaurant</div>
//             <form onSubmit={handleModify}>
//                 <input type="text" name="id" placeholder="ID of the restaurant to modify" value={modifiedData.id} onChange={handleModifiedChange} required />
//                 <input type="text" name="name" placeholder="Name" value={modifiedData.name} onChange={handleModifiedChange} />
//                 <input type="text" name="restaurantAddress" placeholder="Address" value={modifiedData.restaurantAddress} onChange={handleModifiedChange} />
//                 <input type="text" name="openingHours" placeholder="Opening Hours" value={modifiedData.openingHours} onChange={handleModifiedChange} />
//                 <input type="text" name="description" placeholder="Description" value={modifiedData.description} onChange={handleModifiedChange} />
//                 <input type="text" name="phone" placeholder="Phone" value={modifiedData.phone} onChange={handleModifiedChange} />
//                 <input type="text" name="cuisineType" placeholder="Cuisine Type" value={modifiedData.cuisineType} onChange={handleModifiedChange} />
//                 <button type="submit">Update Restaurant</button>
//             </form>
//         </div>
//     )
// };

// export default restaurantActions;
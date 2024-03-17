// import React, { useState } from 'react';
// // Import the useRouter hook if you need to navigate after successful signup
// import { useRouter } from 'next/router';

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     userName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     gender: '',
//     address: '',
//     phone: '',
//   });
  
//   const router = useRouter(); // Uncomment this line if you're using useRouter to navigate after signup

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Check if the passwords match
//     if (formData.password !== formData.confirmPassword) {
//       console.log('Passwords do not match!');
//       return ;
//     }   

//     // Exclude confirmPassword from the data to be sent to the backend
//     const { confirmPassword, ...dataToSubmit } = formData;

//     try {
//       const res = await fetch('http://localhost:3001/user/signup', {
//         method: 'POST',
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(dataToSubmit)
//       });

//       if (!res.ok) {
//         const errorMessage = await res.text();
//         throw new Error(errorMessage);
//       }

//       const responseData = await res.json();
//       console.log(responseData);

//       // You can use the router to navigate to the login page after successful signup
//       // router.push('/login');
//     } catch (err) {
//       console.log(err.message);
//     }
//   };
 //******************************************************************************************** 
//  import React, { useState } from 'react';

//  const Signup = () => {
//    const [formData, setFormData] = useState({
//      userName: '',
//      email: '',
//      password: '',
//      gender: '',
//      address: '',
//      phone: '',
//    });
 
//    const handleChange = (e) => {
//      setFormData({ ...formData, [e.target.name]: e.target.value });
//    };
 
//    const handleSubmit = async (e) => {
//      e.preventDefault();
 
//      // Set options for fetch API
//      const requestOptions = {
//        method: 'POST',
//        headers: { 'Content-Type': 'application/json' },
//        body: JSON.stringify(formData)
//      };
 
//      try {
//        const response = await fetch('http://localhost:3001/user/signup', requestOptions);
//        if (!response.ok) {
//          throw new Error(`HTTP error! status: ${response.status}`);
//        }
//        await response.json();
//        router.push('/Login'); // Redirect to the login page after successful signup
//      } catch (error) {
//        console.error('Signup error:', error.message);
//      }
//    };

//**********************************************************************************************************
import React, { useState } from 'react';
import { useRouter } from 'next/router';


const Signup = () => {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    password1: '',
    gender: '',
    address: '',
    phone: '',
  });

    const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
            e.preventDefault();
            try{
                const res = await fetch('http://localhost:3001/user/signup', {
                  method: 'POST',
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(formData)
                });
                if (!res.ok) {
                    const errorMessage = await res.text();
                    throw new Error(errorMessage);
                }
                const responseData = await res.json();
                console.log(responseData);
            // }
            // catch(err){
            //     console.log(err.message);
            // }
            // Redirect to login page after successful signup
      router.push('http://localhost:3000/Auth/Login');
    } catch (err) {
      console.log(err.message);
    }
        }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFD5C2]">
      <form onSubmit={handleSubmit} className="w-full max-w-md px-8 py-6 bg-white rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="userName" className="block text-sm font-bold mb-2">Username</label>
          <input type="text" id="userName" name="userName" placeholder="username" value={formData.userName} onChange={handleChange} required className="w-full px-3 py-2 border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-bold mb-2">Email</label>
          <input type="email" id="email" name="email" placeholder="email" value={formData.email} onChange={handleChange} required className="w-full px-3 py-2 border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-bold mb-2">Password</label>
          <input type="password" id="password" name="password" placeholder="password" value={formData.password} onChange={handleChange} required className="w-full px-3 py-2 border rounded" />
        </div>

        <div className="mb-4">         
         <label htmlFor="password" className="block text-sm font-bold mb-2">Password1</label>
          <input type="password1" id="password1" name="password1" placeholder="confirm password" value={formData.password1} onChange={handleChange} required className="w-full px-3 py-2 border rounded" />
        </div>
       
        <div className="mb-4">
          <label htmlFor="gender" className="block text-sm font-bold mb-2">Gender</label>
          <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required className="w-full px-3 py-2 border rounded">
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="mb-4">
        <label htmlFor="address" className="block text-sm font-bold mb-2">Address</label>
        <input type="text" id="address" name="address" placeholder=" address" value={formData.address} onChange={handleChange} required className="w-full px-3 py-2 border rounded" />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-bold mb-2">Phone Number</label>
        <input type="tel" id="phone" name="phone" placeholder="+962" value={formData.phone} onChange={handleChange} required className="w-full px-3 py-2 border rounded" />
      </div>

        <div className="flex items-center justify-between">
          <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;

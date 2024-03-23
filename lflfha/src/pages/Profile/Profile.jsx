
// Function to fetch user profile......

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
const UserProfile = () => {
  const router = useRouter();
  const { userId } = router.query;
  const [userProfile, setUserProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    gender: '',
    address: '',
    phone: '',
  });
const fetchUserProfile = async () => {
  try {
    const token = localStorage.getItem('accessToken'); // Ensure the token is retrieved correctly
    if (!token) {
      throw new Error('No access token found');
    }

    const res = await fetch(`http://localhost:3001/users/${userId}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${get().accessToken}`,
                  // 'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,

      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    // const data = await res.json();
    setUserProfile(res.data);
    setFormData({
      userName: res.data.userName,
      email: res.data.email,
      gender: res.data.gender,
      address: res.data.address,
      phone: res.data.phone,
    });
  } catch (err) {
    console.error(err.message);
    // Handle the error state in the UI, maybe by setting an error message in state and displaying it
  }
}

const updateUserProfile = async () => {
      try {
        const res = await fetch(`http://localhost:3001/users/${userId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
          },
          body: JSON.stringify({
            userName: formData.userName,
            email: formData.email,
            gender: formData.gender,
            address: formData.address,
            phone: formData.phone,
          }),
        });
  
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
  
        const updatedUser = await res.json();
        setUserProfile(res.data);
        setIsEditing(false);
      } catch (err) {
        console.error(err.message);
      }
    };
  
    useEffect(() => {
      if (userId) {
        fetchUserProfile();
      }
    }, [userId]);
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      updateUserProfile();
    };
  
    if (!formData) { <p>Loading...</p>
  console.log({formData})}else{
    console.log({formData})
  }
    return (
      <div>
        <h1>User Profile</h1>
        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <input
              name="userName"
              value={formData.userName}
              onChange={handleChange}
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              {/* Add more gender options here if necessary */}
            </select>
            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <button type="submit">Save Changes</button>
          </form>
        ) : (
          <div>
            <p>Username: {formData.userName}</p>
            <p>Email: {formData.email}</p>
            <p>Gender: {formData.gender}</p>
            <p>Address: {formData.address}</p>
            <p>Phone: {formData.phone}</p>
            <button onClick={() => setIsEditing(true)}>Edit Profile</button>
          </div>
         )}
      </div>
    );
  };

export default UserProfile;

 
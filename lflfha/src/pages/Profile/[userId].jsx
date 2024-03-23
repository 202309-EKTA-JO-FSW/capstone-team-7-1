import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
// import useAuthStore from '@/Store/authStore';

const UserProfile = () => {
  // const getUserProfile = useAuthStore((state) => state.getUserProfile)//add...........
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
    const token = localStorage.getItem('accessToken'); 
    if (!token) {
      throw new Error('No access token found');
    }

    const res = await fetch(`http://localhost:3001/users/${userId}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`,
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    console.log("Fetched user profile data:", data); 

    setUserProfile(data); 

    // getUserProfile(userProfile)//add...

    setFormData({
      userName: data.userName,
      email: data.email,
      gender: data.gender,
      address: data.address,
      phone: data.phone,
    });

  } catch (err) {
    console.error("Error fetching user profile:", err.message); // Log more descriptive error
  }
};




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
      <div className="max-w-4xl mx-auto p-10 bg-orange-100 shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-gray-700 mb-6">User Profile</h1>
        {isEditing ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              className="w-full p-2 border border-gray-300 rounded"
              name="userName"
              placeholder="Username"
              value={formData.userName}
              onChange={handleChange}
            />
            <input
              className="w-full p-2 border border-gray-300 rounded"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <select
              className="w-full p-2 border border-gray-300 rounded"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            />
            <input
              className="w-full p-2 border border-gray-300 rounded"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
            >
              Save Changes
            </button>
          </form>
        ) : (
          <div className="space-y-4">
            <p className="text-lg"><strong>Username:</strong> {formData.userName}</p>
            <p className="text-lg"><strong>Email:</strong> {formData.email}</p>
            <p className="text-lg"><strong>Gender:</strong> {formData.gender}</p>
            <p className="text-lg"><strong>Address:</strong> {formData.address}</p>
            <p className="text-lg"><strong>Phone:</strong> {formData.phone}</p>
            <button
              onClick={() => setIsEditing(true)}
              className="w-full px-4 py-2 text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
            >
              Edit Profile
            </button>
          </div>
        )}
      </div>
    );











    








  };

export default UserProfile;

 
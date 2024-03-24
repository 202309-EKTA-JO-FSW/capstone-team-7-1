import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import useAuthStore from '@/Store/authStore';

const UserProfile = () => {
  const router = useRouter();
    const accessToken = useAuthStore((state) => state.accessToken)
    const userId = useAuthStore((state) => state.userId)

  const profileId  = router.query.userId || userId  ;
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
    
    const res = await fetch(`http://localhost:3001/users/${profileId}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`,
      },
    });

    const data = await res.json();
    setUserProfile(data); 

    setFormData({
      userName: data.userName,
      email: data.email,
      gender: data.gender,
      address: data.address,
      phone: data.phone,
    });

  } catch (err) {
    console.error("Error fetching user profile:", err.message); 
  }
};

const updateUserProfile = async () => {
      try {
        const res = await fetch(`http://localhost:3001/users/${profileId}`, {
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
        setUserProfile(updatedUser);
        setIsEditing(true);
      } catch (err) {
        console.error(err.message);
      }
    };
  
    useEffect(() => {
      if (profileId) {
        fetchUserProfile();
      }
    }, [profileId]);
  
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
              <div className="flex justify-end space-x-2 mt-4">

        <button
        
          onClick={() => setIsEditing(false)} 
          className="px-6 py-2 border-2 bg-orange-500 border-orange-500 text-white hover:bg-orange-600 rounded transition duration-300 ease-in-out"
        >
          Save Changes
        </button>
      </div>

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
                className=" px-4 py-2 text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
              >
                Edit Profile
              </button>

              <button
              >
                <a
                href="/"
                className=" px-4 py-2 text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
                >
                Back Home
                     </a>
              </button>
            </div>
          )}
        </div>
      );




  };


export default UserProfile;

 
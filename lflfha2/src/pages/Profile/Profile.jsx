import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const UserProfile = () => {
  const router = useRouter();
  const { userId } = router.query; // Get the userId from the URL
  const [userProfile, setUserProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    gender: '',
    address: '',
    phone: '',
  });

  // Function to fetch user profile
  const fetchUserProfile = async () => {
    try {
      const res = await fetch(`http://localhost:3001/users/${userId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`, // Assuming the token is stored in localStorage
        },
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      setUserProfile(data);
      setFormData({ // Assuming these fields exist in your user model
        userName: data.userName,
        email: data.email,
        gender: data.gender,
        address: data.address,
        phone: data.phone,
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  // Function to update user profile
  const updateUserProfile = async () => {
    try {
      const res = await fetch(`http://localhost:3001/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const updatedUser = await res.json();
      setUserProfile(updatedUser);
      setIsEditing(false); // Stop editing after successful update
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchUserProfile();
    }
  }, [userId]);

  // Handle form changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserProfile();
  };

  if (!userProfile) return <p>Loading...</p>;

  return (
    <div>
      <h1>User Profile</h1>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          {/* Input fields for editing */}
          {/* ... */}
          <button type="submit">Save Changes</button>
        </form>
      ) : (
        <div>
          {/* Display user profile details */}
          <p>Username: {userProfile.userName}</p>
          <p>Email: {userProfile.email}</p>
          {/* ... */}
          <button onClick={() => setIsEditing(true)}>Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;

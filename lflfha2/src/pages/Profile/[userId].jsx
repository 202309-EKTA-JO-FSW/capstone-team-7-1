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



//***************************************************************************

// pages/profile/[userId].js
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';

// const userProfile = () => {
//   const router = useRouter();
//   const { userId } = router.query;
//   const [userProfile, setUserProfile] = useState(null);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     if (userId) {
//       fetchUserProfile();
//     }
//   }, [userId]);

//   const fetchUserProfile = async () => {
//     try {
//       const res = await fetch(`http://localhost:3001/users/${userId}`, {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
//         },
//       });

//       if (!res.ok) {
//         throw new Error(`Error: ${res.status}`);
//       }

//       const data = await res.json();
//       setUserProfile(data);
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   if (!userProfile) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="container mx-auto mt-10">
//       <div className="flex flex-col items-center">
//         <img
//           src={userProfile.profilePicture || '/default-profile.png'}
//           alt="Profile Picture"
//           className="w-32 h-32 rounded-full object-cover"
//         />
//         <h1 className="text-2xl font-semibold mt-4">{userProfile.userName}</h1>
//         <p>{userProfile.email}</p>
//         <p>{userProfile.gender}</p>
//         <p>{userProfile.address}</p>
//         <p>{userProfile.phone}</p>
//       </div>
//     </div>
//     )
//   }
//***************************************************
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';

// const UserProfilePage = () => {
//   const router = useRouter();
//   const { userId } = router.query;
//   const [user, setUser] = useState(null);
//   console.log(`Fetching user profile for ID: ${userId}`);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await fetch(`http://localhost:3001/users/${userId}`, {
//           method: 'GET',
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//           },
//         });
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const userData = await response.json();
//         setUser(userData);
//       } catch (error) {
//         console.error("Failed to fetch user:", error);
//       }
//     };

//     if (userId) {
//       fetchUser();
//     }
//   }, [userId]);

//   // if (!user) {
//   //   return <p>Loading user profile...</p>;
//   // }

//    if (!userId) {
//     console.error('UserID is undefined.');
//     return;
//   }
// return(
//     <div className="profile-container">
//       <h1>User Profile</h1>
//       <div className="profile-details">
//         {/* <img src={user.profilePicture || '/default-profile.png'} alt={`${user.userName}'s Profile Picture`} /> */}
//         <p><strong>Username:</strong> {user.username}</p>
//         <p><strong>Email:</strong> {user.email}</p>
//         <p><strong>Gender:</strong> {user.gender}</p>
//         <p><strong>Address:</strong> {user.address}</p>
//         <p><strong>Phone:</strong> {user.phone}</p>
//       </div>
//     </div>
//   );
// };

// export default UserProfilePage;


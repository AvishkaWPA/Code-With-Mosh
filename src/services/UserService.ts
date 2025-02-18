import axios from "axios";
import { User } from "../models/User";

// Define the API URL
const API_URL = "https://jsonplaceholder.typicode.com/users";

// Create a service to fetch users
export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Return the list of users
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error; // Throw error to be handled in the component
  }
};

// You can also create other API methods like addUser, updateUser, etc.
export const addUser = async (user: User): Promise<User> => {
  try {
    const response = await axios.post(API_URL, user);
    return response.data; // Return the added user
  } catch (error) {
    console.error("Error adding user:", error);
    throw error;
  }
};


// import React, { useEffect, useState } from "react";
// import { fetchUsers } from "../services/userService"; // Import the service
// import { User } from "../models/User"; // Import the User model

// const Home: React.FC = () => {
//   const [users, setUsers] = useState<User[]>([]); // State to store users
//   const [error, setError] = useState<string | null>(null); // For error handling

//   useEffect(() => {
//     // Call the fetchUsers method from the service
//     const getUsers = async () => {
//       try {
//         const data = await fetchUsers();
//         setUsers(data); // Update state with the fetched users
//       } catch (error) {
//         setError("Failed to load users"); // Set error message
//       }
//     };
//     getUsers(); // Call the async function
//   }, []); // Empty dependency array to run only once on mount

//   return (
//     <div>
//       <h1>User List</h1>
//       {error && <p>{error}</p>} {/* Display error if occurs */}
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>{user.name}</li> // Display the users
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Home;


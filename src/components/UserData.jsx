import { useState, useEffect } from "react";

const apiUrl = "https://jsonplaceholder.typicode.com/users/1";

const UserData = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const response = await fetch(apiUrl);
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>Name: {userData?.name}</p>
      <p>Email: {userData?.email}</p>
      <p>City: {userData?.address?.city}</p>
    </div>
  );
};

export default UserData;

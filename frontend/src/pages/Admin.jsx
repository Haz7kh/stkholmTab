import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { getData, getUsers, createPost } from "../api";
import "../styles/Admin.css"; // Import the CSS file
import Hero from "../components/Hero";

const Admin = () => {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  const [activeSection, setActiveSection] = useState("data");
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData(auth.token);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    const fetchUsers = async () => {
      try {
        const response = await getUsers(auth.token);
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users", error);
      }
    };

    if (activeSection === "data") {
      fetchData();
    } else if (activeSection === "users") {
      fetchUsers();
    }
  }, [auth.token, activeSection]);

  const handleCreatePost = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", event.target.title.value);
    formData.append("content", event.target.content.value);
    formData.append("photo", event.target.photo.files[0]);

    try {
      await createPost(formData, auth.token);
      alert("Post created successfully!");
      event.target.reset();
      setActiveSection("data"); // Redirect to data section after creating post
    } catch (error) {
      console.error("Error creating post", error);
      alert("Failed to create post");
    }
  };

  return (
    <>
      <Hero pageTitle="Admin Page" />
      <div className="admin-container">
        <div className="sidebar">
          <h2>Admin Panel</h2>
          <ul>
            <li>
              <a href="#" onClick={() => setActiveSection("data")}>
                Data
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setActiveSection("users")}>
                Users
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setActiveSection("create-post")}>
                Create Post
              </a>
            </li>
          </ul>
        </div>
        <div className="content">
          {activeSection === "data" && (
            <div className="section">
              <h2>Data</h2>
              <table className="admin-data-table">
                <thead>
                  <tr>
                    <th>Full name</th>
                    <th>Person- number</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>More to notice </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item._id}>
                      <td>{item.name}</td>
                      <td>{item.personnr}</td>
                      <td>{item.phone}</td>
                      <td>{item.email}</td>
                      <td>{item.address}</td>
                      <td>{item.dataField}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {activeSection === "users" && (
            <div className="section">
              <h2>Users</h2>
              <table className="admin-data-table">
                <thead>
                  <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user._id}>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.isAdmin ? "Admin" : "User"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {activeSection === "create-post" && (
            <div className="section">
              <h2>Create Post</h2>
              <form
                id="create-post-form"
                onSubmit={handleCreatePost}
                encType="multipart/form-data"
              >
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" required />
                <br />
                <label htmlFor="content">Content:</label>
                <textarea id="content" name="content" required></textarea>
                <br />
                <label htmlFor="photo">Photo:</label>
                <input type="file" id="photo" name="photo" />
                <br />
                <button type="submit">Submit</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Admin;

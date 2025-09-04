import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";
import api from "../components/lib/axios";
import toast from "react-hot-toast";

function UserSearchForm({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [role, setRole] = useState("all");

  const handleSearch = () => {
    onSearch(searchTerm, role);
  };

  return (
    <section className="p-4 rounded-lg w-full border mb-6">
      <label className="block font-medium mb-1">Search Users</label>
      <input
        type="text"
        placeholder="Search by name or email"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full border rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <label className="block font-medium mb-1">Filter by Role</label>
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="w-full border rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="all">All Roles</option>
        <option value="admin">Admin</option>
        <option value="instructor">Instructor</option>
        <option value="student">Student</option>
      </select>

      <button
        onClick={handleSearch}
        className="w-full border rounded-lg px-3 py-2 flex items-center justify-center gap-2 hover:bg-gray-100"
      >
        <FontAwesomeIcon icon={faSearch} />
        Search
      </button>
    </section>
  );
}

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async (search = "", role = "all") => {
    try {
      setLoading(true);
      const params = {};
      if (search) params.search = search;
      if (role !== "all") params.role = role;

      const res = await api.get("/api/users", { params });
      setUsers(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      toast.error("Failed to load users");
      console.error("User fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <main className="p-4">
      {/* Header */}
      <header className="md:flex justify-between items-center mb-6">
        <section>
          <h1 className="text-3xl font-bold mb-1">User Management</h1>
          <p className="text-gray-600">
            Manage user accounts, roles, and permissions for your learning platform.
          </p>
        </section>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg flex items-center gap-2 mt-5">
          <FontAwesomeIcon icon={faPlus} />
          Add New User
        </button>
      </header>

      {/* Search Form */}
      <UserSearchForm onSearch={fetchUsers} />

      {/* Users Table */}
      {loading ? (
        <p className="text-gray-500 text-center mt-10">Loading users...</p>
      ) : users.length === 0 ? (
        <p className="text-gray-500 text-center mt-10">No users found.</p>
      ) : (
        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Users List</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border rounded-lg shadow-sm">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="text-left px-4 py-2 border-b">Name</th>
                  <th className="text-left px-4 py-2 border-b">Email</th>
                  <th className="text-left px-4 py-2 border-b">Role</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border-b">{user.name}</td>
                    <td className="px-4 py-2 border-b">{user.email}</td>
                    <td className="px-4 py-2 border-b text-pink-500 font-medium">
                      {user.role}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </main>
  );
}

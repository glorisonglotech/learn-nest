import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";

function UserSearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [role, setRole] = useState("all");

  const handleSearch = () => {
    console.log("Search term:", searchTerm);
    console.log("Selected role:", role);
  };

  return (
    <div className="bg-blue-50 p-4 rounded-lg max-w-2xl">
      {/* Search Users */}
      <label className="block font-medium mb-1">Search Users</label>
      <input
        type="text"
        placeholder="Search by name or email"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full border rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Filter by Role */}
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

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="w-full border rounded-lg px-3 py-2 flex items-center justify-center gap-2 hover:bg-gray-100"
      >
        <FontAwesomeIcon icon={faSearch} />
        Search
      </button>
    </div>
  );
}

export default function Users() {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-1">User Management</h1>
          <p className="text-gray-600">
            Manage user accounts, roles, and permissions for your learning platform.
          </p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg flex items-center gap-2">
          <FontAwesomeIcon icon={faPlus} />
          Add New User
        </button>
      </div>

      {/* Search Form */}
      <UserSearchForm />
    </div>
  );
}

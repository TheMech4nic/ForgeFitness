import React, { useState } from "react";
import DatePicker from "react-datepicker";


const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    dateOfBirth: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (date: Date | null) => {
    setFormData((prevData) => ({
      ...prevData,
      dateOfBirth: date,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // Replace with API call
  };

  return (
    <div className="min-h-screen flex items-center bg-black text-white">
      {/* Left Content */}
      <div className="w-1/2 p-10 flex flex-col justify-center space-y-6">
        <h1 className="text-4xl font-bold text-blue-500">
          Forge Your Fitness Journey 💪
        </h1>
        <p className="text-gray-400 text-lg">
          Discover a healthier, stronger, and more confident you. Join our
          community of fitness enthusiasts and take the first step toward your
          transformation!
        </p>
        <ul className="text-gray-300 list-disc pl-5 space-y-3">
          <li>Personalized workout plans 🏋️‍♂️</li>
          <li>24/7 access to expert trainers 👨‍🏫</li>
          <li>Nutrition guidance for optimal results 🥗</li>
          <li>Track your progress with ease 📊</li>
        </ul>
        <div>
          <span className="text-yellow-400 text-lg">💡</span> *Because your
          fitness journey starts today.
        </div>
      </div>

      {/* Right Form */}
      <div className="w-1/2 p-10 bg-gray-900 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Register 🚀</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-400">
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-400">
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          {/* Date of Birth */}
          <div>
            <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-400">
              Date of Birth
            </label>
            <DatePicker
              selected={formData.dateOfBirth}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select your date of birth"
              className="w-full px-4 py-2 mt-1 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              calendarClassName="react-datepicker"
            />
          </div>
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          {/* Phone Number */}
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-400">
              Phone Number
            </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-400">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500"
            >
              Register 🚴‍♂️
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

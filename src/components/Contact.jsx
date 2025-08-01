import { useState } from "react";
import Sidebar from "./Sidebar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    work_type: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format the message
    const whatsappMessage =
      `Hello! I'm interested in your services.\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Work Type:* ${formData.work_type}\n` +
      `*Project Description:*\n${formData.description}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Replace 'yournumber' with your actual WhatsApp number in international format (without + or 00)
    const whatsappUrl = `https://wa.me/919707843707?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <div className="w-72 z-50 fixed h-screen shadow-2xl">
        <Sidebar />
      </div>
      <div className="flex-1 ml-72 overflow-y-auto py-12 px-8 md:px-20 lg:px-40">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 flex flex-col gap-3 py-10 rounded-t-lg justify-center items-center text-white">
            <h1 className="text-3xl font-bold">Contact Us</h1>
            <div className="rounded-full h-1 w-16 bg-white/80"></div>
            <p className="text-white/90">We'd love to hear from you</p>
          </div>

          {/* Form Section */}
          <div className="p-8 md:p-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200"
                  placeholder="John Doe"
                />
              </div>

              {/* Contact Info Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200"
                    placeholder="+1 (123) 456-7890"
                  />
                </div>
              </div>

              {/* Work Type Dropdown */}
              <div>
                <label
                  htmlFor="work_type"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Type of Work <span className="text-red-500">*</span>
                </label>
                <select
                  id="work_type"
                  name="work_type"
                  required
                  value={formData.work_type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200 appearance-none bg-white"
                >
                  <option value="">Select an option</option>
                  <option value="web_development">Web Development</option>
                  <option value="mobile_app">Mobile App Development</option>
                  <option value="ui_ux">UI/UX Design</option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Description Field */}
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Project Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={5}
                  required
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 transform hover:scale-[1.01]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FarmerProfile() {
  const [form, setForm] = useState({
    age: '',
    village: '',
    contact: '',
    landSize: '',
    cropType: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const res = await fetch("https://agricultureapp-md0l.onrender.com/api/save-profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    if (data.success) {
      alert("Profile saved!");
      navigate("/a/login/page1");
    }
  };

  return (
    <form className="profile-form" onSubmit={handleSubmit}>
      <h2>Farmer Profile</h2>
      <input name="age" placeholder="Age" value={form.age} onChange={handleChange} required />
      <input name="village" placeholder="Village" value={form.village} onChange={handleChange} required />
      <input name="contact" placeholder="Contact No" value={form.contact} onChange={handleChange} required />
      <input name="landSize" placeholder="Land Size (in acres)" value={form.landSize} onChange={handleChange} required />
      <input name="cropType" placeholder="Primary Crop" value={form.cropType} onChange={handleChange} required />
      <button type="submit">Save Profile</button>
    </form>
  );
}
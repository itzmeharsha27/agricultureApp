import { useEffect, useState } from "react";

export default function FarmerProfileView() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("https://agricultureapp-md0l.onrender.com/api/get-profile", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => setProfile(data.profile));
  }, []);

  if (!profile) return <p>Loading profile...</p>;

  return (
    <div className="profile-container">
      <h2>👨‍🌾 Farmer Profile</h2>
      <p><strong>Village:</strong> {profile.village}</p>
      <p><strong>Age:</strong> {profile.age}</p>
      <p><strong>Contact:</strong> {profile.contact}</p>
      <p><strong>Land Size:</strong> {profile.landSize} acres</p>
      <p><strong>Primary Crop:</strong> {profile.cropType}</p>
    </div>
  );
}

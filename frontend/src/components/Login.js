import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const Navigate = useNavigate();

  const Loginhandle = async (e) => {
    e.preventDefault();

    const res = await fetch('https://agricultureapp-md0l.onrender.com/api/log', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: Email, password: Password }),
    });

    const data = await res.json();

    if (data.ok) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('email', Email);

      // ✅ Check if profile exists
      const profileRes = await fetch('https://agricultureapp-md0l.onrender.com/api/get-profile', {
        headers: { Authorization: `Bearer ${data.token}` }
      });
      const profileData = await profileRes.json();

      if (profileData?.profile?.village) {
        Navigate('/a/login/page1');
      } else {
        Navigate('/a/farmer-profile');
      }
    } else {
      alert(data.message || 'Login failed');
    }
  };

  return (
    <div id="lo">
      <form id="login" onSubmit={Loginhandle}>
        <img id="img" src="/farmer.jpg" alt="logo" />
        <img id="img2" src="/userloginlogo.jpg" alt="logo" />
        <div id="abcd">
          <input
            id="lg"
            type="email"
            placeholder="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            id="lgg"
            type="password"
            placeholder="Password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button id="lggg" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
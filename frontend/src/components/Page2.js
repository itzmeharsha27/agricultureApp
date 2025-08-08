import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { detail } from "./Data";

export default function Page2() {
  const { id } = useParams();
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch(`https://agricultureapp-md0l.onrender.com/api/items/${id}`)
      .then(res => res.json())
      .then(data => setItems(data));
  }, [id]);

  const match = detail.find((item) => item.id === parseInt(id));

  if (!match) return <p>Loading...</p>;

  return (
    <div className="page2-container">
      <div className="crop-card">
        <img src={match.imageUrl} alt={match.pname} className="crop-image2" />
        <h2>{match.pname}</h2>
        <hr></hr>
        <br></br>
<h5><strong>Season:</strong> {match.season}</h5>
<br/>
        {/* <p><strong>Description:</strong> {match.discription || 'N/A'}</p> */}

        {Array.isArray(match.steps) ? (
          <>
            <h2 >Steps to Follow:</h2>
            <ol className="crop-steps"><h4>
              {match.steps.map((step, idx) => (
                <li id="g" key={idx}>{step}</li>
              ))}
              </h4>
            </ol>
          </>
        ) : (
          <h3><strong>Region:</strong> {match.steps}</h3>
        )}
        <br/>

       <div className="button-group">
  <Link to={`/a/${match.pname.toLowerCase()}/Login`}>
    <button className="page2-btn">Start Growing</button>
  </Link>

  <Link
  to={`/a/${match.pname.toLowerCase()}/farmer`}
  onClick={() => {
    localStorage.setItem("selectedCrop", match.pname.toLowerCase());
  }}
>
  <button className="page2-btn">Together Flow</button>
</Link>

  <Link to={`/a/${match.pname.toLowerCase()}/fertilizer`}>
    <button className="page2-btn">Fertilizer Info</button>
  </Link>
</div>

      </div>
    </div>
  );
}

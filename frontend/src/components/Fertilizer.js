// ✅ Page4.js (Fertilizer Page)
import { useParams } from "react-router-dom";
import { detail } from "./Data";

export default function Page4() {
  const { id } = useParams();
const match = detail.find((item) => item.pname.toLowerCase() === id.toLowerCase());

  if (!match) return <p>Crop not found..</p>;

  return (
    <>
    <div className="fertilizer-container">
      <div className="fertilizer-card">
        <h2>{match.pname} Fertilizer Guide</h2><br/>
        {/* <img src={match.imageUrl} alt={match.pname} className="fertilizer-image" /> */}
{/* <p><strong>Season:</strong> {match.season}</p> */}
        {/* <p><strong>Region:</strong> {match.steps}</p> */}

        <h3>Overall Recommended Fertilizers:
          From starting to ending:
        </h3>
          
        {/* <ul className="fertilizer-list">
          {match.fertilizer?.map((item, index) => (
            <li key={index}>🌿 {item.fertilizer}</li>
          ))}
        </ul> */}
       {match.fertilizer.map((item, index) => (
          <div key={index} className="fertilizer-item">
            

            <img
              src={match.fertilizerImages[index]}
              alt={`Fertilizer for ${match.pname}`}
              className="small-img"
            />
            <div id="aaaa">
            <h4 id="aa">{item}</h4>
            <h4 id="aaa">Cost : ₹{match.feramount[index]}  /KG</h4>
            <hr></hr>
            </div>
          </div>

       

        ))}
       <div id="note">
      <h2>NOTE : </h2>
      <h4>1) (FYM) : 1½ kg  /acer </h4>
     <h4>2) NPK 12:61:00 : 1 kg  /acer </h4>
     <h4>3) Urea : 2½ kg /acer </h4>
     <h4>4) Calcium Nitrate: 1½ KG /acer </h4>
     <h4>5) Micronutrient Mix : ½ kg /acer </h4>

      </div>

        {/* {match.fertilizerImg && (
          <div>
            <h4>Fertilizer Image:</h4>
            <img src={match.fertilizerImg} alt="Fertilizer" className="fertilizer-image-small" />
          </div>
        )} */}
      </div>
    </div>
    
  
    </>
  );
}

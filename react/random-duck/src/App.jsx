import React, { useState } from "react";

const DuckGenerator = () => {
  const [duckURL, setDuckURL] = useState("");

  const fetchDuck = async () => {
    const response = await fetch(
      "https://api.allorigins.win/get?url=https://random-d.uk/api/random"
    );

    const data = await response.json();
    const jsonData = JSON.parse(data.contents);
    console.log(jsonData);
    setDuckURL(jsonData.url);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <button onClick={fetchDuck}>Generate Random Duck</button>
      {duckURL && <img src={duckURL} alt="Random Duck" width="300" />}
    </div>
  );
};

export default DuckGenerator;

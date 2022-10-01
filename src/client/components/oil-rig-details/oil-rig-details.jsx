import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const OilRigDetails = () => {
  const [oilRig, setOilRig] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:3000/api/oil-rigs/" + id)
      .then((response) => response.json())
      .then((oilRig) => setOilRig(oilRig));
  }, [id]);

  return (
    <div style={{ paddingTop: 100 }}>
      {oilRig === null ? "loading..." : oilRig.name}
    </div>
  );
};

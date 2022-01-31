import React from "react";
import sdata from "./Sdata.jsx";
import Card from "./Card.jsx";
import Title from "./Title";

function Ncard(val) {
  return (
    <Card
      key={val.id}
      src={val.src}
      title={val.title}
      details={val.details}
      link={val.link}
    />
  );
}

const Netflix = () => {
  return <>
  <Title/>
  <div className="cardmain">
  <div className="cardflex">

  {sdata.map(Ncard)} </div>
  </div>
  </>
};

export default Netflix;

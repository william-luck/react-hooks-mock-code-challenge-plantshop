import {React, useEffect, useState} from "react";
import PlantCard from "./PlantCard";

function PlantList({newPlant, plants, setPlants}) {

  

 

  



  return (
    <ul className="cards">{plants.map(plant => {
      return <PlantCard key={plant.id} plant={plant}/>
    })}</ul>
  );
}

export default PlantList;

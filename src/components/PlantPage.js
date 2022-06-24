import {React, useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [newPlant, setNewPlant] = useState(true)
  const [searchedPlant, setSearchedPlant] = useState('')

  const [plants, setPlants] = useState([])

  function handleSearchSubmit(event) {
    setSearchedPlant(event.target.value)

    if (event.target.value === '') {
      setNewPlant(!newPlant)
    } else {
      let searchedPlantArray = plants.filter(plant => { //IT WORKS 
        return (plant.name).includes(searchedPlant)
      })
      console.log(searchedPlantArray)
      setPlants(searchedPlantArray)
    }
  }

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(response => response.json())
      .then(src => setPlants(src))
  }, [newPlant]) // will re-render on new-item toggle

  return (
    <main>
      <NewPlantForm setNewPlant={setNewPlant} newPlant={newPlant} />
      <Search onSearch={handleSearchSubmit} searchedPlant={searchedPlant}/>
      <PlantList newPlant={newPlant} plants={plants} setPlants={setPlants}/> 
    </main>
  );
}

export default PlantPage;

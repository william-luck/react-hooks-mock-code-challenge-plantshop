import { useState } from "react";
import React from "react";

function NewPlantForm({ setNewPlant, newPlant }) {

  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState('')


  function handleSubmit(event) {
    event.preventDefault();

    const newPlant = {
      name: name,
      image: image,
      price: parseInt(price)
    }

    fetch('http://localhost:6001/plants', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPlant)
    })
      .then(response => response.json())
      .then(() => setNewPlant(!newPlant)) // Toggles new plant added to make the plantpage rerender. 
  }

  function handleNameChange(event) {
    setName(event.target.value)
  }

  function handleImageChange(event) {
    setImage(event.target.value)
  }
  
  function handlePriceChange(event) {
    setPrice(event.target.value)
  }


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={name} onChange={handleNameChange} />
        <input type="text" name="image" placeholder="Image URL" value={image} onChange={handleImageChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={price} onChange={handlePriceChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

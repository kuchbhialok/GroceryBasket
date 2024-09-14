import React, { useState } from 'react';

function App() {
    const [fruit, setFruit] = useState(["apple", "banana", "pineapple"]);

    function AddItem() {
        const NewFruit = document.getElementById("Lauda").value;
        if (NewFruit.trim() !== "") {
            document.getElementById("Lauda").value = "";
            setFruit(f => [...f, NewFruit]); // Add new fruit to the array
        }
    }

    const Remover = (indexToRemove) => {
        setFruit(fruit.filter((_, i) => i !== indexToRemove)); // Remove the item at the given index
    };

    return (
      
        <div className='Container'>
          <h1>Basket</h1>
            <ul>
                {fruit.map((fruitItem, index) => (
                    <li key={index} onClick={() => Remover(index)}> {/* Pass the index to Remover */}
                        {fruitItem}
                    </li>
                ))}
            </ul>

            <input type="text" id="Lauda" placeholder="Enter new items" />
            <button onClick={AddItem}>Enter</button>
        </div>
    );
}

export default App;

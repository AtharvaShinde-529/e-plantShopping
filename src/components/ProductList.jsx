import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/CartSlice'; 

const ProductList = () => {
    const [addedToCart, setAddedToCart] = useState({});
    const dispatch = useDispatch();

    const plantsArray = [
        {
            category: "Aromatic Plants",
            plants: [
                { name: "Lavender", image: "https://via.placeholder.com/150", description: "Calming scent", cost: 15 }
            ]
        },
        {
            category: "Medicinal Plants",
            plants: [
                { name: "Aloe Vera", image: "https://via.placeholder.com/150", description: "Soothing gel", cost: 20 }
            ]
        }
    ];

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
        setAddedToCart((prevState) => ({
            ...prevState,
            [plant.name]: true
        }));
    };

    return (
        <div className="product-list-container">
            {plantsArray.map((category, index) => (
                <div key={index}>
                    <h2>{category.category}</h2>
                    <div className="product-grid">
                        {category.plants.map((plant, plantIndex) => (
                            <div key={plantIndex} className="plant-card">
                                <img src={plant.image} alt={plant.name} />
                                <h3>{plant.name}</h3>
                                <p>{plant.description}</p>
                                <p>Cost: ${plant.cost}</p>
                                <button 
                                    onClick={() => handleAddToCart(plant)}
                                    disabled={addedToCart[plant.name]}
                                >
                                    {addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;

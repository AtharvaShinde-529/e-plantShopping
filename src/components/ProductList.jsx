import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/CartSlice';

const ProductList = () => {
    const [addedToCart, setAddedToCart] = useState({});
    const dispatch = useDispatch();

    // 3 Categories, 6 Plants each = 18 total plants
    const plantsArray = [
        {
            category: "Aromatic Plants",
            plants: [
                { name: "Lavender", image: "https://placehold.co/150x150?text=Lavender", description: "Calming floral scent", cost: "$15" },
                { name: "Jasmine", image: "https://placehold.co/150x150?text=Jasmine", description: "Sweet and exotic fragrance", cost: "$18" },
                { name: "Rosemary", image: "https://placehold.co/150x150?text=Rosemary", description: "Woody and pine-like aroma", cost: "$12" },
                { name: "Mint", image: "https://placehold.co/150x150?text=Mint", description: "Fresh and cooling scent", cost: "$8" },
                { name: "Basil", image: "https://placehold.co/150x150?text=Basil", description: "Sweet and pungent herb", cost: "$10" },
                { name: "Lemongrass", image: "https://placehold.co/150x150?text=Lemongrass", description: "Citrusy and refreshing", cost: "$14" }
            ]
        },
        {
            category: "Medicinal Plants",
            plants: [
                { name: "Aloe Vera", image: "https://placehold.co/150x150?text=Aloe+Vera", description: "Soothing gel for burns", cost: "$20" },
                { name: "Chamomile", image: "https://placehold.co/150x150?text=Chamomile", description: "Promotes relaxation and sleep", cost: "$16" },
                { name: "Echinacea", image: "https://placehold.co/150x150?text=Echinacea", description: "Boosts immune system", cost: "$22" },
                { name: "Peppermint", image: "https://placehold.co/150x150?text=Peppermint", description: "Aids digestion", cost: "$9" },
                { name: "Ginger", image: "https://placehold.co/150x150?text=Ginger", description: "Anti-inflammatory root", cost: "$13" },
                { name: "Turmeric", image: "https://placehold.co/150x150?text=Turmeric", description: "Powerful anti-inflammatory", cost: "$17" }
            ]
        },
        {
            category: "Indoor Plants",
            plants: [
                { name: "Snake Plant", image: "https://placehold.co/150x150?text=Snake+Plant", description: "Air purifying and hardy", cost: "$25" },
                { name: "Pothos", image: "https://placehold.co/150x150?text=Pothos", description: "Easy to grow trailing vine", cost: "$15" },
                { name: "ZZ Plant", image: "https://placehold.co/150x150?text=ZZ+Plant", description: "Drought tolerant and glossy", cost: "$30" },
                { name: "Spider Plant", image: "https://placehold.co/150x150?text=Spider+Plant", description: "Pet safe and air purifying", cost: "$18" },
                { name: "Peace Lily", image: "https://placehold.co/150x150?text=Peace+Lily", description: "Elegant white blooms", cost: "$28" },
                { name: "Rubber Plant", image: "https://placehold.co/150x150?text=Rubber+Plant", description: "Bold, dark green leaves", cost: "$35" }
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
                                <p>Cost: {plant.cost}</p>
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

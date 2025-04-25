import { useState } from "react";

function SpacecraftBuilder() {
    const [formData, setFormData] = useState({
        name: "",
        quantity: 0,
        purpose: ""
    });
    const handleChange = (evt) => {
        setFormData((currData) => {
            return {
                ...currData,
                [evt.target.name]: evt.target.value
            };
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted!");
        // addItem(formData);
        // where do I put addItem function?
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Spacecraft Builder</h2>
            <h3>Add an Item to the Inventory</h3>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                placeholder="name"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
            />
            <label htmlFor="quantity">Quantity</label>
            <input
                type="number"
                placeholder="quantity"
                name="quantity"
                id="quantity"
                value={formData.quantity}
                onChange={handleChange}
            />
            <label htmlFor="purpose">Purpose</label>
            <input
                type="text"
                placeholder="purpose"
                name="purpose"
                id="purpose"
                value={formData.purpose}
                onChange={handleChange}
            />
            <button>Add Item</button>
        </form>
    )

}

export default SpacecraftBuilder;
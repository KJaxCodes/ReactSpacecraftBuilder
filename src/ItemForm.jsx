import { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemSubmit }) {
    const INITIAL_DATA = {
        //formData
        name: "",
        quantity: 0,
        purpose: "",
        agreeToTerms: false
    };

    const [formData, setFormData] = useState(INITIAL_DATA);
    const [errors, setErrors] = useState({});

    const handleChange = (evt) => {

        const { name, value, type, checked } = evt.target; //destructure


        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }));

    };

    //function to check if all required fields have values    
    const validateForm = () => {
        let newFormErrors = {};
        //create an empty object to store validation errors
        if (!formData.name) {
            newFormErrors.name = true;
        }
        if (!formData.quantity) {
            newFormErrors.quantity = true;
        }
        if (!formData.purpose) {
            newFormErrors.purpose = true;
        }
        if (!formData.agreeToTerms) {
            newFormErrors.agreeToTerms = true;
        }

        setErrors(newFormErrors);

        return Object.keys(newFormErrors).length === 0;
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const isFormValid = validateForm();

        //Determine if form is valid, if so, add item
        if (isFormValid) {
            const newItem = {
                ...formData,
                id: uuid(),
            };

            onItemSubmit(newItem);
            setFormData(INITIAL_DATA);
            setErrors({});
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add an Item to the Inventory</h3>
            <div className="Input">
                <input
                    type="text"
                    placeholder="name"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div className="Input">
                <input
                    type="number"
                    placeholder="quantity"
                    name="quantity"
                    id="quantity"
                    min="0"
                    value={formData.quantity}
                    onChange={handleChange}
                />
            </div>
            <div className="Input">
                <input
                    type="text"
                    placeholder="purpose"
                    name="purpose"
                    id="purpose"
                    size="100"
                    value={formData.purpose}
                    onChange={handleChange}
                />
            </div>
            <div className="Input">
                <input type="checkbox"
                    name="agreeToTerms"
                    id="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                />
                <label htmlFor="agreeToTerms">Agree to Terms</label>
            </div>

            <button>Add Item</button>
        </form>
    )


};

export default ItemForm;
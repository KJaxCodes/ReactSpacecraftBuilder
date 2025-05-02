import { v4 as uuid } from "uuid";
//uuid to create unique IDs for each item to use ID for deletion
import { useForm } from "react-hook-form";
//useForm from react hook form library for error validation

function ItemForm({ onItemSubmit }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = (data) => {
        const newItem = {
            ...data,
            quantity: Number(data.quantity),
            // ensures quantity value is a number before being added to the newItem object
            // not really needed here but practice for later when necessary since react-hook-form treats all input values as strings
            id: uuid()
        };

        onItemSubmit(newItem);
        reset(); // clear form after submit
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Add an Item to the Inventory</h3>

            <div className="Input">
                <input
                    {...register("name", { required: "Name is required" })}
                    //react hook form syntax added to each input, required: applies error message
                    type="text"
                    placeholder="name"
                    className={`Input ${errors.name ? "input-error" : ""}`}
                    //add className when an error appears to change styling when error present
                    id="name"
                />
                {errors.name && <p className="error-message">{errors.name.message}</p>}
            </div>

            <div className="Input">
                <input
                    {...register("quantity", {
                        required: "Quantity is required",
                        min: { value: 1, message: "Must be at least 1" }
                        //ensures quantity is at least 1, prevents adding 0 or negative number
                    })}
                    type="number"
                    placeholder="quantity"
                    className={`Input ${errors.quantity ? "input-error" : ""}`}
                    id="quantity"
                />
                {errors.quantity && <p className="error-message">{errors.quantity.message}</p>}
            </div>

            <div className="Input">
                <input
                    {...register("purpose", { required: "Purpose is required" })}
                    type="text"
                    placeholder="purpose"
                    className={`Input ${errors.purpose ? "input-error" : ""}`}
                    id="purpose"
                />
                {errors.purpose && <p className="error-message">{errors.purpose.message}</p>}
            </div>

            <div className="Input">
                <input
                    {...register("agreeToTerms", { required: "You must agree before adding item" })}
                    type="checkbox"
                    className={errors.agreeToTerms ? "input-error" : ""}
                    id="agreeToTerms"
                />
                <label htmlFor="agreeToTerms">Agree to Terms</label>
                {errors.agreeToTerms && <p className="error-message">{errors.agreeToTerms.message}</p>}
            </div>

            <button type="submit">Add Item</button>
        </form>
    );
}

export default ItemForm;
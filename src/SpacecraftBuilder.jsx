import { useState } from "react";

//components
import ItemForm from "./ItemForm";
import InventoryDisplay from "./InventoryDisplay";


function SpacecraftBuilder() {

    //render itemform and inventory display
    //play with useContext to avoid prop drilling

    const [inventory, setInventory] = useState([]);

    function addItem(item) {
        setInventory((prevInventory) => [...prevInventory, item]);
    }

    function deleteItem(id) {
        setInventory((prevInventory) => prevInventory.filter((item) => item.id !== id));
    }

    return (
        <div>
            <h1>Spacecraft Builder</h1>
            <div>
                <ItemForm onItemSubmit={addItem} />
            </div>
            <div>
                <InventoryDisplay inventory={inventory} onDeleteItem={deleteItem} />
            </div>
        </div>
    )

}

export default SpacecraftBuilder;
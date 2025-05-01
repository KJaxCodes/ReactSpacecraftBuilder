import { useState } from "react";

//components
import ItemForm from "./ItemForm";
import InventoryDisplay from "./InventoryDisplay";

function SpacecraftBuilder() {

    //render itemform and inventry display
    //play with useContext to avoid prop drilling

    const [inventory, setInventory] = useState([]);

    function addItem(item) {
        setInventory((prevInventory) => [...prevInventory, item]);
    }

    return (
        <div>
            <h2>Spacecraft Builder</h2>
            <div>
                <ItemForm onItemSubmit={addItem} />
            </div>
            <div>
                <InventoryDisplay inventory={inventory} />
            </div>
        </div>
    )

}

export default SpacecraftBuilder;
import ItemCard from "./ItemCard";
import ItemAction from "./ItemAction";

function InventoryDisplay({ inventory, onDeleteItem }) {
    return (
        <div>
            <h3>Inventory</h3>

            {
                inventory.map((item) => (
                    <div key={item.id}>
                        <div className="Input">
                            <ItemCard
                                name={item.name}
                                quantity={item.quantity}
                                purpose={item.purpose}
                            />
                        </div>
                        <div>
                            <ItemAction
                                itemId={item.id}
                                onDeleteItem={onDeleteItem}
                            />
                        </div>
                    </div>
                ))
            }

        </div>
    );
}

export default InventoryDisplay;
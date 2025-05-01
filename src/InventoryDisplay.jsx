import ItemCard from "./ItemCard";

function InventoryDisplay({ inventory }) {
    return (
        <div>
            <h3>Inventory</h3>

            {
                inventory.map((item) => (
                    <div key={item.id}>
                        <div>
                            <ItemCard
                                name={item.name}
                                quantity={item.quantity}
                                purpose={item.purpose}
                            />
                        </div>
                    </div>
                ))
            }

        </div>
    );
}

export default InventoryDisplay;
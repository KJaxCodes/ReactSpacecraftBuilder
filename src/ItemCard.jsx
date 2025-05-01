function ItemCard({ name, quantity, purpose }) {
    return (
        <>
            <h2>{name}</h2>

            <p>Quantity: {quantity}</p>
            <p>Purpose: {purpose}</p>
        </>
    );
}

export default ItemCard;
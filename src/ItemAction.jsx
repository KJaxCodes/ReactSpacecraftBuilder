function ItemAction({ itemId, onDeleteItem }) {
    return (
        <>
            <button
                className="Delete-Button"
                onClick={() => onDeleteItem(itemId)}
            >
                Delete
            </button>
        </>
    );
}

export default ItemAction;
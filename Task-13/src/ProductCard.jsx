function ProductCard(props) {
    return (
        <div className="product-card">

            <img src={props.image} alt={props.title} />

            <h2>{props.title}</h2>

            <p>{props.description}</p>

        </div>
    );
}

export default ProductCard;
import ProductCard from "./ProductCard";
import "./App.css";

function App() {
    return (
        <div className="container">
        <h1>Collection</h1>

            <div className="product-list">
                <ProductCard
                    image="https://picsum.photos/seed/notebook/400/400"
                    title="Notebook"
                    description="Plain paper, hardcover, built for daily notes."
                />

                <ProductCard
                    image="https://picsum.photos/seed/lamp/400/400"
                    title="Desk Lamp"
                    description="Soft warm light with a simple adjustable arm."
                />

                <ProductCard
                    image="https://picsum.photos/seed/mug/400/400"
                    title="Ceramic Mug"
                    description="Handmade, matte finish, holds 300 ml."
                />
            </div>
        </div>
    );
}

export default App;
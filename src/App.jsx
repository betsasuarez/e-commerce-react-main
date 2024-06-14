import ProductCard from './components/ProductCard.jsx';
import Header from './components/Header.jsx';
import NavBar from './components/NavBar.jsx';

import { PRODUCTS } from './data.js';

import "./App.css";

function App() {
  return (
    <>
      <section id="collection-1602">
        <div className="cs-container">
          <div className="cs-content">
            <Header>New Collection</Header>
            <div className="cs-button-group">
              <NavBar>New Arrival</NavBar>
              <NavBar>Top Rating</NavBar>
              <NavBar>Best Seller</NavBar>
            </div>
          </div>
          <div className="cs-listing-wrapper">
            <div className="cs-listing" data-category="one">
              {PRODUCTS.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
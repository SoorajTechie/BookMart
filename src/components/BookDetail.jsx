import React from 'react';
import './BookDetail.css';

const BookDetail = () => {
    return (
        <div className="product-card">
            <div className="product-image">
                <img 
                    src="https://th.bing.com/th/id/OIP.6rdrYmpgPok8hVr3QY8h6QHaHa?w=183&h=183&c=7&r=0&o=5&dpr=1.4&pid=1.7" 
                    alt="Book cover"  
                />
            </div>
            <div className="product-details">
                <h2>PW NEET 12 Years PYQs English (2024-2013) Chapterwise & Topicwise Past-Previous Year Solved Papers (Paperback, PW)</h2>
                <div className="rating">
                    <span>Rating : 4.3 ★</span>
                </div>
                <div className="price-section">
                    <span className="special-price">₹398</span>
                    <span className="original-price">₹549</span>
                    <span className="discount">27% off</span>
                </div>
                <div className="action-buttons">
                    <button className="add-to-cart">ADD TO CART</button>
                    <button className="buy-now">BUY NOW</button>
                </div>
                <p className="author">Author: sooraj</p>
            </div>
        </div>
    );
}

export default BookDetail;

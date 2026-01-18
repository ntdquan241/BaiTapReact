// src/components/ProductList.jsx
import ProDuctCard from './ProDuctCard'; // Tận dụng lại card ở bài cũ
import './ProductList.css'; // File CSS sắp tạo

function ProductList() {
  // 1. Tạo một danh sách giả gồm 6 sản phẩm
  const products = [1, 2, 3, 4, 5, 6]; 

  return (
    <div className="container">
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Danh sách sản phẩm</h2>
      
      {/* 2. Class này sẽ chịu trách nhiệm chia cột */}
      <div className="product-grid">
        {products.map((item) => (
          // In ra 6 cái thẻ ProductCard
          <ProDuctCard key={item} /> 
        ))}
      </div>
    </div>
  );
}

export default ProductList;
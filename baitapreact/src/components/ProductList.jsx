
import ProDuctCard from './ProDuctCard';
import './ProductList.css'; 

function ProductList() {

  const products = [1, 2, 3, 4, 5, 6]; 

  return (
    <div className="container">
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Danh sách sản phẩm</h2>
      
   
      <div className="product-grid">
        {products.map((item) => (
  
          <ProDuctCard key={item} /> 
        ))}
      </div>
    </div>
  );
}

export default ProductList;
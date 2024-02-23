import { Link, useParams } from 'react-router-dom'
import useFetch from '../utils/useFetch';
import ProductCard from '../components/ProductCard';

const ListingPage = () => {
  const params = useParams();
  const listing = useFetch(params.category !== undefined ? `category/${params.category}` : '');
  
  return (
    <div className='layout-grid' style={{gap: '1em'}}>
      {listing && listing.products.map((item => 
        <Link key={item.id} to={`/product/${item.id}`}><ProductCard product={item}/></Link>
      ))}
    </div>
  )
}

export default ListingPage
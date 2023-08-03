import { useNavigate, useParams } from 'react-router-dom';
import Details from '../../details/cardDetails';
import { useFetch } from '../../hooks/useFetch';
import './style.css';

function ProductDetails() {
    const { productId } = useParams();
    const navigate = useNavigate();
    const urlProductDetail = `https://64a6d02f096b3f0fcc80a680.mockapi.io/product/${productId}`;
    console.log({ productId })

    const { data, loading, error } = useFetch(urlProductDetail, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }


    return (
        <>
            <div className='contentContainer'>
                <button onClick={() => navigate(-1)} className='startButton' >back</button>
                <h2>Detalles del Producto</h2>
            </div>
            {data && (
                <Details
                    id={data.id}
                    image={data.image}
                    name={data.name}
                    category={data.category}
                    description={data.description}
                    price={data.price}
                    stock={data.stock}
                />
            )}
        </>
    );
}

export default ProductDetails;
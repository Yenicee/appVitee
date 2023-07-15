import './style.css';


function ProductDetails() {
    const { productId } = useParams();

    const { data: product, loading, error } = useFetch('https://64a6d02f096b3f0fcc80a680.mockapi.io/product', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return (
        <>
            <div className='contentContainer'>
                <button>Algo</button>
                <h2>Detalle de producto</h2>
            </div>
        </>
    );
}

export default ProductDetails;

import { useLocation } from 'react-router-dom';


const SuccessOrder = () => {
    const location = useLocation();

    const { orderId } = location.state || { orderId: null}
    return (
        <div>
            <h2>Success Order</h2>
            <p>Order Id: {orderId}</p>
        </div>
    )
}

export default SuccessOrder
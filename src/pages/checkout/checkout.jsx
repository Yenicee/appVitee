import Input from '../../input-card/input'
import './style.css'
import { useForm } from '../../hooks/useForm'
import { useContext, useEffect } from 'react'
import { CartContext } from '../../context/cart-context'
import { firebaseServices } from '../services/firebase/firebase'
import { useLocation, useNavigate } from 'react-router-dom'
import { useQuery } from '../../hooks/useQuery'
import CartItem from '../../header/cartItem'



const initialState = {
    name: { value: '', error: '', hasError: true, active: false, name: 'name' },
    surname: { value: '', error: '', hasError: true, active: false, name: 'surname' },
    document: { value: '', error: '', hasError: true, active: false, name: 'document' },
    phone: { value: '', error: '', hasError: true, active: false, name: 'phone' },
    address: { value: '', error: '', hasError: true, active: false, name: 'address' },
    isFormValid: false,
}

function Checkout() {
    const { cart, total, setCart, onSendToCart, onDecreaseCartItem, onRemoveCartItem } = useContext(CartContext);
    const [formState, inputHandler, inputFocus, inputBlur, clearInputs] = useForm(initialState)
    //const { state } = useLocation();
    const navigate = useNavigate();
    let query = useQuery();

    useEffect(() => {
        const cartId = query.get("cartId")

        if (query.get("cartId")) {
            const getCart = async () => {
                const cart = await firebaseServices.getCartById(cartId)
                return cart
            }
            getCart()
                .then((cart) => {
                    setCart(cart.items)
                })
                .catch((error) => {
                    console.log({ error })
                })
        }

    }, [query])


    const onChange = (event) => {
        const { name, value } = event.target
        inputHandler({ name, value })
    }
    const onFocus = (name) => {
        inputFocus({ name, value })
    }
    const onBlur = ({ name }) => {
        inputBlur({ name })
    }

    const onHandlerOrder = async () => {
        const deliverDate = new Date();
        deliverDate.setDate(deliverDate.getDate() + 7);

        const newOrder = {
            buyer: {
                name: formState.name.value,
                surname: formState.surname.value,
                document: formState.document.value,
                phone: formState.phone.value,
                address: formState.address.value,
            },
            createdAt: new Date(),
            items: cart,
            payment: {
                currency: 'USD',
                method: 'CASH',
                type: 'CASH'
            },
            seller: {
                id: 1,
                name: 'Pedrito',
                phone: '123456789',
                email: 'pedrito@taskmanager.com'
            },
            shipping: {
                deliverDate: deliverDate,
                trackingNumber: '123456ff227aa89',
                type: 'DELIVERY'
            },
            total: total
        };

        const orderId = await firebaseServices.createOrder(newOrder);
        await firebaseServices.updateCart(formState.cartId);

        return {
            orderId,
        };
    }

    const onSubmit = async (event) => {
        event.preventDefault()
        onHandlerOrder();
        const { orderId } = await onHandlerOrder();
        clearInputs({ formState })
        navigate('/success-order', { state: { orderId: orderId.id } })
    }

    return (
        <div className='checkoutContainer'>
            <h1>Checkout</h1>
            <div className='checkoutDetails'>
                <form onSubmit={onSubmit} className='checkoutForm'>
                    <div className='checkoutInputGroup'>
                        <Input
                            placeholder='Martin'
                            id='name'
                            name='name'
                            required={true}
                            label='Nombre'
                            onChange={onChange}
                            onFocus={(e) => onFocus({ e, name: 'name' })}
                            onBlur={(e) => onBlur({ e, name: 'name' })}
                            active={formState.name.active}
                            error={formState.name.error}
                            hasError={formState.name.hasError}
                        />
                    </div>

                    <div className='checkoutInputGroup'>
                        <Input
                            placeholder='Ratto'
                            id='surname'
                            name='surname'
                            required={true}
                            label='Apellido'
                            onChange={onChange}
                            onFocus={(e) => onFocus({e, name: 'surname' })}
                            onBlur={(e) => onBlur({e, name: 'surname' })}
                            active={formState.surname.active}
                            error={formState.surname.error}
                            hasError={formState.surname.hasError}
                        />
                    </div>
                    <div className='checkoutInputGroup'>
                        <Input
                            placeholder='San Isidro'
                            id='address'
                            name='address'
                            required={true}
                            label='Direccion'
                            onChange={onChange}
                            onFocus={(e) => onFocus({e, name: 'address' })}
                            onBlur={(e) => onBlur({e, name: 'address' })}
                            active={formState.address.active}
                            error={formState.address.error}
                            hasError={formState.address.hasError}
                        />
                    </div>
                    <div className='checkoutInputGroup'>
                        <Input
                            placeholder='568982565'
                            id='document'
                            name='document'
                            required={true}
                            label='Documento de Identidad'
                            onChange={onChange}
                            onFocus={(e) => onFocus({e, name: 'document' })}
                            onBlur={(e) => onBlur({e, name: 'document' })}
                            active={formState.document.active}
                            error={formState.document.error}
                            hasError={formState.document.hasError}
                        />
                    </div>
                    <div className='checkoutInputGroup'>
                        <Input
                            placeholder='+54 3524158989'
                            id='phone'
                            name='phone'
                            required={true}
                            label='Telefono'
                            onChange={onChange}
                            onFocus={(e) => onFocus({e, name: 'phone' })}
                            onBlur={(e) => onBlur({e, name: 'phone' })}
                            active={formState.phone.active}
                            error={formState.phone.error}
                            hasError={formState.phone.hasError}
                        />
                    </div>
                    <button disabled={!formState.isFormValid} type='submit' className='butttonCheckout'>Checkout</button>
                </form>
                {cart?.length > 0 ? (
                    <div className='checkoutCartContainer'>
                        <h2 className='checkoutTitle'>Carrito detalles</h2>
                        {
                            cart.map((product) => (
                                <CartItem key={product.id}{...product} onSendToCart={onSendToCart} onDecreaseCartItem={onDecreaseCartItem} onRemoveCartItem={onRemoveCartItem} />
                            ))
                        }

                    </div>
                ) : null}
            </div>
        </div>

    )
}

export default Checkout
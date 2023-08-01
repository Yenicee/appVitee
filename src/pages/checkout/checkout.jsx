import Input from '../../input-card/input'
import './style.css'
import { useForm } from '../../hooks/useForm'

const initialState = {
    name: { value: '', error: '', hasError: true, active: false, name: 'name' },
    surname: { value: '', error: '', hasError: true, active: false, name: 'surname' },
    document: { value: '', error: '', hasError: true, active: false, name: 'document' },
    phone: { value: '', error: '', hasError: true, active: false, name: 'phone' },
    address: { value: '', error: '', hasError: true, active: false, name: 'address' },
    isFormValid: false,
}


function Checkout () { 
    const [formState, inputHandler, clearInputs, inputFocus ] = useForm(initialState)
    const onChange = (event) => {
        const { name, value } = event.target
        inputHandler({ name, value })
    }
    const onFocus = (name, active) => {
        inputFocus({name, active})
    }
    const onBlur = () => {
       // setActive(false)
    }

console.log({formState})
    return (
        <div className='checkoutContainer'>
            <h1>Checkout</h1>
            <form className='checkoutForm'>
                <div className='checkoutInputGroup'>
                    <Input
                        placeholder='Martin'
                        id='name'
                        required={true}
                        label='Nombre'
                        onChange={onChange}
                        onFocus= {() => onFocus({name:'name', active: true})}
                        onBlur={onBlur}
                        active={formState.name.active}
                    />
                </div>

                <div className='checkoutInputGroup'>
                    <Input
                        placeholder='Ratto'
                        id='surname'
                        required={true}
                        label='Apellido'
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        active={formState.surname.active}
                    />
                </div>
                <div className='checkoutInputGroup'>
                    <Input
                        placeholder='San Isidro'
                        id='address'
                        required={true}
                        label='Direccion'
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        active={formState.address.active}
                    />
                </div>
                <div className='checkoutInputGroup'>
                    <Input
                        placeholder='568982565'
                        id='document'
                        required={true}
                        label='Documento de Identidad'
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        active={formState.document.active}
                    />
                </div>
                <div className='checkoutInputGroup'>
                    <Input
                        placeholder='+54 3524158989'
                        id='phone'
                        required={true}
                        label='Telefono'
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        active={formState.phone.active}
                    />
                </div>
                <button type='submit' className='butttonCheckout'>Checkout</button>
            </form>

        </div>
    )
}

export default Checkout
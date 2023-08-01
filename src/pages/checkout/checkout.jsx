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
    const [formState, inputHandler, clearInputs, inputFocus, inputBlur ] = useForm(initialState)
    const onChange = (event) => {
        const { name, value } = event.target
        inputHandler({ name, value })
    }
    const onFocus = (name) => {
        inputFocus({name})
    }
    const onBlur = ({name}) => {
       inputBlur({name})
    }
  
    const onSubmit = (event) => {
         event.preventDefaul()
         console.log('formState', formState)
    }

    return (
        <div className='checkoutContainer'>
            <h1>Checkout</h1>
            <form onSubmit={onSubmit} className='checkoutForm'>
                <div className='checkoutInputGroup'>
                    <Input
                        placeholder='Martin'
                        id='name'
                        name='name'
                        required={true}
                        label='Nombre'
                        onChange={onChange}
                        onFocus= {() => onFocus({name:'name'})}
                        onBlur={() => onBlur({name:'name'})}
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
                        onFocus={() => onFocus({name:'surname'})}
                        onBlur={() => onBlur({name:'surname'})}
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
                        onFocus={() => onFocus({name:'address'})}
                        onBlur={() => onBlur({name:'address'})}
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
                        onFocus={() => onFocus({name:'document'})}
                        onBlur={() => onBlur({name:'document'})}
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
                        onFocus={() => onFocus({name:'phone'})}
                        onBlur={() => onBlur({name:'phone'})}
                        active={formState.phone.active}
                        error={formState.phone.error}
                        hasError={formState.phone.hasError}
                    />
                </div>
                <button disabled={!formState.isFormValid} type='submit' className='butttonCheckout'>Checkout</button>
            </form>

        </div>
    )
}

export default Checkout
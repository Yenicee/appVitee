import { createContext, useState, useContext } from "react";

const initialState = {
  product: [],
  categories: [],
  cart: [],
  setCart: () => { },
  onSendToCart: () => { },
  onDecreaseCartItem: () => { },
  onRemoveCartItem: () => { },
  getItemQuantity: () => { },
  sumTotalCart: 0,
};

export const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState([]);

  const onSendToCart = (id) => {
    const item = product.find((product) => product.id === id);
    if (!item) {
      // Si el producto no se encuentra, puedes manejar el error aquí si es necesario.
      console.error('El producto no se encontró.');
      return;
    }

    if (cart?.find((product) => product.id === id)?.quantity === Number(item.stock)) {
      // Si la cantidad en el carrito es igual al stock del producto, no agregamos más al carrito.
      return;
    }

    if (cart?.length === 0) {
      // Si el carrito está vacío, agregamos el producto con cantidad 1.
      setCart([{ ...item, quantity: 1 }]);
    } else if (!cart?.find((product) => product.id === id)) {
      // Si el producto no está en el carrito, lo agregamos con cantidad 1.
      setCart([...cart, { ...item, quantity: 1 }]);
    } else {
      // Si el producto ya está en el carrito, actualizamos su cantidad.
      setCart((currentCart) =>
        currentCart.map((product) =>
          product.id === id ? { ...product, quantity: product.quantity + 1 } : product
        )
      );
    }
  };


  const onDecreaseCartItem = (id) => {
    const item = cart.find((product) => product.id === id); // Use the 'cart' array instead of 'product' array
    if (!item) {
      console.error('El producto no se encontró en el carrito.'); // Inform if the product is not found in the cart
      return;
    }

    if (item.quantity === 1) {
      // If the quantity is already 1, don't decrease it further.
      return;
    }

    // Decrease the quantity by 1 for the specific product in the cart
    setCart((currentCart) =>
      currentCart.map((product) =>
        product.id === id ? { ...product, quantity: product.quantity - 1 } : product
      )
    );
  };


  const onRemoveCartItem = (id) => {
    setCart((currentCart) => {
      return currentCart.filter((product) => product.id === id)
    })
  }

  const sumTotalCart = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

  const getItemQuantity = (id) => {
    return cart.find((product) => product.id === id)?.quantity || 0;
  }

  const contextValue = {
    cart,
    setCart,
    onSendToCart,
    onDecreaseCartItem,
    onRemoveCartItem,
    sumTotalCart,
    product,
    categories,
    setCategories,
    setProduct,
    // total,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

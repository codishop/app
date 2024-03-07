import CartDrawerComponent from '../../components/ui/cart-drawer.component';
import ProductCard from '../../components/ui/product-card.component';
import BannerComponent from '../../components/ui/banner.component';
import useLocalState from '../../../../hooks/local-state.hook';
import { Flex } from '@chakra-ui/react';
import React from 'react';
import CartNotificationComponent from '../../components/ui/cart-notification.component';
import ProductService from '../../../../services/http/product.service';
import Layout from '../../components/layout';


const HomePage = () => {
  const [notificationVisible, setNotificationVisible] = React.useState(false)
  const [notificationItem, setNotificationItem] = React.useState()
  const [cartItems, setCartItems] = useLocalState('cart', []);
  const [cartVisible, setCartVisible] = React.useState(false)
  const [products, setProducts] = React.useState()

  React.useEffect(() => {
    loadProducts();
  }, [])

  const loadProducts = async () => {
    await ProductService.find().then(res => setProducts(res)).catch(err => console.log(err))
  }

  const addItemToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
    setNotificationVisible(true);
    setNotificationItem(item)
    setTimeout(() => {
      setNotificationVisible(false);
    }, 3000)
  };

  const handleOpenCart = () => {
    setNotificationVisible(false);
    setCartVisible(true)
  }

  return (
    <Layout onCartToggle={handleOpenCart}>
      <CartNotificationComponent isOpen={notificationVisible} onClose={() => { setNotificationVisible(false) }} onOpenCart={handleOpenCart} item={notificationItem} />
      <CartDrawerComponent isOpen={cartVisible} onClose={() => { setCartVisible(false) }} items={cartItems} setItems={setCartItems} />
      <BannerComponent />
      <Flex flex="1" textAlign="center" justifyContent="center" alignItems="center" flexDirection="column" py="12">
        <Flex flexWrap="wrap" gap={12}>
          {products?.map((product) => (
            <ProductCard key={product.id} onAddCart={addItemToCart} {...product} />
          ))}
        </Flex>
      </Flex>
    </Layout>
  );
};

export default HomePage;

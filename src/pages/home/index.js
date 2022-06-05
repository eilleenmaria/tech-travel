import React, { useEffect, useState, useContext } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import CartContext from '../../context/cart';
import { Container, List, Unit } from './style';
import api from '../../services/api';

function Home() {
  const [travelList, setTravelList] = useState([]);
  const { state, setState } = useContext(CartContext);

  useEffect(() => {
    async function getTravelList() {
      const { data } = await api.get('/travels');
      setTravelList(data);
    }
    getTravelList();
  }, []);
  function handleAddToCart(travel) {
    const copyCart = [...state.cart];
    copyCart.push(travel);

    setState({
      cart: copyCart,
    });
  }

  return (
    <Container>
      <List>
        {travelList.map((el) => (
          // eslint-disable-next-line react/jsx-key
          <Unit>
            <img src={el.photo} alt="Travel" />
            <p>{el.title}</p>
            <strong>{el.price}</strong>

            <button type="button" onClick={() => handleAddToCart(el)}>
              <div>
                <MdAddShoppingCart size={16} color="#fff" />
              </div>
              <span>Agregar al carrito</span>
            </button>
          </Unit>
        ))}
      </List>
    </Container>
  );
}
export default Home;

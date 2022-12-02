/* eslint-disable react/jsx-key */
import React, { useContext } from 'react';
import { MdDelete } from 'react-icons/md';
import CartContext from '../../context/cart';
import {
  Container,
  ContainerList,
  TravelItem,
  Info,
  Quantity,
  Subtotal,
  TotalTravel,
} from './style';

function Cart() {
  const { state, setState } = useContext(CartContext);
  const totalTravel = state.cart.reduce(
    (previousValue, travel) => previousValue + travel.quantity * travel.price,
    0,
  );
  function deleteTravel(travel) {
    const copyCart = [...state.cart];
    console.log(copyCart);
    const travelId = copyCart.findIndex((el) => el.id === travel.id);
    if (!travelId) {
      copyCart.splice(travelId, 1);
    }
    setState({
      cart: copyCart,
    });
  }
  return (
    <Container>
      <ContainerList>
        {state.cart.map((el) => (
          <TravelItem>
            <img src={el.photo} alt={el.title} />
            <Info>
              <p>{el.title}</p>
              <strong>{el.price}</strong>
            </Info>
            <Quantity readOnly type="number" value={el.quantity} />
            <Subtotal>
              <p id="subtotal">{el.price * el.quantity}</p>
              <button type="button" onClick={() => deleteTravel(el)}>
                <MdDelete size={24} color="#0676d9" />
              </button>
            </Subtotal>
          </TravelItem>
        ))}
        <TotalTravel>
          <p>Total</p>
          <strong>{totalTravel}</strong>
        </TotalTravel>
      </ContainerList>
    </Container>
  );
}
export default Cart;

import { useState } from 'react'
import CryptoBuy from './cryptoBuy';
import Orders from './orders';
import Context from './context';
import './App.css'


function App() {
  const [orders, setOrders] = useState([
    { id: '471', comment: 'First Order', XRP: { price: 30, quantity: 1 } },
  ]);

  const addOrder = order =>
    setOrders([...orders, { id: Math.floor(Math.random() * 1000), ...order }]);

  return (
    <Context.Provider value={{ addOrder }}>
      {/* <CryptoBuy />*/}
      <CryptoBuy />
      <Orders /> 
    </Context.Provider>
  );
}

export default App

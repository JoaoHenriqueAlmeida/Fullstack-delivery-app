import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import SaleCard from '../components/SaleCard';
// import { requestSales } from '../utils/requests';
import { MyContext } from '../context/Provider';

const array = [
  {
    id: 1,
    status: 'pendente',
    date: '24/04/2022',
    price: 40.00,
  },
];

function Orders() {
  const { username } = useContext(MyContext);
  // const [sales, setSales] = useState([]);

  /*   useEffect(() => {
    const fetchSales = async () => {
      const results = await requestSales(id, token);
      setSales(results);
    };
    fetchSales();
  }, [token]); */

  return (
    <div>
      <Navbar username={ username } />
      <h1>Pedidos</h1>
      { array.map((e) => SaleCard(e)) }
    </div>
  );
}

export default Orders;

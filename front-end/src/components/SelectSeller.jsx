import React from 'react';
import PropTypes from 'prop-types';

function SelectSeller(props) {
  const { setSellerId } = props;
  /* const [sellers, setSellers] = useState([]);

  useEffect(() => {
    const fetchSellers = async () => {
      const results = await requestSellers();
      setSellers(results);
    };
    fetchSellers();
  }, []); */

  return (
    <select
      data-testid="customer_checkout__select-seller"
      onChange={ ({ target }) => setSellerId(target.value) }
    >
      <option value="2">Fulana Pereira</option>
      {/* { sellers.map((e) => (
        <option
          key={ e.id }
          value={ e.id }
        >
          { e.name }
        </option>)) } */}
    </select>
  );
}

SelectSeller.propTypes = {
  setSellerId: PropTypes.func.isRequired,
};

export default SelectSeller;

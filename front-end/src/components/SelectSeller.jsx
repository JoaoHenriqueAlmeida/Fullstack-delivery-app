import React from 'react';
import PropTypes from 'prop-types';

function SelectSeller(props) {
  const { setSeller } = props;
  /*   const [sellers, setSellers] = useState([]);

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
      onChange={ ({ target }) => setSeller(target.value) }
    >
      <option value="Fulana Pereira">Fulana Pereira</option>
      {/*       { sellers.map((e) => (
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
  setSeller: PropTypes.func.isRequired,
};

export default SelectSeller;

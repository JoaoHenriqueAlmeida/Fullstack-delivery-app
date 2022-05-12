import React from 'react';
import PropTypes from 'prop-types';
import SelectSeller from './SelectSeller';

function DeliveryDetails(props) {
  const { setAddress, setAddressNumber, setSeller } = props;

  return (
    <table>
      <thead>
        <tr>
          <th>P.Vendedora Responsável:</th>
          <th>Endereço</th>
          <th>Número</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <SelectSeller setSeller={ setSeller } />
          </td>
          <td>
            <input
              data-testid="customer_checkout__input-address"
              type="text"
              className="input-endereco"
              placeholder="Logradouro"
              onChange={ ({ target }) => setAddress(target.value) }
            />
          </td>
          <td>
            <input
              data-testid="customer_checkout__input-addressNumber"
              type="text"
              placeholder="Número"
              onChange={ ({ target }) => setAddressNumber(target.value) }
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

DeliveryDetails.propTypes = {
  setAddress: PropTypes.func,
  setAddressNumber: PropTypes.func,
  setSeller: PropTypes.func,
}.isRequired;

export default DeliveryDetails;

import React from 'react';
import SelectSeller from './SelectSeller';

function DeliveryDetails() {
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
            <SelectSeller />
          </td>
          <td>
            <input
              data-testid="customer_checkout__input-address"
              type="text"
              placeholder="Logradouro"
            />
          </td>
          <td>
            <input
              data-testid="customer_checkout__input-addressNumber"
              type="text"
              placeholder="Número"
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default DeliveryDetails;

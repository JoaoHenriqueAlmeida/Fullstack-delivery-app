import React from 'react';

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
          <td><input type="text" placeholder="Vendedor" /></td>
          <td><input type="text" placeholder="Logradouro" /></td>
          <td><input type="text" placeholder="Número" /></td>
        </tr>
      </tbody>
    </table>
  );
}

export default DeliveryDetails;

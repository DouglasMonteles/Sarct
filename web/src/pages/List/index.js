import React from 'react';

import { DispenserList, Filter } from './styles';

function List() {
  return (
    <>
      <Filter>Filtrar por:</Filter>
      <DispenserList>
        <li>
          <div>
            <h4>B12</h4>
            <p>
              Estado atual: <span>CHEIO</span>
            </p>
          </div>

          <div>
            <p>Localização: </p>
            <strong>No lado esquerdo do Anfiteatro 16</strong>
          </div>

          <button type="button">Confirmar Reabastecimento</button>
        </li>

        <li>
          <div>
            <h4>B12</h4>
            <p>
              Estado atual: <span>CHEIO</span>
            </p>
          </div>

          <div>
            <p>Localização: </p>
            <strong>No lado esquerdo do Anfiteatro 16</strong>
          </div>

          <button type="button">Confirmar Reabastecimento</button>
        </li>

        <li>
          <div>
            <h4>B12</h4>
            <p>
              Estado atual: <span>CHEIO</span>
            </p>
          </div>

          <div>
            <p>Localização: </p>
            <strong>No lado esquerdo do Anfiteatro 16</strong>
          </div>

          <button type="button">Confirmar Reabastecimento</button>
        </li>

        <li>
          <div>
            <h4>B12</h4>
            <p>
              Estado atual: <span style={{ color: '#EA3E3D' }}>VAZIO</span>
            </p>
          </div>

          <div>
            <p>Localização: </p>
            <strong>No lado esquerdo do Anfiteatro 16</strong>
          </div>

          <button type="button">Confirmar Reabastecimento</button>
        </li>
      </DispenserList>
    </>
  );
}

export default List;

import { IssueClosedIcon } from '@primer/octicons-react'
import { useSelector } from 'react-redux';
import { RootState } from '../../store/Store';
import { formatToPesos } from '../../utils/CurrencyFormatter';
import './SuccessSalesData.page.scss'

export const SuccessSalesData = () => {
  const { salesData } = useSelector((state: RootState) => state);
  const { address, email, floor, elevator, fullName, parking, zones, value } = salesData;

  return (
    <div className='px-3 mt-3'>
      <div className="row">
        <div className="col success-icon-container">
          <span className="icon"><IssueClosedIcon size={50} /></span>
        </div>
      </div>

      <div className="row">
        <div className="col success-icon-container">
          <h2>Felicidades!</h2>
        </div>
      </div>

      <div className="row">
        <div className="col success-icon-container px-1 text-center">
          <p>Validaremos la información de tu inmueble, lo más pronto posible uno de nuestros asesores se pondra en contacto contigo.</p>
        </div>
      </div>

      <div className="row">
        <div className="col success-icon-container px-1">
          <ul>
            {fullName && <li><strong>Nombre: </strong> {fullName}</li>}
            {email && <li><strong>Email: </strong> {email}</li>}
            {address && <li><strong>Dirección: </strong> {address}</li>}
            {floor && <li><strong>Piso: </strong> {floor}</li>}

            <li><strong>Zonas sociales: </strong> {zones.have ? 'Si' : 'No'}
              {zones.have &&
                <ul>
                  <li><strong>Zona BBQ: </strong>{zones.socialZones.bbq ? 'Si' : 'No'}</li>
                  <li><strong>Salon comunal: </strong>{zones.socialZones.living ? 'Si' : 'No'}</li>
                  <li><strong>Parque </strong>{zones.socialZones.park ? 'Si' : 'No'}</li>
                </ul>
              }
            </li>

            <li><strong>Parqueadero: </strong> {parking.have ? 'Si' : 'No'}
              {parking.have &&
                <ul>
                  <li><strong>Tipo de parqueadero:</strong> {parking.type}</li>
                </ul>
              }
            </li>

            <li><><strong>Valor de venta: </strong> {formatToPesos(value ?? 0)}{value === 0 && <small> (Sin definir)</small>}</></li>
            <li><strong>Ascensor: </strong>{elevator ? 'Si' : 'No'}</li>
          </ul>
        </div>
      </div>
      <div className="row mt-2 mb-2">
        <div className="col">
          <button type="button" className="btn btn-fill btn-full-width">Terminar</button>
        </div>
      </div>
    </div>
  )
}

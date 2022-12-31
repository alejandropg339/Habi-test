import { XIcon } from '@primer/octicons-react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { ModalPropsInterface } from '../../interfaces/ModalProps.interface';
import { setStateModal } from '../../slices/ModalSlice';
import { formatToPesos } from '../../utils/CurrencyFormatter';
import './Modal.component.scss'

export const Modal = (props: ModalPropsInterface) => {
    const dispatch = useDispatch();
    const closeModal = () => {
        dispatch(setStateModal({open:false}))
    }

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={closeModal}
                    >
                        <span><XIcon size={24} /></span>
                    </button>
                </div>
                <div className="title">
                    <h3>{props.title}</h3>
                </div>
                <div className="body">
                    <ul>
                        {props.content.fullName &&<li><strong>Nombre: </strong> {props.content.fullName}</li>}
                        {props.content.email &&<li><strong>Email: </strong> {props.content.email}</li>}
                        {props.content.address &&<li><strong>Dirección: </strong> {props.content.address}</li>}
                        {props.content.floor &&<li><strong>Piso: </strong> {props.content.floor}</li>}
                        
                        <li><strong>Zonas sociales: </strong> {props.content.zones.have ? 'Si' : 'No'}
                            {props.content.zones.have &&
                                <ul>
                                    <li><strong>Zona BBQ: </strong>{props.content.zones.socialZones.bbq ? 'Si' : 'No'}</li>
                                    <li><strong>Salon comunal: </strong>{props.content.zones.socialZones.living ? 'Si' : 'No'}</li>
                                    <li><strong>Parque </strong>{props.content.zones.socialZones.park ? 'Si' : 'No'}</li>
                                </ul>
                            }
                        </li>
                        
                        <li><strong>Parqueadero: </strong> {props.content.parking.have ? 'Si' : 'No'}
                        {props.content.parking.have && 
                        <ul>
                            <li><strong>Tipo de parqueadero:</strong> {props.content.parking.type}</li>
                        </ul>
                        }
                        </li>
                        
                        <li><><strong>Valor de venta: </strong> {formatToPesos(props.content.value ?? 0)}{props.content.value === 0 && <small> (Sin definir)</small>}</></li>
                        <li><strong>Ascensor: </strong>{props.content.elevator ? 'Si' : 'No'}</li>
                    </ul>
                </div>
                <div className="footer">
                    <button
                        onClick={closeModal}
                        className="btn btn-fill btn-full-width"
                    >
                        {props.closeButtonLabel}
                    </button>
                </div>
            </div>
        </div>
    )
}

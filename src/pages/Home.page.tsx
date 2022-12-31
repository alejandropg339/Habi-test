import { BookIcon, UploadIcon } from '@primer/octicons-react';
import { Form, Formik } from 'formik';
import { useRef, useState } from 'react'
import CurrencyInput from 'react-currency-input-field';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from '../components/card/Card.component';
import { CustomCheckbox } from '../components/formInputs/CustomCheckbox.component';
import { CustomInput } from '../components/formInputs/CustomInput.component';
import { CustomSelect } from '../components/formInputs/CustomSelect.component';
import { SalesFormInterface } from '../interfaces/SalesForm.inteface';
import { homeLabels } from '../labels/Home.labels';
import { decrementStep, incrementStep, setSalesProperty } from '../slices/SalesDataSlice';
import { RootState } from '../sotre/Store';
import { useNavigate } from 'react-router-dom';
import { homeFormValidations } from '../utils/HomeFormValidations';
import { Modal } from '../components/modal/Modal.component';
import { setStateModal } from '../slices/ModalSlice';
import { transformToNumber } from '../utils/CurrencyFormatter';

export const Home = () => {
    const formikRef = useRef<any>();
    const dispatch = useDispatch();
    const { salesData, modal } = useSelector((state: RootState) => state);
    const { step, ...rest } = salesData;

    const onSubmit = (value: SalesFormInterface) => {
        console.log('values: ', value);
        dispatch(setSalesProperty({ name: 'fullName', value: value.fullName }));
    }

    const prevStep = () => {
        dispatch(decrementStep());
    }

    const keepData = (name: string, value: any) => {
        if (name !== 'picture') {
            dispatch(setSalesProperty({ name, value }));
        } else {
            localStorage.setItem('picture', value);
        }
        dispatch(incrementStep());
    }

    



    return (
        <>
        {modal.open && <Modal title="Verifca la información" closeButtonLabel="Continuar" content={rest}/>}
            <Formik initialValues={rest} onSubmit={onSubmit} validateOnMount={true} innerRef={formikRef} validationSchema={homeFormValidations} >
                {(formikProps) => (
                    <Form>
                        <pre>{JSON.stringify(formikProps, null, 2)}</pre>
                        <div className="mt-3">
                            <Card title={homeLabels.stepOneTitle} description={homeLabels.stepOneDescription} completed={!formikProps.errors.fullName} active={step === 0 ? true : false}>
                                <>
                                    <CustomInput
                                        type="text"
                                        placeholder={homeLabels.nameInput}
                                        className="text-input"
                                        name="fullName"
                                        value={formikProps.values.fullName}
                                        onChange={formikProps.handleChange}
                                    />

                                    <div className='form-buttons initial mt-1 mt-1'>
                                        <button className="btn btn-fill mb-2 card-btn" type="button" disabled={!!formikProps.errors.fullName} onClick={() => { keepData('fullName', formikProps.values.fullName) }}>Siguiente</button>
                                    </div>
                                </>
                            </Card>

                            {/* TODO: PASS SUMMARY TO A COMPONENT */}

                            {!modal.open && <div className="container-summary">
                                <button type="button" className="summary-btn" onClick={()=>{dispatch(setStateModal({open: true}))}}><span><BookIcon size={24}/></span></button>
                            </div>}

                            <Card title={homeLabels.stepTwoTitle} description={homeLabels.stepTwoDescription} completed={!formikProps.errors.email} active={step === 1 ? true : false}>
                                <>
                                    <CustomInput
                                        type="text"
                                        placeholder={homeLabels.emailInput}
                                        className="text-input"
                                        name="email"
                                        value={formikProps.values.email}
                                        onChange={formikProps.handleChange}
                                    />

                                    <div className='form-buttons mt-1'>
                                        <button type="button" className="btn btn-outline mb-2" onClick={prevStep}>Atras</button>
                                        <button type="button" className="btn btn-fill mb-2" disabled={!!formikProps.errors.email} onClick={() => { keepData('email', formikProps.values.email) }}>Siguiente</button>
                                    </div>
                                </>
                            </Card>
                            <Card title={homeLabels.stepThreeTitle} description={homeLabels.stepThreeDescription} completed={!formikProps.errors.address} active={step === 2 ? true : false}>
                                <>
                                    <CustomInput
                                        type="text"
                                        placeholder={homeLabels.addressInput}
                                        className="text-input"
                                        name="address"
                                        value={formikProps.values.address}
                                        onChange={formikProps.handleChange}
                                    />

                                    <div className='form-buttons mt-1'>
                                        <button type="button" className="btn btn-outline mb-2" onClick={prevStep}>Atras</button>
                                        <button type="button" className="btn btn-fill mb-2" disabled={!!formikProps.errors.address} onClick={() => { keepData('address', formikProps.values.address) }}>Siguiente</button>
                                    </div>
                                </>
                            </Card>
                            <Card title={homeLabels.stepFourTitle} description={homeLabels.stepFourDescription} active={step === 3 ? true : false} completed={!formikProps.errors.floor}>
                                <>
                                    <CustomInput
                                        type="number"
                                        placeholder={homeLabels.floorInput}
                                        className="text-input"
                                        name="floor"
                                        value={formikProps.values.floor}
                                        onChange={formikProps.handleChange}
                                    />

                                    <div className='form-buttons mt-1'>
                                        <button type="button" className="btn btn-outline mb-2" onClick={prevStep}>Atras</button>
                                        <button type="button" className="btn btn-fill mb-2" disabled={!!formikProps.errors.floor} onClick={() => { keepData('floor', formikProps.values.floor) }}>Siguiente</button>
                                    </div>
                                </>
                            </Card>
                            <Card title={homeLabels.stepFiveTitle} description={''} active={step === 4 ? true : false} completed={!formikProps.errors.zones}>
                                <>
                                    <CustomCheckbox
                                        label={homeLabels.stepFiveDescription}
                                        id={'zones'}
                                        className="checkbox-input"
                                        name="zones.have"
                                        onChange={formikProps.handleChange}
                                    />

                                    {formikProps.values.zones.have &&
                                        <>
                                            <div>
                                                <p>¿Cuales?</p>
                                            </div>

                                            <div className="row">
                                                <div className="col">
                                                    <CustomCheckbox
                                                        label={'🥩 Zona BBQ'}
                                                        id={'zones'}
                                                        className="checkbox-input"
                                                        name="zones.socialZones.bbq"
                                                        onChange={formikProps.handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col">
                                                    <CustomCheckbox
                                                        label={'💃 Salón comunal'}
                                                        id={'zones'}
                                                        className="checkbox-input"
                                                        name="zones.socialZones.living"
                                                        onChange={formikProps.handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col">
                                                    <CustomCheckbox
                                                        label={'🏀 Parque de juegos'}
                                                        id={'zones'}
                                                        className="checkbox-input"
                                                        name="zones.socialZones.park"
                                                        onChange={formikProps.handleChange}
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    }

                                    <div className='form-buttons mt-1'>
                                        <button type="button" className="btn btn-outline mb-2" onClick={prevStep}>Atras</button>
                                        <button type="button" className="btn btn-fill mb-2" onClick={() => { keepData('zones', formikProps.values.zones) }}>Siguiente</button>
                                    </div>
                                </>
                            </Card>
                            <Card title={homeLabels.stepSixTitle} description={''} active={step === 5 ? true : false} completed={!formikProps.errors.parking}>
                                <>


                                    {/* //TODO: CHANGE IDS */}
                                    <CustomCheckbox
                                        label={homeLabels.stepSixDescription}
                                        id={'zones'}
                                        className="checkbox-input"
                                        name="parking.have"
                                        onChange={formikProps.handleChange}
                                    />
                                    {formikProps.values.parking.have &&
                                        <>
                                            <div>
                                                <p>¿De que tipo?</p>
                                            </div>

                                            <CustomSelect name="parking.type" className="select-input">
                                                <option value="Cubierto">Cubierto</option>
                                                <option value="Descubierto">Descubierto</option>
                                            </CustomSelect>
                                        </>
                                    }

                                    <div className='form-buttons mt-1'>
                                        <button type="button" className="btn btn-outline mb-2" onClick={prevStep}>Atras</button>
                                        <button type="button" className="btn btn-fill mb-2" onClick={() => { keepData('parking', formikProps.values.parking) }}>Siguiente</button>
                                    </div>
                                </>
                            </Card>
                            <Card title={homeLabels.stepSevenTitle} description={homeLabels.stepSevenDescription} active={step === 6 ? true : false} completed={!formikProps.errors.value}>
                                <>
                                    <CurrencyInput
                                        prefix='$'
                                        decimalSeparator=','
                                        groupSeparator='.'
                                        type="numeric"
                                        name="value"
                                        allowDecimals={false}
                                        placeholder={homeLabels.valueInput}
                                        onChange={(e) => { formikProps.setFieldValue('value', transformToNumber(e))}}
                                        className="text-input"
                                    />

                                    <div className='form-buttons mt-1'>
                                        <button type="button" className="btn btn-outline mb-2" onClick={prevStep}>Atras</button>
                                        <button type="button" className="btn btn-fill mb-2" onClick={() => { keepData('value', formikProps.values.value) }} disabled={!!formikProps.errors.value}>Siguiente</button>
                                    </div>
                                </>
                            </Card>
                            <Card title={homeLabels.stepEightTitle} description={homeLabels.stepEightDescription} active={step === 7 ? true : false} completed={!formikProps.errors.picture}>
                                <>
                                    <div className='file-input'>
                                        <input
                                            type="file" id={"pic"}
                                            accept=".jpg, .jpeg, .png"
                                            className="file" onChange={(event: any) => {
                                                formikProps.setFieldValue("picture", event.currentTarget.files[0] ?? {});
                                            }}
                                        />

                                        <label htmlFor={"pic"} className="py-1">
                                            <span><UploadIcon size={24} /></span> &nbsp; {homeLabels.stepEightDescription}
                                        </label>
                                    </div>

                                    {formikProps.values.picture &&
                                        <div className="img-container">
                                            <img className="preview-img mt-2" src={URL.createObjectURL(formikProps.values.picture)} alt="UploadImage" />
                                        </div>
                                    }

                                    <div className='form-buttons mt-1'>
                                        <button type="button" className="btn btn-outline mb-2" onClick={prevStep}>Atras</button>
                                        <button type="button" className="btn btn-fill mb-2" onClick={() => { keepData('picture', formikProps.values.picture) }}>Siguiente</button>
                                    </div>
                                </>
                            </Card>
                            <div className="mb-3">
                            <Card title={homeLabels.stepNineTitle} description={''} active={step === 8 ? true : false} completed={!formikProps.errors.elevator}>
                                <>
                                    <CustomCheckbox
                                        label={homeLabels.stepNineDescription}
                                        id={'zones'}
                                        className="checkbox-input"
                                        name="elevator"
                                        onChange={formikProps.handleChange}
                                    />

                                    <div className='form-buttons mt-1'>
                                        <button type="button" className="btn btn-outline mb-2" onClick={prevStep}>Atras</button>
                                        <button className="btn btn-fill mb-2" type='submit' disabled={!formikProps.isValid}>Terminar</button>
                                    </div>
                                </>
                            </Card>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}

import { Form, Formik } from 'formik'
import './App.scss'
import { Card } from './components/card/Card.component'
import { CustomCheckbox } from './components/formInputs/CustomCheckbox.component'
import { CustomInput } from './components/formInputs/CustomInput.component'
import { CustomSelect } from './components/formInputs/CustomSelect.component'
import { HeroComponent } from './components/hero/Hero.component'
import { Steps } from './components/steps/Setps.component'
import { SalesFormInterface } from './interfaces/SalesForm.inteface'
import { homeLabels } from './labels/Home.labels'
import { homeFormValidations } from './utils/HomeFormValidations';
import CurrencyInput from 'react-currency-input-field';
import { CustomFileInput } from './components/formInputs/CustomFileInput.component'
import { useRef } from 'react'
import { UploadIcon } from '@primer/octicons-react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementStep, initialStateSales, setSalesProperty } from './slices/SalesDataSlice'
import { RootState } from './sotre/Store'

function App() {
  const formikRef = useRef<any>();
  const dispatch = useDispatch();
  const {salesData} =  useSelector( (state: RootState) => state);
  const {step, ...rest} = salesData;

  const onSubmit = (value: SalesFormInterface) => {
    console.log('values: ', value);
    dispatch(setSalesProperty({name: 'fullName', value: value.fullName}));
    dispatch(incrementStep());
  }

  return (
    <>
      <HeroComponent />

      <div className="row">
        <div className="col text-center" id="start-sale">
          <h2>Te ayudamos a vender tu inmueble!</h2>
        </div>
      </div>

      <Steps totalSteps={9} activeStep={step} />
      {/* validationSchema={homeFormValidations} */}
      <Formik initialValues={rest} onSubmit={onSubmit} validateOnMount={true} innerRef={formikRef}>
        {(formikProps) => (
          <Form>
            <div className="mt-3">
              <Card title={homeLabels.stepOneTitle} description={homeLabels.stepOneDescription}>
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
                    <button className="btn btn-fill mb-2">Siguiente</button>
                  </div>
                </>
              </Card>
              <Card title={homeLabels.stepTwoTitle} description={homeLabels.stepTwoDescription}>
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
                    <button className="btn btn-outline mb-2">Atras</button>
                    <button className="btn btn-fill mb-2">Siguiente</button>
                  </div>
                </>
              </Card>
              <Card title={homeLabels.stepThreeTitle} description={homeLabels.stepThreeDescription}>
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
                    <button className="btn btn-outline mb-2">Atras</button>
                    <button className="btn btn-fill mb-2">Siguiente</button>
                  </div>
                </>
              </Card>
              <Card title={homeLabels.stepFourTitle} description={homeLabels.stepFourDescription}>
                <>
                  <CustomInput
                    type="text"
                    placeholder={homeLabels.floorInput}
                    className="text-input"
                    name="floor"
                    value={formikProps.values.floor}
                    onChange={formikProps.handleChange}
                  />

                  <div className='form-buttons mt-1'>
                    <button className="btn btn-outline mb-2">Atras</button>
                    <button className="btn btn-fill mb-2">Siguiente</button>
                  </div>
                </>
              </Card>
              <Card title={homeLabels.stepFiveTitle} description={''}>
                <>
                  <CustomCheckbox
                    label={homeLabels.stepFiveDescription}
                    id={'zones'}
                    className="checkbox-input"
                    name="zones.have"
                    onChange={formikProps.handleChange}
                  />

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

                  <div className='form-buttons mt-1'>
                    <button className="btn btn-outline mb-2">Atras</button>
                    <button className="btn btn-fill mb-2">Siguiente</button>
                  </div>
                </>
              </Card>
              <Card title={homeLabels.stepSixTitle} description={''}>
                <>


                  {/* //TODO: CHANGE IDS */}
                  <CustomCheckbox
                    label={homeLabels.stepSixDescription}
                    id={'zones'}
                    className="checkbox-input"
                    name="parking.have"
                    onChange={formikProps.handleChange}
                  />

                  <div>
                    <p>¿De que tipo?</p>
                  </div>

                  <CustomSelect name="parking.type" className="select-input">
                    <option value="covered">Cubierto</option>
                    <option value="uncovered">Descubierto</option>
                  </CustomSelect>

                  <div className='form-buttons mt-1'>
                    <button className="btn btn-outline mb-2">Atras</button>
                    <button className="btn btn-fill mb-2">Siguiente</button>
                  </div>
                </>
              </Card>
              <Card title={homeLabels.stepSevenTitle} description={homeLabels.stepSevenDescription}>
                <>
                  <CurrencyInput
                    prefix='$'
                    decimalSeparator=','
                    groupSeparator='.'
                    type="numeric"
                    name="value"
                    allowDecimals={false}
                    placeholder={homeLabels.valueInput}
                    onChange={formikProps.handleChange}
                    className="text-input"
                  />

                  <div className='form-buttons mt-1'>
                    <button className="btn btn-outline mb-2">Atras</button>
                    <button className="btn btn-fill mb-2">Siguiente</button>
                  </div>
                </>
              </Card>
              <Card title={homeLabels.stepEightTitle} description={homeLabels.stepEightDescription}>
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
                    <button className="btn btn-outline mb-2">Atras</button>
                    <button className="btn btn-fill mb-2">Siguiente</button>
                  </div>
                </>
              </Card>
              <Card title={homeLabels.stepNineTitle} description={''}>
                <>
                  <CustomCheckbox
                    label={homeLabels.stepNineDescription}
                    id={'zones'}
                    className="checkbox-input"
                    name="elevator"
                    onChange={formikProps.handleChange}
                  />

                  <div className='form-buttons mt-1'>
                    <button className="btn btn-outline mb-2">Atras</button>
                    <button className="btn btn-fill mb-2" type='submit'>Terminar</button>
                  </div>
                </>
              </Card>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default App

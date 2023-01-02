import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HeroComponent } from '../components/hero/Hero.component'
import { Steps } from '../components/steps/Setps.component'
import { Home } from '../pages/Home.page'
import { SuccessSalesData } from '../pages/successSalesData/SuccessSalesData.page'
import { RootState } from '../store/Store'

export const AppRouter = () => {
  const {salesData} =  useSelector( (state: RootState) => state);
  const {step, path, finished} = salesData;
  return (
    <>
          <HeroComponent />
      {!finished &&
        <>

        <div className="row">
          <div className="col text-center" id="start-sale">
            <h2>Te ayudamos a vender tu inmueble!</h2>
          </div>
        </div>

        <Steps totalSteps={9} activeStep={step} />        
        </>
      }
      <Routes>

          <Route
          path='/*'
          element={path  !== '' ?  <Navigate to={path}/> : <Navigate to="/home" />}
          />

          <Route
          path='home'
          element={<Home/>}
          />
          <Route
          path='user-data'
          element={<Home/>}
          />
          <Route
          path='email'
          element={<Home/>}
          />
          <Route
          path='address'
          element={<Home/>}
          />
          <Route
          path='floor'
          element={<Home/>}
          />
          <Route
          path='zones'
          element={<Home/>}
          />
          <Route
          path='parking'
          element={<Home/>}
          />
          <Route
          path='value'
          element={<Home/>}
          />
          <Route
          path='picture'
          element={<Home/>}
          />
          <Route
          path='elevator'
          element={<Home/>}
          />
          <Route
          path='success-form-sales'
          element={<SuccessSalesData/>}
          />
      </Routes>
    </>
  )
}

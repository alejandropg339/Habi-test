import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HeroComponent } from '../components/hero/Hero.component'
import { Steps } from '../components/steps/Setps.component'
import { Home } from '../pages/Home.page'
import { RootState } from '../sotre/Store'

export const AppRouter = () => {
  const {salesData} =  useSelector( (state: RootState) => state);
  const {step} = salesData;
  return (
    <>
      <HeroComponent />

      <div className="row">
        <div className="col text-center" id="start-sale">
          <h2>Te ayudamos a vender tu inmueble!</h2>
        </div>
      </div>

      <Steps totalSteps={9} activeStep={step} />
      <Routes>
          <Route
          path='home'
          element={<Home/>}
          />
          <Route
          path='/'
          element={<Navigate to="/home" />}
          />
          <Route
          path='user-data'
          element={<Home/>}
          />
      </Routes>
    </>
  )
}

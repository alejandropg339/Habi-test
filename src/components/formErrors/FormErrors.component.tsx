import './FromErrors.component.scss'
export const FormErrors = ({errors}: any) => {
  return (
    <div className="container-form-errors error-text">
        <p className='error-text'>{errors.message || errors}</p>
    </div>
  )
}

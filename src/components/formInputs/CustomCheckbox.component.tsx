import { useField } from 'formik';
import { FormErrors } from '../formErrors/FormErrors.component';

interface InputProps {
    inputClass?: string;
    name: string;
    id: string;
    label: string;
    [x: string]: any;
}


export const CustomCheckbox = ({id, label, ...props }: InputProps) => {
    const [field, meta] = useField(props);
    return (
        <div className='checkbox-container'>
            <label htmlFor={id}>{label}</label>
            <input type="checkbox" id={id} {...props} {...field}/>
            {meta.touched && meta.error && <FormErrors errors={meta.error} />}
        </div>
    )
}

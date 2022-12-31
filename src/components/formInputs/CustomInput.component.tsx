import { useField } from 'formik';
import { FormErrors } from '../formErrors/FormErrors.component';

interface InputProps {
    placeholder?: string;
    inputClass?: string;
    type: 'text' | 'number' | 'email' | 'password' | 'tel';
    name: string;
    [x: string]: any;
}


export const CustomInput = ({ placeholder, ...props }: InputProps) => {
    const [field, meta] = useField(props);
    return (
        <>
            <input placeholder={placeholder} {...props} {...field}/>
            {meta.touched && meta.error && <FormErrors errors={meta.error} />}
        </>
    )
}

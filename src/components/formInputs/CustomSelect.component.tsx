import { useField } from 'formik';
import { FormErrors } from '../formErrors/FormErrors.component';

interface InputProps {
    inputClass?: string;
    name: string;
    [x: string]: any;
}


export const CustomSelect = ({ ...props }: InputProps) => {
    const [field, meta] = useField(props);
    return (
        <>
            <select {...field} {...props}/>
            {meta.touched && meta.error && <FormErrors errors={meta.error} />}
        </>
    )
}

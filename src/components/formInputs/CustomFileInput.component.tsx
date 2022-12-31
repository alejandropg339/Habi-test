import { UploadIcon } from '@primer/octicons-react';
import { useField } from 'formik';
import { FormErrors } from '../formErrors/FormErrors.component';

interface InputProps {
    placeholder?: string;
    name: string;
    id: string;
    label: string;
    labelClass?: string;
    fileName?: string;
    [x: string]: any;
}


export const CustomFileInput = ({ id, label, labelClass, fileName, ...props }: InputProps) => {
    const [field, meta] = useField(props);
    return (
        <>
            <input {...props} {...field} type="file" id={id} accept=".jpg, .jpeg, .png"/>
            <label htmlFor={id} className={labelClass}><span><UploadIcon size={24} /></span> &nbsp; {label}</label>
            <p>{fileName}</p>
            {meta.touched && meta.error && <FormErrors errors={meta.error} />}
        </>
    )
}

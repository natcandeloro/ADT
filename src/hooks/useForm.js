import { useState } from "react";
import { helpHttp } from "../help/helpHttp";

export const useForm =(initialForm,validateForm) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [reponse, setResponse] = useState(null);

const handleChange =(e) => {
    const {name, value} = e.target;
    setForm({
        ...form,
        [name]: value
    });
}; 

const handleBlur =(e) => {
    handleChange(e);
    setErrors(validateForm(form));
}; 

const handleSubmit =(e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    if(Object.keys(errors).length === 0){
        setLoading(true);
        helpHttp()
        .post("https://formsubmit.co/ajax/airedetrabajo.argentina@gmail.com", {
            body:form,
            headers: {
            "Content-Type":"application/json",
            Accept:"application/json",
            }
        })
        .then((res) => {
            setLoading(false);
            setResponse(true);
            setForm(initialForm);
            setTimeout(() => setResponse(false), 5000);
        })
     }   else {
        return; 
     }
    
}; 

return {
    form,
    errors,
    loading,
    reponse,
    handleChange,
    handleBlur,
    handleSubmit,
};
}
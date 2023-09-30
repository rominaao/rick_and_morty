export default function Validate (inputs){

    const regexEmail =  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexPassword = /^(?=\w*\d)\S{6,10}$/;
    let errors ={};
    if(!inputs.email) errors.email= 'Campo Obligatorio';
    if (inputs.email.length>35) errors.email = 'No puede superar los 35 caracteres';
    if (!regexEmail.test(inputs.email)) errors.email = 'Debe ingresar un mail valido';
    if (!regexPassword.test(inputs.password)) errors.password = 'la contraseña de ser correcta';
    return errors;
}
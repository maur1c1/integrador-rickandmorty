const validation = (userDate) => {

    let errors = {};

    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if(!regex.test(userDate.username)){
        errors.username = "El email es invalido";
    }

    if(!userDate.username){
        errors.username = "El email no puede estar vacío";
    }

    if(userDate.username.length > 35){
        errors.username = "El email no puede superar los 35 caracteres";
    }

    if(!userDate.password.match(/\d/)){
        errors.password = "La contraseña debe de tener al menos un número";
    }

    if(userDate.password.length < 6 || userDate.password.length > 10){
        errors.password = "La contraseña debe de contener al menos entre 6 y 10 caracteres";
    }
    
    return errors;
}

export default validation;
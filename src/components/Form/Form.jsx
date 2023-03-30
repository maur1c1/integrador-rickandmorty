import { useState } from "react";
import validation from './validation';

const Form = ( {login})=>{
    const [userDate, setUserdate ] = useState({
        username:'',
        password:''
    })

    const [errors, setErrors] = useState({

        username:'',
        password:''
    })

    const handleInputChange = (event)=>{

        setUserdate({
            ...userDate,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userDate,
            [event.target.name]: event.target.value
        }))


    }

    const handleSubmit = (event)=> {
        event.preventDefault();
        login(userDate)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username" style={{color: "white"}}>Username:</label>
            <input type="text" name="username" value={userDate.username} onChange={handleInputChange} />

            {errors.username && <p style={{color: "red"}}>{errors.username}</p>}

           <label htmlFor="password" style={{color: "white"}}>Password:</label>
           <input type="password" name="password" value={userDate.password} onChange={handleInputChange}/>

            {errors.password && <p style={{color:"red"}}>{errors.password}</p>}
           <button>LOGIN</button>
        </form>
    )
}

export default Form;
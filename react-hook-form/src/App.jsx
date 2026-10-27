import React from 'react'
import {useForm} from 'react-hook-form'

const App = () => {
  const {register, handleSubmit, formState:{errors},watch, getValues, setValue, reset} = useForm({
    defaultValues: {
        name: "Suneha",
        email: "suneha@xyz.com"
    }
  })

  const name = watch("name");
  const password = watch("password");

  function showName() {
    console.log(getValues("name"))
  }
  function onSubmit(data){
    console.log(data);
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">Name</label>
        <input type="text" {...register("name",{
            required: "Name is required",
            minLength: {
                value: 3,
                messgae: "Must have more than 3 characters"
            }
        })} />
        {errors.name && (
            <p>{errors.name.message}</p>
        )}
        <label htmlFor="">Email</label>
        <input type="email" {...register("email",{
            required: "Email is required",
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email is incorrect"
            }
        })} />
        {errors.email && (
            <p>{errors.email.message}</p>
        )}
        <label htmlFor="">Password</label>
        <input type="text" {...register("password",{
            required: "Password is required",
            pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message : "Password is incorrect"
            }
        })} />
        {errors.password && (
            <p>{errors.password.message}</p>
        )}

        {/* Confirm password */}
         <label htmlFor="">Confirm Password</label>
        <input type="text" {...register("confirmPassword",{
            required: "Confirm Password is required",
            validate: value => value === password || "Password does not match"
        })} />
        {errors.confirmPassword && (
            <p>{errors.confirmPassword.message}</p>
        )}

        <label htmlFor="">Age</label>
        <input type="number" {...register("age",{
            required: "age is required",
            valueAsNumber: true
        })}/>
        {errors.age && (
            <p>{errors.age.message}</p>
        )}

        <button type="submit">Register</button>
      </form>

      <h2>Hello, {name}</h2>
      
      <button onClick={showName}>Get Name</button>
      <button onClick={()=> setValue("name","Muskan")}>Set Name</button>
      <button onClick={()=> reset()}>Reset</button>
    </div>
  )
}

export default App

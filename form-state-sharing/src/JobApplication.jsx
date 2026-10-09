import React from 'react'
import {useState} from 'react'

const JobApplication = () => {
  const [formData, setFormData] = useState({
    name: "",
    skills: "",
    experience: ""
  })
const [displayForm, setdisplayForm] = useState(null)

  function handleChange(event) {
    //destructure
    const {name, value} = event.target;
    setFormData((previousData) => ({
        ...previousData,
        [name]: value
    }))
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(formData);
    setFormData({
        name: "",
        skills: "",
        experience: ""
    })
    setdisplayForm({...formData})
    // return {
    //     name: formData.name,
    //     skills: formData.skills,
    //     experience: formData.experience
    // }
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Applicant Name: </label>
        <input type="text" name="name" value={formData.name} onChange={handleChange}/>
        <label htmlFor="">Skills: </label>
        <input type="text" name="skills" value={formData.skills} onChange={handleChange}/>
        <label htmlFor="">Experience: </label>
        <input type="number" name="experience" value={formData.experience} onChange={handleChange}/>
        <button type="submit">Register</button>
      </form>
      {displayForm && (<div>
        <h1>{displayForm.name}</h1>
        <p>{displayForm.skills}</p>
        <p>{displayForm.experience}</p>
      </div>)}
    </div>
  )
}

export default JobApplication

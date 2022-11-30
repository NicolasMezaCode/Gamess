import React from 'react'
import {Input } from 'semantic-ui-react'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'
export default function Searchbarmenu() {
  const [name,setName]=useState("")
  const navigate=useNavigate()
  const handleChange=(e)=>{
    setName(e.target.value)
  }
  const handleSubmit=(e)=>{
    navigate(`/search/${name}`)
  }
  return (
    <form onSubmit={handleSubmit}>
      <Input
      className='my-3  w-136  bg-white z-40 rounded-lg'
      icon='search'
      iconPosition='left'
      placeholder='Search your game...'
      onChange={handleChange}
      />
    </form>
  )
}

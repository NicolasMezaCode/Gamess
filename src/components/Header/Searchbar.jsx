import React from 'react'
import { Dropdown, Input } from 'semantic-ui-react'

const options = [
  { key: 'name', text: 'Game Name', value: 'name' },
  { key: 'genre', text: 'Genre', value: 'genre' },
  { key: 'site', text: 'Entire Site', value: 'site' },
]

export default function Searchbarmenu() {
  return (
    <Input
    action={
      <Dropdown button basic floating options={options} defaultValue='name' />
    }
    className='my-3  w-136  bg-white'
    icon='search'
    iconPosition='left'
    placeholder='Search your game...'
    
  />
  )
}

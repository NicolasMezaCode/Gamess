import React from 'react'
import { Button } from 'semantic-ui-react'

const ButtonExampleAnimated = () => (
  <div className='bg-black'>
    <Button animated='fade' className='my-3'>
      <Button.Content visible>Sign-up for a Pro account</Button.Content>
      <Button.Content hidden>$12.99 a month</Button.Content>
    </Button>
    <Button animated='fade'>
      <Button.Content visible>Sign-up for a Pro account</Button.Content>
      <Button.Content hidden>$12.99 a month</Button.Content>
    </Button>
  </div>
)

export default ButtonExampleAnimated
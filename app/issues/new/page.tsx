'use client';
import { TextArea, TextField } from '@radix-ui/themes'
import React from 'react'
import { Button } from '@radix-ui/themes';

export const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-3'>
        <TextArea placeholder='Title'/>
        <TextArea placeholder='Description'/>
        <Button>Submit New Issue</Button>
    </div>
  )
}

export default NewIssuePage
import React from 'react'
import { render } from 'react-dom'

import { Form } from './components/Form'
import { SubmitSection } from './components/SubmitSection'
import { Input } from './components/Input'

render(
    <div style={{width: '400px', backgroundColor: '#eee'}}>
        <Form returnValue={console.log}>
            <Input name="first_name" text="First name:"/>
            <Input name="last_name" text="Last name:"/>
            <SubmitSection text="Done"/>
        </Form>
    </div>,
    document.getElementById('root')
)
import React from 'react'
import { render } from 'react-dom'

import { Form } from './components/Form'
import { SubmitSection } from './components/SubmitSection'
// import { NamesSection } from './components/NamesSection'
import { Input } from './components/Input'

render(
    <Form returnValue={console.log}>
        <Input name="first_name" text="Your first name:"/>
        <Input name="last_name" text="Your last name:"/>
        <SubmitSection/>
    </Form>,
    document.getElementById('root')
)
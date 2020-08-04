import React from 'react'
import { render } from 'react-dom'

import { Form } from './components/Form'
import { SubmitSection } from './components/SubmitSection'
import { NamesSection } from './components/NamesSection'

render(
    <Form returnValue={console.log}>
        <NamesSection/>
        <SubmitSection/>
    </Form>,
    document.getElementById('root')
)
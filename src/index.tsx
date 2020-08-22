import React from 'react'
import { render } from 'react-dom'

import { Form } from './components/Form'
import { SubmitSection } from './components/SubmitSection'
import { Input } from './components/Input'
import { MultiScreen } from './components/MultiScreen'
import { Screen } from './components/Screen'

render(
    <div style={{width: '400px', backgroundColor: '#eee'}}>
        <Form returnValue={console.log}>
            <Input name="first_name" text="First name:"/>
            <Input name="last_name" text="Last name:"/>
            <SubmitSection text="Done"/>

            <MultiScreen>
                <Screen>
                    <Input name="email" text="email"/>
                    <Input name="email2" text="email2"/>
                </Screen>

                <Screen>
                    <Input name="something" text="something"/>
                </Screen>
            </MultiScreen>
        </Form>
    </div>,
    document.getElementById('root')
)
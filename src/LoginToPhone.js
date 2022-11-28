import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

export default function LoginToPhone() {
    const [value, setValue] = useState()

    return (
        // <button className="btn btn-outline-success" type="button">
        //     Sign in with Phone
        // </button>
        <PhoneInput
            placeholder="Enter phone number"
            country="US"
            value={value}
            onChange={setValue} />
    )
}

import React from 'react'
import { Wrapper } from './styled'

export default function Button({ children, type="primary"}) {
    return (
        <Wrapper type={type}>
            {children}
        </Wrapper>
    )
}

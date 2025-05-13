import React from 'react'

export default function Tabs({ children, buttons, ButtonsContainer }) {
    // const ButtonsContainer = buttonsContainer // You can directly use props with upercase letters. Make sure to change it in parent component too
    return <>
        <ButtonsContainer>{buttons} </ButtonsContainer>
        {children}
    </>
}

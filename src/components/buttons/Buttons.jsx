

import React from "react";
import './buttons.css'

export const MainButton = ({ children }) => {
   return <button className='main-button'>{children}</button>
}

export const SecondaryButton = ({ children }) => {
   return <button className="secondary-button">{children}</button>
}

export const BorderedButton = ({ children }) => {
   return <button className="borderd-button">{children}</button>
}
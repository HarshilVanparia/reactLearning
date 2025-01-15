import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Caclulator from './Task1/q1'
import EmailValidator from './Task1/q2'
import ToggleText from './Task1/q3'
import CharacterCounter from './Task1/q4'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Caclulator />
    <EmailValidator />
    <ToggleText/>
    <CharacterCounter/>
  </StrictMode>,
)

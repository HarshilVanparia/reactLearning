import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ThreeStageForm from './AllTask/ThreeStageForm'
// import UserContextFinal from './usecontext3'
// import VolumeFInder from './AllTask/cube'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThreeStageForm/>
  </StrictMode>,
)

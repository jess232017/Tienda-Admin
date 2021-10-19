import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">Soft-Market</a>
        <span className="ml-1">&copy; 2021 Alk-Soft.</span>
      </div>
      <div className="mfs-auto d-none">
        <span className="mr-1">Desarrollado por</span>
        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">Jensen23</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)

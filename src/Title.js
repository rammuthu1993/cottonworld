import React from 'react'

function Title() {
    console.log("title rendering");
  return (
    
    <div>
    <h2>
        useCallback
    </h2>
    </div>
  )
}
export default React.memo(Title)
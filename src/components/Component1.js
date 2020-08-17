import React, { useEffect, useRef, useState } from 'react'

const Message = ( props ) => (
  <div aria-live="polite" aria-atomic="true" className="sr-only">
    {props.text}
  </div>
);

const Component1 = () => {
  const titleRef = useRef()
  const [message, setMessage] = useState(null)
  useEffect(() => {
    document.title = 'Component 1'
    titleRef.current.focus()
    setMessage('Component 1 has loaded')
  }, [])
  return (
    <div>
      <h2 ref={titleRef}>Component 1 Title</h2>
      <Message text={message} />
    </div>
  )
}

export default Component1

import React, { useRef } from 'react'

const VideoPlatPause = () => {
  const videoRef = useRef(null)

  function handlePlay(){
    videoRef.current.play();
  }
  function handlePause(){
    videoRef.current.pause();
  }
  return (
    <div>
      <video ref={videoRef}>
        <source src="/Users/majid/Documents/Study-Doc/html-css-js-practice/React-js/advance-hook/src/component/shortVideo.mp4" />
      </video>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  )
}

export default VideoPlatPause

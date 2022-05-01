import React, { useState } from 'react'

const TTSButton = ({ voiceActor}) => {
  const [showVoice, setShowVoice] = useState(false)
  return (
    <button onClick={() => setShowVoice(true)} className="container sm:w-22 md:w-44  bg-blue-500 text-black font-semibold rounded-full h-10 px-2 text-center hover:bg-lime-500">{showVoice ? voiceActor : "click to reveal"}</button>
  )
}

export default TTSButton
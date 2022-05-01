import React from 'react'
import TTSButton from './TTSButton'

const AudioPlayer = ({ music }) => {
  return (
    <div className="flex flex-row border-5 w-ful items-center justify-between text-transparent">
        {music.map((listo, idx) => {
            return (
                <div key={idx} className="flex flex-col items-center h-full w-1/3 space-y-5 ">
                    {listo.map((clip, idx2) => {
                        if (idx2 === 0) {
                         
                          return (
                            <TTSButton voiceActor={clip} />)
                        } else {
                        return (<audio className="container sm:w-22 md:w-44 h-10" key={idx2} src={clip} controls  />)
                        }
                    })}
                    </div>
                )
            
        })}
        
    </div>
  )
}

export default AudioPlayer
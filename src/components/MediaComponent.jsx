const MediaComponent = ({ imgSrc, audioSrc }) => {
    const audioRef = useRef(null);
    const toggleAudio = () =>
      audioRef.current === null
        ? console.log("Audio component is not loaded yet.")
        : audioRef.current.paused
        ? audioRef.current.play()
        : audioRef.current.pause();
    return (
      <li>
        <img src={imgSrc} onClick={toggleAudio} />
        <audio ref={audioRef} src={audioSrc} />
      </li>
    );
  };
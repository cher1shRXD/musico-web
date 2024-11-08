// import {useState, useRef, useEffect, useCallback} from 'react';
// import ReactPlayer from 'react-player';
// import { faPlay, faPause, faRepeat, faVolumeLow, faVolumeXmark, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import albumImg from "../assets/logo.jpg" // src 폴더 하위의 이미지 경로 import


// import './MusicSeek.css';

// type MusicProps = {
//   name: string;
//   album: string;
//   artist: string;
// };
// function MusicSeek({ name, album, artist }: MusicProps) {
//   function format(seconds: number): string {
//     const date: Date = new Date(seconds * 1000);
//     const hh: number = date.getUTCHours();
//     const mm: number = date.getUTCMinutes();
//     const ss: string = pad(date.getUTCSeconds());
//     if (hh) {
//         return `${hh}:${pad(mm)}:${ss}`;
//     }
//     return `${mm}:${ss}`;
//   }

//   function pad(string: number): string {
//       return ('0' + string).slice(-2);
//   }

//   const [isPlaying, setIsPlaying] = useState<boolean>(false);
//   const [nowVolume, setVolume] = useState<number>(0.5);
//   const [nowLastVolume, setLastVolume] = useState<number>(0.5);


//   const playerRef = useRef(null);
//   const [played, setPlayed] = useState(0);
//   const [musicUrl, setMusicUrl] = useState();
//   const [duration, setduration] = useState(0);

//   const [isHover, setHover] = useState<boolean>(false);
//   const [isLoop, setLoop] = useState<boolean>(false);


//   useEffect(() => {
//     if (name != "재생중이 아닙니다.") {
//       console.log(name, artist)
//       fetch(`http://localhost:3000/getYoutubeUrlByQuery`,{
//         method: "POST",
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           query: `${name} ${artist}`,
//         }),

//       })
//       .then(res => res.json())
//       .then(
//         (result) => {
//           setIsPlaying(true);
//           playerRef.current.seekTo(parseFloat(0));
//           setMusicUrl(`https://www.youtube.com/watch?v=${result.url}`)
          
//         }
//       )
//     }
//   },[name])

//   useEffect(() => {
//     if (playerRef.current && playerRef.current.player) {
//         setIsPlaying(playerRef.current.player.isPlaying);
//     }
// }, [playerRef.current?.player?.isPlaying]);
//   const onVolumeBtn = () => {
//     if (nowVolume == 0) {
//       setVolume(nowLastVolume)
//     }else{
//       setLastVolume(nowVolume)
//       setVolume(0)
//     }
//   }

//   return (
//     <>
//       <div className="playStatus">
//         <div className="album">
        
//         {musicUrl ? <img src={album}/> : <img src={albumImg}/>}
//         </div>
//         <div className="albumInfo">
//           <div className="albumTitle">{name}</div>
//           <div className="albumBy">{artist}</div>
//         </div>
//         <div className="playControlBtn">
//           {isHover ? 
//             <div className='volumeProgress'>
//                     <input className="volumeInput" max="0.999999" min="0" step="any" type="range" value={nowVolume} 
//                     onMouseOver={() => setHover(true)}
//                     onMouseOut={() => setHover(false)}
//                     onChange={(e) => {
//                       setVolume(parseFloat(e.target.value));
//                     }}></input>
//             </div>
//           : <></>}

//         <div className='volumebutton' 
//             onClick={() => onVolumeBtn()}
//             onMouseOver={() => setHover(true)}
//           >

          
//           {nowVolume == 0 ? <FontAwesomeIcon icon={faVolumeXmark} /> : <></>}

//           {nowVolume > 0 && nowVolume <= 0.5 ? <FontAwesomeIcon icon={faVolumeLow} /> : <></>}

//           {nowVolume != 0 && nowVolume > 0.5 ? <FontAwesomeIcon icon={faVolumeHigh} /> : <></>}

//           </div>
//           <div className="playbutton" onClick={() => setIsPlaying(!isPlaying)}>
//             {isPlaying && musicUrl ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon className='smallIcon' icon={faPlay} />}
//           </div>

//           {isLoop ?       
//             <div className="loopbutton" style={{
//               color: "blue",
              
//             }} onClick={()=> setLoop(!isLoop)}>
//               <FontAwesomeIcon icon={faRepeat} />        
//             </div>
//           : 
//             <div className="loopbutton" onClick={()=> setLoop(!isLoop)}>
//               <FontAwesomeIcon icon={faRepeat} />        
//             </div>
//         }

//         </div>
//         <div className='time_bar'>
//           <span className='timeDuration'>{format(duration*played)}</span>
//           <input className="seek_bar" max="0.999999" min="0" step="any" type="range" 
//               value={played}
//               onChange={(e) => {
//                   setPlayed(parseFloat(e.target.value));
//                   playerRef.current.seekTo(parseFloat(e.target.value));
//               }}
//           ></input>
//           <span className='timeDuration2'>{format(duration)}</span>

//         </div>
       
//         <ReactPlayer
//             url={musicUrl}
//             width="0px"
//             height="0px"
//             playing={isPlaying}
//             volume={nowVolume}
//             ref={playerRef}
//             onDuration={setduration}
//             onProgress={({played}) => setPlayed(played)}
//             loop={isLoop}
//             controls
//         />
//       </div>
//     </>
//   )
// }



// export default MusicSeek;

import React from 'react'

const MusicSeek = () => {
  return (
    <div>MusicSeek</div>
  )
}

export default MusicSeek
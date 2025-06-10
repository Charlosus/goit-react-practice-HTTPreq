// useRef is used to have acces to DOM nodes that are not noramlu available
// such as focus element on event
// conrole on video player
// Ingeration with DOM library
// access to DOM properties such as elements sizes, scroll values

// Refs are created by hook useRef() and are added by ref atribute

import { useRef } from 'react';

const App = () => {
  const btnRef = useRef();

  return <button ref={btnRef}>Button with ref</button>;
};

// ===================================================================
// Life cicles of ref

import { useEffect, useState } from 'react';

export const AppRefCycle = () => {
  const [value, setValue] = useState(0);
  const btnRef = useRef();

  console.log('App: ', btnRef.current);
  // will be undefiend at first render and will be referance to
  // element of DOM in any other render

  useEffect(() => {
    // Effect is used at mount
    // so it will alway will be referenced to element of DOM
    console.log('useEffect: ', btnRef.current);
  });

  const handleClick = () => {
    // click will happen after mount so it will alway will be
    //  a refferance to element of DOM
    console.log('handleClick: ', btnRef.current);
  };

  return (
    <>
      <button onClick={() => setValue(value + 1)}>
        Update value to trigger re-render {value}
      </button>
      <button ref={btnRef} onClick={handleClick}>
        Button with ref
      </button>
    </>
  );
};

//=======================================================================

// refs ar not reactive changing them wont cause rerender of element

export const AppValueRef = () => {
  const valueRef = useRef(0);

  useEffect(() => {
    // will act only at mount
    // later actualizing value wont
    // rerander element
    console.log(valueRef.current);
  });

  const handleClick = () => {
    valueRef.current += 1;
    console.log(valueRef);
  };

  return <button onClick={handleClick}>Click to update ref value</button>;
};

// =======================================================================

// lets create a Player component

export const Player = ({ source }) => {
  const playerRef = useRef();
  // we connect play and pause function form video player to our functions
  const play = () => playerRef.current.play();

  const pause = () => playerRef.current.pause();

  return (
    <div>
      <video ref={playerRef} src={source}>
        Sorry, your browser does not support embedded videos.
      </video>
      <div>
        {/* and here we rediriect them to our button out side of video player */}
        <button onClick={play}>Play</button>
        <button onClick={pause}>Pause</button>
        {/* now button can be used to pause and play a video */}
      </div>
    </div>
  );
};

export const AppPlayer = () => {
  return <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />;
};

// ======================================================================

// REDIRECTING REFS
// Problem ocusers when we use refs and redirect them outside of components
// where thay are used we can do it by forwardRef

// here we created component button and added ref

import { forwardRef } from 'react';
// 3) And here ref was forwarde to the component
const CustomButton = forwardRef((props, ref) => (
  <button ref={ref}>{props.children}</button>
));

export const AppForward = () => {
  const btnFwRef = useRef();
    //1) here we created ref
  useEffect(() => btnFwRef.current.focus(), []);
    //2) pass it as property
  return <CustomButton ref={btnFwRef}>Button with forwarded</CustomButton>;
};

import { useState, useRef, useEffect } from 'react';

export const useForm = (callback, initialState = {}) => {
  const [val, setVal] = useState(initialState);

  const handleInputChange = e => {
    console.log(e.target.type);
    if (e.target.type === 'file') {
      setVal({ ...val, [e.target.name]: e.target.files[0] });
    } else {
      setVal({ ...val, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    callback();
    setVal(initialState);
  };

  return {
    handleInputChange,
    handleSubmit,
    val,
  };
};

export const useOutsideClick = callback => {
  let clickRef = useRef();
  let handleClick = e => {
    if (clickRef.current && clickRef.current.contains(e.target)) {
      console.log('ref clicked');
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
  return clickRef;
};

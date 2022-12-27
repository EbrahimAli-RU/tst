import { useRef, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import InputMask from 'react-input-mask';
import { createEnvFile } from "../file"

const App = (props) => {
  const [val, setVal] = useState('')
  const gghgh = useRef(null)
  useEffect(() => {
    console.log(gghgh)
    createEnvFile();
  }, [])
  const onChangeInputText = (e) => {
    console.log(e)
    setVal(e.target.value)
  }
  return (
    <div>
      <h1>HELLO</h1>
      <InputMask
          // id={'input-box-' + chat.id}
          mask="99/99/9999"
          type="text"
          placeholder="Please enter your date of birth"
          autoComplete="off"
          className="form-control w-50"
          value={val}
          inputRef={input => {
            console.log(input)
            console.log(input.focus)
          }}
          onChange={(e) => onChangeInputText(e)}
          // onKeyPress={onKeyPressHandleEnter(chat)}
      >
        {inputProps => <input ref={input => input && input.focus && input.focus()} placeholder="HJHJHJHJHJ" className="form-control w-50" />}
      </InputMask>
    </div>
  );
};

export default App;

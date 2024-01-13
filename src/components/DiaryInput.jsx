import React, {useState} from "react";
import { Button, Input } from "antd";
const { TextArea } = Input;

function DiaryInput({ isLoading, onSubmit }) {
  const [userInput, setUserInput] = useState("");
  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };
  const handleClick = () => {
    onSubmit(userInput);
  };
  return (
    <div>
      <TextArea
        value={userInput}
        onChange={handleUserInput}
        placeholder="오늘 일어난 일에 대해서 말해주세요."
      />
      <Button loading={isLoading} onClick={handleClick}>
        GPT 회고록을 작성해줘
      </Button>
    </div>
  );
}

export default DiaryInput;

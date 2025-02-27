import { useState } from "react";
import Input from "./Input";
import Id from "./Id";
import Button from "./Button";

function App() {
  const [idValue, setIdValue] = useState("");
  const [pwValue, setPwValue] = useState("");

  const idChange = (e) => {
    setIdValue((prev) => e.target.value);
  };

  const pwChange = (e) => {
    setPwValue((prev) => e.target.value);
  };

  const checkIDLength = 6 <= idValue.length && idValue.length <= 20;
  const checkPWLength = 8 <= pwValue.length && pwValue.length <= 20;
  const checkSpecial = [..."!@#&_^"].some((v) => pwValue.includes(V));

  return (
    <>
      <Input placeholder={"아이디를 입력해주세요"} change={idChange}></Input>
      <Id text={"6자~20자 내외"} isChecked={checkIDLength} />
      <Input placeholder={"비밀번호를 입력해주세요"} change={pwChange}></Input>
      <Id text={"8~20자 내외"} isChecked={checkPWLength} />
      <Id text={"특수문자"} isChecked={checkSpecial} />

      <Button
        text="동의하심?"
        isValid={checkIDLength && checkPWLength && checkSpecial}
      ></Button>
    </>
  );
}

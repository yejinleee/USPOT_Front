import React, { useState } from 'react';
import Map from './Map';
const LandingPage = () => {
  const [InputText, setInputText] = useState('');
  const [Place, setPlace] = useState('');

  const onChange = (e: any) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setPlace(InputText);
    setInputText('');
  };

  return (
    <>
      <form className="inputForm" onSubmit={handleSubmit}>
        <input placeholder="출발지를 입력하세요" onChange={onChange} value={InputText} />
        <button type="submit">검색</button>
      </form>
      <Map searchPlace={Place} />
    </>
  );
};

export default React.memo(LandingPage);

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import None from '../MakeCoures/None';
import Map from './Map';
const LandingPage = () => {
  const [InputText, setInputText] = useState('');
  const [Place, setPlace] = useState('');
  var local = sessionStorage.getItem('memberid');
  try {
    var memberid = Number(local.split('')[1]);
  } catch {
    var memberid = 0;
  }

  const onChange = (e: any) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setPlace(InputText);
    setInputText('');
  };

  const [exist, setExsist] = useState(false);
  useEffect(() => {
    axios
      .get(`/api/myplace/findall/${memberid}`)
      .then(async (response) => {
        if (response.data.data.length !== 0) {
          setExsist(true);
        }
      })
      .catch((error) => {});
  });

  return (
    <>
      {exist ? (
        <>
          <form className="inputForm" onSubmit={handleSubmit}>
            <input placeholder="출발지를 입력하세요" onChange={onChange} value={InputText} />
            <button type="submit">검색</button>
          </form>
          <Map searchPlace={Place} />
        </>
      ) : (
        <None />
      )}
    </>
  );
};

export default React.memo(LandingPage);

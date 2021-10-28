import axios from 'axios';
import React, { useEffect, useState } from 'react';
import None from '../MakeCoures/None';
import Map from './Map';
import '@components/mypage/Search.scss';

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
          <div className="startdisplay">
            <form className="inputForm" onSubmit={handleSubmit}>
              <input className="searchstart" placeholder="출발지를 입력하세요" onChange={onChange} value={InputText} />
              <button className="startbutton" type="submit">
                <img src="/src/icon/search.png" />
              </button>
            </form>
          </div>
          <Map searchPlace={Place} />
        </>
      ) : (
        <None />
      )}
    </>
  );
};

export default React.memo(LandingPage);

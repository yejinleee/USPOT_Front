import React, { useState } from 'react';
import '@components/1page/category.css';

const EnCategory = (props: any) => {
  const [clicked, setClicked] = useState('');

  return (
    <>
      <br />
      <div style={{display:'inline-block'}}>
        <label
          onClick={() => {
            props.setSelectedcategory('관광명소');
            setClicked('tor');
          }}
          className={clicked === 'tor' ? 'clicked' : 'button'}
        >
          <img src="src/icon/관광명소.png" style={{ width: '5%' }} />
          <p style={{ display: 'inline' }}>Attraction</p>
        </label>
        <label
          onClick={() => {
            props.setSelectedcategory('음식점');
            setClicked('res');
          }}
          className={clicked === 'res' ? 'clicked' : 'button'}
        >
          <img src="src/icon/식당.png" style={{ width: '5%' }} />
          <p style={{ display: 'inline' }}>Restaurant</p>
        </label>
        <label
          onClick={() => {
            props.setSelectedcategory('카페');
            setClicked('caf');
          }}
          className={clicked === 'caf' ? 'clicked' : 'button'}
        >
          <img src="src/icon/카페.png" style={{ width: '5%' }} />
          <p style={{ display: 'inline' }}>Cafe</p>
        </label>
      </div>
    </>
  );
};

export default EnCategory;

import React, { FC, useState } from 'react';
import '@components/3page/Controller.css';
import { History, LocationState } from 'history';
import EnTourapilist from '../Tourapi/EnTourapilist';

interface Props {
  mapx: any;
  mapy: any;
  selectedplace: any;
  history: History<LocationState>;
}
const useSlider = (min: any, max: any, defaultState: any, label: any, id: any) => {
  const [state, setSlide] = useState(defaultState);
  const handleChange = (e: any) => {
    setSlide(e.target.value);
  };

  const Slider = () => (
    <input type="range" id={id} min={min} max={max} step={0.5} defaultValue={state} onMouseUp={handleChange} />
  );
  return [state, Slider, setSlide];
};

const EnController: FC<Props> = (props: Props) => {
  const [slideValue, Slider] = useSlider(1, 20000, 5000, 'Threshold', 'threshold');
  const [selectedArrange, setSelectedArrange] = useState('B'); //  정렬기준 *인기순 B / 거리순 E
  const [selectedType, setSelectedType] = useState(12);
  const [apiopen, setApigopen] = useState(false);
  function funcType(selected: number) {
    setSelectedType(selected);
  }
  function funcArrange(selected: string) {
    setSelectedArrange(selected);
  }
  function selectedalert() {
    if (selectedType === 0 || selectedArrange === '') {
      return alert('Please select all the search terms');
    } else {
      setApigopen(true);
    }
  }
  return (
    <>
      <h2>Find the surrounding places of {props.selectedplace}</h2>
      <div className="controller">
        {/*슬라이더*/}
        <div className="slider-parent" onChange={() => setApigopen(false)}>
          0
          <Slider />
          20 km
          <div className="buble">{slideValue}m</div>
        </div>
        {/*인기순거리순*/}
        <div className="order" onClick={() => setApigopen(false)}>
          <span
            onClick={() => funcArrange('popularity')}
            className="order_button"
            id={selectedArrange === 'popularity' ? 'selected' : 'unselected'}
          >
            Popularity
          </span>
          <span
            onClick={() => funcArrange('distance')}
            className="order_button"
            id={selectedArrange === 'distance' ? 'selected' : 'unselected'}
          >
            Distance
          </span>
        </div>
        {/*카테고리*/}
        <div className="wrapper">
          <div className="category" onClick={() => setApigopen(false)}>
            <span onClick={() => funcType(12)}
                  className="category_button" id={selectedType === 12 ? 'selected' : 'unselected'}>
              Attraction
            </span>
            <span onClick={() => funcType(14)}
                  className="category_button" id={selectedType === 14 ? 'selected' : 'unselected'}>
              Cultural facilities
            </span>
            <span onClick={() => funcType(38)}
                  className="category_button" id={selectedType === 38 ? 'selected' : 'unselected'}>
              Shopping
            </span>
            <span onClick={() => funcType(39)}
                  className="category_button" id={selectedType === 39 ? 'selected' : 'unselected'}>
              Food
            </span>
            <span onClick={() => funcType(15)}
                  className="category_button" id={selectedType === 15 ? 'selected' : 'unselected'}>
              Festivals, performances, events
            </span>
            <span onClick={() => funcType(28)}
                  className="category_button" id={selectedType === 28 ? 'selected' : 'unselected'}>
              Leports
            </span>
            <span onClick={() => funcType(32)}
                  className="category_button" id={selectedType === 32 ? 'selected' : 'unselected'}>
              Accommodation
            </span>
          </div>
        </div>
      </div>

      <div className="gobtn_outerdiv">
        <div className="gobtn">
          <button
            className="go"
            onClick={() => {
              selectedalert();
            }}
          >
            More Places !
          </button>
        </div>
      </div>

      <div className="클래스명모하지">
        {apiopen && (
          <EnTourapilist
            arrange={selectedArrange}
            distance={slideValue}
            type={selectedType}
            mapx={props.mapx}
            mapy={props.mapy}
            history={props.history}
          />
        )}
      </div>
    </>
  );
};

export default EnController;

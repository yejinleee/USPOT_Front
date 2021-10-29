import React, { FC, useEffect, useMemo, useState } from 'react';
import GoogleMapReact from 'google-map-react';

interface Props {
  searchPlace: string;
}

const Map: FC<Props> = ({ children, searchPlace }) => {
  const [select, setSelect] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {}, [searchPlace]);

  return (
    <>
      <div className="googlemap">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_KEY }}
          defaultCenter={{ lat: 37.5, lng: 127 }}
          defaultZoom={15}
        ></GoogleMapReact>
      </div>
    </>
  );
};

export default React.memo(Map);

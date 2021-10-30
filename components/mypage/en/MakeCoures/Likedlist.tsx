import React, { FC } from 'react';
interface Props {
  start: any;
}

const Likedlist: FC<Props> = (props: Props) => {
  return (
    <>
      <div className="Likedlist">
        <div className="Likelistname">[하트 누른 장소들 목록]</div>
      </div>
    </>
  );
};

export default Likedlist;

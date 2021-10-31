import React, { useEffect, useState } from 'react';
import '@components/mypage/en/Search/Search.scss';
import axios from 'axios';
import EnMap from '@components/mypage/en/Search/EnMap';
import EnMapRsp from '@components/mypage/en/Search/EnMapRsp';
import None from '@components/mypage/ko/MakeCoures/None';

const EnSearch = () => {
//   const [InputText, setInputText] = useState('');
//   const [Place, setPlace] = useState('');
//   var local = sessionStorage.getItem('memberid');
//   try {
//     var memberid = Number(local.split('')[1]);
//   } catch {
//     var memberid = 0;
//   }
//
//   const onChange = (e: any) => {
//     setInputText(e.target.value);
//   };
//
//   const handleSubmit = (e: any) => {
//     e.preventDefault();
//     setPlace(InputText);
//     if (InputText === '') {
//       alert('장소를 입력해주세요!');
//     }
//     setInputText('');
//   };
//
//   const [exist, setExsist] = useState(false);
//   useEffect(() => {
//     axios
//       .get(`/api/myplace/findall/${memberid}`)
//       .then(async (response) => {
//         if (response.data.data.length !== 0) {
//           setExsist(true);
//         }
//       })
//       .catch((error) => {});
//   });
//
//   return (
//     <>
//       {exist ? (
//         <>
//           <div className="startdisplay">
//             <form className="inputForm" onSubmit={handleSubmit}>
//               <input className="searchstart" placeholder="출발지를 입력하세요" onChange={onChange} value={InputText} />
//               <button className="searchbutton" type="submit">
//                 <img src="/src/icon/search.png" />
//               </button>
//             </form>
//           </div>
//           <div className="map_div">
//             <div className="searchplace" style={{ position: 'relative' }}>
//               <EnMap Place={Place} />
//             </div>
//             <div className="searchplace_responsive" style={{ position: 'relative' }}>
//               <EnMapRsp Place={Place} />
//             </div>
//           </div>
//         </>
//       ) : (
//         <None />
//       )}
//     </>
//   );







  return (
    <div className="myplacecontents">
      <div style={{margin:'2vh 0 1vh 0'}}>Please select a departure point</div>
      <EnMap />
    </div>
  );
};

export default EnSearch;

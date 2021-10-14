import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import useSWR from 'swr';
import useInput from '@pages/Signup/useinput';
import { Link } from 'react-router-dom';
import Layout from '@layouts/Layouts';
import fetcher from '@utils/fetcher';
// const CLIENT_ID = process.env.REACT_APP_KAKAO_KEY;
// const REDIRECT_URI =  "http://localhost:8090/oauth/callback/kakao";
// const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
// //JavaScript SDK로 Kakao.Auth.authorize 함수를 호출할 때는 SDK 초기화 시 사용된 JavaScript 키를 사용합니다.
// //하지만 REST API로 토큰 받기를 요청할 때는 REST API 키를 사용해야 합니다.
const LogIn = () => {
  // const { data, error, revalidate } = useSWR('/api/login', fetch); //로그인후에 데이터를 전해줄 api //유저정보가 data에 담길 것임
  const [logInError, setLogInError] = useState(false);
  const [email, onChangeEmail] = useInput('');
  const [username, onChangeUsername] = useInput('');
  const [password, onChangePassword] = useInput('');
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log('click login');
      console.log('ID : ', username);
      console.log('PW : ', password);
      const headers = {
        'Content-type': 'application/json',
      };
      console.log(JSON.stringify({ password, username }));
      axios
        .post('/api/member/login', JSON.stringify({ password, username }), { headers })
        .then((res) => {
          console.log(res);
          // if (res.data.userId === undefined) {
          //   // id 일치하지 않는 경우 userId = undefined, msg = '입력하신 id 가 일치하지 않습니다.'
          //   alert('입력하신 id 가 일치하지 않습니다.');
          // } else if (res.data.userId === null) {
          //   // id는 있지만, pw 는 다른 경우 userId = null , msg = undefined
          //   console.log('======================', '입력하신 비밀번호 가 일치하지 않습니다.');
          //   alert('입력하신 비밀번호 가 일치하지 않습니다.');
          // } else if (res.data.userId === nickname) {
          //   // id, pw 모두 일치 userId = userId1, msg = undefined
          //   console.log('======================', '로그인 성공');
          //   // sessionStorage.setItem('user_id', nickname);
          // }
          // // 작업 완료 되면 페이지 이동(새로고침)
          // document.location.href = '/';
        })
        .catch((error) => {
          console.log(error);
          alert('아이디/비밀번호를 확인해주세요!');
        });
    },
    [username, password],
  );
  // useEffect(() => {
  //   axios
  //     .get('/api/login')
  //     .then((res) => console.log(res))
  //     .catch();
  // }, []);
  return (
    <>
      <Layout>
        <div id="container">
          <form onSubmit={onSubmit} method="POST">
            <label id="nickname-label">
              <span>ID</span>
              <div>
                <input type="text" id="username" name="username" value={username} onChange={onChangeUsername} />
              </div>
            </label>
            <label id="password-label">
              <span>비밀번호</span>
              <div>
                <input type="password" id="password" name="password" value={password} onChange={onChangePassword} />
              </div>
              {logInError && <p>이메일과 비밀번호 조합이 일치하지 않습니다.</p>}
            </label>
            <button type="submit">로그인</button>
          </form>
        </div>
      </Layout>
    </>
  );
};
export default LogIn;

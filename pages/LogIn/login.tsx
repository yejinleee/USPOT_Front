import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import useInput from '@pages/Signup/useinput';
import Layout from '@layouts/Layouts';
import Logout from './Logout';

const LogIn = () => {
  console.log(localStorage.getItem('language'));
  const [logInError, setLogInError] = useState(false);
  const [username, onChangeUsername] = useInput('');
  const [password, onChangePassword] = useInput('');
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const headers = {
        'Content-type': 'application/json',
      };
      axios
        .post('/api/member/login', JSON.stringify({ password, username }), { headers })
        .then((res) => {
          console.log(res);
          localStorage.setItem('memberid', JSON.stringify(res.data.memberid));
          console.log(localStorage.getItem('memberid'));
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
        <Logout />
      </Layout>
    </>
  );
};
export default LogIn;

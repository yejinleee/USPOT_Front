import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import useInput from '@pages/Signup/useinput';
import Layout from '@layouts/Layouts';
import Logout from './Logout';
import { RouteComponentProps } from 'react-router-dom';
import { withRouter } from 'react-router';

const LogIn = ({ history }: RouteComponentProps) => {
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
          sessionStorage.setItem('memberid', JSON.stringify(res.data.memberid));
          alert('로그인 성공!');
          history.goBack();
        })
        .catch((error) => {
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
      </Layout>
    </>
  );
};
export default withRouter(LogIn);

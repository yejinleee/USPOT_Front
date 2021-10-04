import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { Redirect } from 'react-router-dom';
import useSWR from 'swr';
import useInput from '@pages/Signup/useinput';
import {Link} from 'react-router-dom';
import Layout from '@layouts/Layouts';
import fetcher from '@utils/fetcher';

const LogIn = () => {
  // const {data,error,revalidate} = useSWR('/api/savemember',fetcher); //로그인후에 데이터를 전해줄 api //유저정보가 data에 담길 것임
  const {data,error,revalidate} = useSWR('/api/login'); //로그인후에 데이터를 전해줄 api //유저정보가 data에 담길 것임
  const [logInError, setLogInError] = useState(false);
  const [email, onChangeEmail] = useInput('');
  const [username, onChangeUsername] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setLogInError(false);

      axios
        .post(
          '/api/savemember',
          { username, password },
          {withCredentials:true} //post에선 3번째자리에 설정
        )

        .then(() => {
          // revalidate();
        })
        .catch((error) => {
          console.log("err")
          setLogInError(error.response?.data?.statusCode === 401);
        });
    },
    [username, password],
  );

  return (
    <>
      <Layout>
        <div id="container">
          <form onSubmit={onSubmit}>
            {/*<label id="email-label">*/}
            {/*  <span>이메일 주소</span>*/}
            {/*  <div>*/}
            {/*    <input type="email" id="email" name="email" value={email} onChange={onChangeEmail} />*/}
            {/*  </div>*/}
            {/*</label>*/}
            <label id="nickname-label">
              <span>닉네임</span>
              <div>
                <input type="text" id="username" name="username" value={username} onChange={onChangeUsername} />
              </div>
            </label>
            <label id="password-label">
              <span>비밀번호</span>
              <div>
                <input type="password" id="password" name="password" value={password} onChange={onChangePassword} />
              </div>
              {logInError && <p> 이름과 비밀번호 조합이 일치하지 않습니다.</p>}
            </label>
            <button type="submit">로그인</button>
          </form>
          <div>
            아직 회원이 아니신가요?&nbsp;
            <Link to="/signup">회원가입 하러가기</Link>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default LogIn;

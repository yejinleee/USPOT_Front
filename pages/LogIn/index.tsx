import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import useSWR from 'swr';
import useInput from '@pages/Signup/useinput';
import { Link } from 'react-router-dom';
import Layout from '@layouts/Layouts';
import fetcher from '@utils/fetcher';

const LogIn = () => {
  // const { data, error, revalidate } = useSWR('/api/login', fetch); //로그인후에 데이터를 전해줄 api //유저정보가 data에 담길 것임
  const [logInError, setLogInError] = useState(false);
  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log('click login');
      console.log('ID : ', nickname);
      console.log('PW : ', password);
      axios
        .post('/api/login', { nickname, password })
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
        .catch();
    },
    [nickname, password],
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
                <input type="text" id="nickname" name="nickname" value={nickname} onChange={onChangeNickname} />
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

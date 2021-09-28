import React, {useCallback, useState, VFC } from 'react';
import useSWR from 'swr';
import Layout from '@layouts/Layouts';
import useInput from '@pages/Signup/useinput';
import axios from 'axios';
import {Link} from 'react-router-dom';

const SignUp = () => {
  const [email,onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, ,setPassword] = useInput('');
  const [passwordCheck, , setPasswordCheck] = useInput('');
  const [signUpError, setSignUpError] = useState(false);
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const [mismatchError, setMismatchError] = useState(false);

  const onChangePassword = useCallback((e)=>{
    setPassword(e.target.value);
    setMismatchError(e.target.value !== passwordCheck);
  },[passwordCheck]);
  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setMismatchError(e.target.value !== password);
    },[password],
  );

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    if (!mismatchError){
      console.log('서버로 회원가입')
      setSignUpError(false);
      setSignUpSuccess(false);// 요청보내기전에 초기화
      axios.post('/api/savemember', {
        nickname,
        password, //이건 백에 물어봤음 인자 어케해 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      })
        .then( (response)=> {
          console.log(response);
          setSignUpSuccess(true);
        } ) //성공
        .catch( (error) => {
          console.log(error.response);
          setSignUpError(true);
        }) //실패
        .finally( () => {} )//성공하든 실패하든
    }
  },[nickname, password, passwordCheck,mismatchError]);

  return(
    <>
      <Layout>
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
          </label>
          <label id="password-check-label">
            <span>비밀번호 확인</span>
            <div>
              <input
                type="password"
                id="password-check"
                name="password-check"
                value={passwordCheck}
                onChange={onChangePasswordCheck}
              />
            </div>
            {mismatchError && <p>비밀번호가 일치하지 않습니다.</p>}
            {!nickname && <p>닉네임을 입력해주세요.</p>}
            {/*{signUpError && <p>이미 가입된 이메일입니다.</p>}*/}
            {signUpSuccess && <p>회원가입되었습니다! 로그인해주세요.</p>}
          </label>
          <button type="submit">회원가입</button>
        </form>
        <div>
          이미 회원이신가요?&nbsp;
          <Link to="/login">로그인 하러가기</Link>
        </div>
      </Layout>
    </>
  )
}
export default SignUp;
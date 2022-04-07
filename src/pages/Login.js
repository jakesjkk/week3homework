/*eslint-disable */

import React, { useState } from "react";
//elements 
import { Text, Input, Grid, Button } from "../elements";
//Cookies
import { getCookie, setCookie, deleteCookie } from "../shared/Cookie";

import { useDispatch } from "react-redux";
import {actionCreators as userActions} from "../redux/modules/user";


const Login = (props) => {
    const dispatch = useDispatch();

    const[id,setId] = useState('');
    const[pwd,setPwd] = useState('');

    const changeId = (e) => {
        setId(e.target.value);
    }
    
    const changePwd = (e) => {
        setPwd(e.target.value);
    }

    const login = () => {
        dispatch(userActions.loginAction({user_name:'steve'}));

    }

    return(
        <React.Fragment>
            <Grid padding="16px">
                <Text size="32px" bold> 로그인 </Text>
                <Grid padding="16px">
                    <Input value={id} onChange={changeId} label='아이디' palceholder='아이디를입력해주세요.' _onChange={()=>{ console.log('아이디를 입력하다.')}}></Input>
                </Grid>
                
                <Grid padding="16px">
                    <Input value={pwd} onChange={changePwd} label='패스워드' palceholder='패스워드를입력해주세요.' _onChange={()=>{ console.log('패스워드를 입력하다.')}}></Input>
                </Grid>

                <Button text="로그인하기" _onClick={()=>{ console.log('로그인 완료');  login(); }}></Button>

            </Grid>
        </React.Fragment>
    )
}

export default Login;


// 1-숙제 15분부터

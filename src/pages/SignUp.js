/*eslint-disable */

import React, { useState } from "react";
import { Grid, Text, Input, Button } from "../elements";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const SignUp = (props) => {
    const dispatch = useDispatch();

    const[id,setId] = useState('');
    const[pwd,setPwd] = useState('');
    const[pwd_check, setPwdCheck] = useState('');
    const[user_name,setUserName] = useState('');

    const signup = () => {

        if(id ===''|| pwd===''||user_name===''){
            return;
        }

        if(pwd !== pwd_check){
            return;
        }

        dispatch(userActions.signupFB(id,pwd,user_name))
    }



    return(
        <React.Fragment>
            <Grid padding="16px">
                <Text size="32px"></Text>

                <Grid padding="16px 0px">
                    <Input label="아이디" placeholder="아이디를 입력해주세요" _onChange={(e)=>{setId(e.target.value);}}></Input>
                </Grid>
                <Grid padding="16px 0px">
                    <Input label="닉네임" placeholder="닉네임을 입력해주세요" _onChange={(e)=>{setUserName(e.target.value)}}></Input>
                </Grid>
                
                <Grid padding="16px 0px">
                    <Input label="비밀번호" placeholder="비밀번호를 입력해주세요" _onChange={(e)=>{setPwd(e.target.value);}}></Input>
                </Grid>
                <Grid padding="16px 0px">
                    <Input label="비밀번호" placeholder="비밀번호를 다시 입력해주세요" _onChange={(e)=>{setPwdCheck(e.target.value);}}></Input>
                </Grid>
                <Button text="회원가입하기" _onClick={signup}></Button>

            </Grid>
        </React.Fragment>
    );
}

SignUp.defaultProps = {

}

export default SignUp;
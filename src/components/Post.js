/*eslint-disable */

import React from "react";

//elements
// import Grid from "../elements/Grid";
// import Image from "../elements/Image";
// import Text from "../elements/Text";

//elements 한번에 가져오기 ( elements_index.js에 숨겨놈)
import { Grid,Image, Text } from "../elements";

const Post = (props) => {

    return (
        <React.Fragment>
            <Grid>
                <Grid is_flex>
                    <Image shape="circle" src={props.src}></Image>
                    <Text bold>{props.user_info.user_name}</Text>
                    <Text>{props.insert_dt}</Text>
                </Grid>
                <Grid padding="16px">
                    <Text>{props.comments}</Text>
                </Grid>
                <Grid>
                    <Image shape="rectangle" src={props.src}></Image>
                </Grid>
                <Grid padding="16px">
                    <Text>댓글 {props.comments_cnt} 개</Text>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

Post.defaultProps = {
    user_info : {
        user_name : 'steve',
        user_profile : "../assets/stevejobs01.jpeg"
    },
        image_url : "https://img.etnews.com/news/article/2021/09/07/cms_temp_article_07111958521053.jpg" ,
        comments : '와 이게 아이폰13이야?',
        comments_cnt : 10,
        insert_dt : "2022-04-02 10:00:00",

}


export default Post;

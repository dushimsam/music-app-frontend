import React, {useState, useEffect} from "react";

import {DefaultLayout} from "../../layouts/DefaultPrivate";
import {RightSidebar} from "../../components/RightSidebar";
import {LeftSidebar} from "../../components/LeftSidebar";

import {PostDetails} from "../../components/PostDetails";
import {View} from "../../components/View";

import {isAuthed} from "../../middlewares/auth";
import NotFound from "../404";
import {postInterface} from "../../store/utils/post";
import {postsService, viewsService} from "../../services";
import PostService from "../../services/post.service";
import {APP_DETAILS} from "../../utils/constants";

export default function Post({post}) {
    const [views, setViews] = useState([]);

    if (!post) return <NotFound/>;

    useEffect(() => {
        (async () => {
            try {

                // let is_auth = await isAuthed();
                const res = await viewsService.get_all_by_post(post._id);
                setViews(res.data);
            } catch (e) {
                console.log(e);
            }
        })();
    }, [post]);

    const answered = (answer) => {
        setViews((answers) => [answer, ...answers]);
    };

    return (
        <DefaultLayout meta={{title: `${post.title} - ${APP_DETAILS.NAME_FULL}`}}>
        <div className={"container-fluid"}>
            <div className="row">
                <div className="d-none d-lg-block col-lg-3">
                    <LeftSidebar/>
                </div>
                <div className="col-12 col-lg-6 px-2">
                    <PostDetails question={post} answered={answered}/>
                    {views.length > 0 ? (<>
                        <div className="col-lg-12 mx-0 px-0">
                            <View view={views[0]} top/>
                        </div>
                        {views.map((answer, i) => {
                            if (i !== 0) return (<div
                                className="col-lg-12 mx-0 col-md-12 px-0"
                                key={i}
                            >
                                <View view={answer}/>
                            </div>);
                        })}
                    </>) : (<div className="text-center">
                        {" "}
                        No views yet, be the first to give yours.
                    </div>)}
                </div>
                <div className="d-none d-lg-block col-lg-3">
                    <RightSidebar/>
                </div>
            </div>
        </div>
    </DefaultLayout>);
}

const getPost = async (id) => {
    let {data} = await PostService.get(id);
    return data ? data : postInterface;
};

Post.getInitialProps = async ({query}) => {
    let post = await getPost(query.id);
    return {
        post,
    };
};

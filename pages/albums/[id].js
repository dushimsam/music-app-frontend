import React, {useState, useEffect} from "react";
import {Post} from "../../components/Post";
import {Club} from "../../components/Club";
import PageLayout from "../../layouts/Page";
import PostService from "../../services/post.service";
import ClubService from "../../services/club.service";
import {postInterface} from "../../store/utils/post";
import {APP_DETAILS} from "../../utils/constants";

export default function ClubPage({club}) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [clubs,setClub] = useState(null);

    useEffect(() => {

        console.log(club);

        const fetchData = async () => {
            // const res_club = await ClubService.get_by_name(club.name);
            // setClub(res_club.data);
            let res = await PostService.get_all_by_club_paginated(club._id);
            setPosts(res.data.docs);
            setLoading(false);
        };
        fetchData().then();
    }, [club]);

    const meta = {
        title: `Posts about  - ${APP_DETAILS.NAME_FULL}`,
    };

    return (<PageLayout meta={meta}>
            {loading && (<>
                    <Post loading={true}/>
                    <Post loading={true}/>
                </>)}
            {posts.map((post, i) => (<Post key={i} post={post} showInput={true}/>))}
        </PageLayout>);
}


const getClub = async (name) => {
    let {data} = await ClubService.get_by_name(name);
    return data ? data : null;
};

ClubPage.getInitialProps = async ({query}) => {
    let club = await getClub(query.id);
    return {
        club,
    };
};
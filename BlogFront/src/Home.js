import React, { useEffect, useState } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import PostLoadingComponent from "./components/PostLoading";
import Posts from "./components/Posts";

function Home(){
    const PostLoading = PostLoadingComponent(Posts);
    const [appState, setAppState] = useState({
        loading: false,
        posts: null,
    });

    useEffect(() => {
        setAppState({ loading:true});
        const apiUrl = `http://127.0.0.1:8000/api/`;
        fetch(apiUrl)
            .then ((data) => data.json())
            .then ((posts) => {
                setAppState ({ loading: false, posts:posts});
            });
    },[setAppState]);

    return (
        <div style={{textAlign:'center'}} className='App'>
            <Header/>
            <h1>Últimos Posts</h1>
            <PostLoading isLoading={appState.loading} posts={appState.posts}/>
            <Footer/>
        </div>
    )
    
}

export default Home;
import React from 'react';
import Posts from './posts.json';

class Home extends React.Component {
    state = {
        posts:{}
    };

  

    render(){
        console.log(Posts)
        return(
            <main className="main">
                <div className = 'post-publish'>
                    <textarea className = 'post-content' placeholder = 'Wpisz treść...'></textarea>
                    <button className='publish'>Opublikuj</button>
                </div>

            {Posts.map(({post, comments}) => 
                <div className='post' key={post.post_id}>
                    <p className = 'post-author'>{post.author}</p>
                    <div className='post-text'>{post.content}</div>
                    {/* <p className='comments-title'>Dodaj komentarz</p>
                    <div className='commets-add'>
                        <textarea placeholder='Dodaj komentarz...'></textarea>
                        <button>Dodaj</button>
                    </div> */}
                    <div className='comments'>
                        {/* Liczba komentarzy: {comments.length} */}
                        Liczba komentarzy: {comments.length}
                    </div>
                    <div>Zobacz całego posta -></div>
                </div>)}
            </main>
        )
    }
}
export default Home;
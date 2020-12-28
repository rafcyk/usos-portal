import React from 'react';
import Posts from './posts.json';
import Users from './components/Users';
import {Link} from 'react-router-dom';

import Arrow from './images/arrow.png';

class Home extends React.Component {
    state = {};

  

    render(){
        console.log(Posts)
        return(
            <>
                <main className="main">
                    <Users/>
                    <div className = 'post-publish'>
                        <textarea className = 'post-content' placeholder = 'Wpisz treść...'></textarea>
                        <button className='publish'>Opublikuj</button>
                    </div>

                    {Posts.map(({post, comments}) => 
                        <div className = 'post' key={post.post_id}>
                            <Link className='post-link' to = {`/home/${post.post_id}`} params = {{comments: comments}}>
                                <div className="post-author"><span>{post.author}</span></div>
                                <div className='post-text'>{post.content}</div>
                                <div className="comments-count">Liczba komentarzy: {comments.length}</div>
                                <p className ='post-next'>Zobacz posta <img src={Arrow} alt="arrow" className='arrow'/></p>
                            </Link>
                        </div>
                    )}
                </main>
            </>
        )
    }
}
export default Home;
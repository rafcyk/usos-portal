import React from 'react';

class Home extends React.Component {
    state = {
        posts:{}
    };

    componentDidMount(){
        fetch('posts.json', {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
        })
        .then(res => res.json())
        .then(data => {
            this.setState({
                posts: data
            })
            console.log(data)
        })
    }

    render(){
        return(
            <main className="main">
            </main>
        )
    }
}
export default Home;
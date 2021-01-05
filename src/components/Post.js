import React, { Component } from 'react'
import axios from 'axios'

export default class Post extends Component {
    state = {
        post : null
    }

    componentDidMount(){
        let id = this.props.match.params.postId;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id).then(res =>{
            this.setState({
                post : res.data
            })
        })
        
    }

    render() {
        const post = this.state.post ? (
            <div>
                <h4 className="center">{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
            </div>
        ) : (
            <div>Loading Card...</div>
        );
        return (
            <div className="container">
                {post}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) =>{
    let id = ownProps.match.params.postId;
    return {
        posts : state.props.find(ele => ele.id = id)
    }
}
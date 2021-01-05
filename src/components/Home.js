import React,{Component} from 'react';
//import axios from 'axios'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

class Home extends Component{
    
    /**
     * If Using react redux we dont want locat state and componentDidMount and axios also
     */

    /**
     * Get from outsource api and set to Component State
     
    state = {
        posts : []
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res =>{
            this.setState({
                posts : res.data.slice(0,10)
            })
        })
    }

     */

    render(){
        console.log(this.props)
        const {posts} = this.props;
        const postLists = posts.length ? (
            posts.map(dta =>{
                return(
                    <div className="post card" key={dta.id}>
                        <div className="card-content">
                        <Link to={'/'+dta.id}><span className="card-title">{dta.title}</span></Link>
                            <p>{dta.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No Data Yet !!!</div>
        );

        return(
            <div className="container">
                <h4 className="center"> Home </h4>
                {postLists}
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        posts : state.posts
    }
}

export default connect(mapStateToProps)(Home);

/**
 * connect()(Home)
 * ean Ippadi calling enral connect is fn and it return Higher order components 
 * So it is become HOC(home)
 */
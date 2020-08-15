import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../api/youtube.js'
import VideoList from './VideoList'

class App extends React.Component{

    state={videos:[]}

   onTermSubmit=async (searchText)=>{
        const response = await youtube.get('/search',{
            params:{
                q:searchText,
            }
        })

        this.setState({videos: response.data.items})
    }

    render(){
        return(
            <div className="ui container">
            <SearchBar onChange={this.onTermSubmit}/>
            <VideoList videos={this.state.videos}/>
            </div>
        )
    }

}

export default App
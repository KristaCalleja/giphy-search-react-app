import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';
import giphy from 'giphy-api';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            gifs:[],
            selectedGifId: "dL6xIDsmaLdbpTgNrJ/giphy.gif?cid=ecf05e47uw500kcw8wltsjv3a4tm49g7klykumt4owmjscvd"
        };
        this.search("covid");
    }

    search = (query) => {
        // API call
        giphy('DZxD2QBgyQ2ZGnqkOs6bUiwtynovV7cP')
        .search({
            q: query,
            rating: 'g',
            limit: 10
        },
            (error, result) => {
                this.setState({
                    gifs: result.data
            });
        });
    }
    
    render(){
        const gifs = [
            { id: "WeVUkhNoz0anZSJEiK/100.gif?cid=ecf05e471cuvnkl22ri63fd7jcrb9ph62dgwtxl39srfhl5c"},
            { id: "azHI5zpNIwTAe8vEIB/200w.gif?cid=ecf05e471cuvnkl22ri63fd7jcrb9ph62dgwtxl39srfhl5c"}
        ]
        return (
            <div>
                <div className="left-scene">
                    <SearchBar searchFunction={this.search} />
                    <div className="selected-gif">
                        <Gif id={this.state.selectedGifId}/>
                    </div>
                </div>
                <div className="right-scene">
                    <GifList gifs={this.state.gifs} />
                </div>
            </div>
        )
    }
}

export default App;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectSong} from '../Actions';

class SongList extends Component {
    render() {
        const songlist = this.props.song.map(song => {
            return (
                <li 
                    className="list-group-item d-flex justify-content-between" 
                    key={song.title}>
                    {song.title}
                    <button 
                        onClick= {() => this.props.selectSong(song)} 
                        className="btn btn-primary">
                    Select
                    </button>
                </li>
            )
        })
        return (
            <div >
                <h2>Song List</h2>
                <ul className="list-group list-group-flush" >
                    {songlist}
                </ul>
            </div>
        )
    }

}

const mapStateTOProps = (state) => {
    return ({
        song: state.song
    })
}
export default connect(mapStateTOProps, {selectSong})(SongList);

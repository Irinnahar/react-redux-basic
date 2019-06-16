import {combineReducers} from 'redux';

const songList = () => {
    return (
        [
            {title : 'Hello world', duration: '3.25'},
            {title : 'Barbie', duration: '2.35'},
            {title : 'Pink Passion', duration: '4.02'},
            {title : 'Lovely Dream', duration: '3.56'}
        ]
    )
}

const selectedSong = (selectSong=[], action) => {
    if(action.type === "SELECTED_SONG"){
        return action.payload
    } else {
        return selectSong
    }
}

export default combineReducers({
    song : songList,
    selectedSong : selectedSong
})
import React from 'react';
import {connect} from 'react-redux';

const Songdetails = (props) => {
    const {title, duration} = props.song;
    return (
        <div className="card" style={{width: '25rem', marginLeft: '20px'}}>
            <div className="card-body">
                <h5 className="card-title">
                    Song's Details
                </h5>
                <p className="card-text">
                    Title : {title}
                </p>
                <p className="card-text">
                    Details : {duration}
                </p>               
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        song : state.selectedSong
    })
}
export default connect(mapStateToProps)(Songdetails)
// export default Songdetails;

import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ mySelectedSong }) => {
    if (!mySelectedSong) {
        return <div>Select a song</div>
    }
    return (
        <div>
            <h3>Details for:</h3>
            <p>
                Title: {mySelectedSong.title}
                Duration: {mySelectedSong.duration}
            </p>
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log(state)
    return { mySelectedSong: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail);
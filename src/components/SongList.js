import React from "react";
import { connect } from "react-redux";

class SongList extends React.Component {
	render() {
		return <div>SONG LIST</div>;
	}
}

const mapStateToProps = state => {
	return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);

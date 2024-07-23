import { Link } from 'react-router-dom';

const TrackList = ({ trackList }) => {

    const tracks = trackList.map((track) => (
        <li key={track._id}>
            <Link to={`tracks/${track._id}`}>
                {track.title}
            </Link>
        </li>
    ));

    return (
        <>
            <h2>Tracks</h2>
            <ul>
                {tracks}
            </ul>
        </>
    );

};

export default TrackList;
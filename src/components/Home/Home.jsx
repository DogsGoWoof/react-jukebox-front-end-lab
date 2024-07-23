import TrackList from "../TrackList/TrackList";

const Home = ({ trackList }) => {


    return (
        <>
            <h1>Home</h1>
            <TrackList trackList={trackList} />
        </>
    );

};

export default Home;
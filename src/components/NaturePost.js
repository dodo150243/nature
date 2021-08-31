import './NaturePost.css';
function NaturePost(props) {
    const { nature, onBgClick } = props;
    return (
        <div className="nature-post">
            <div className="nature-bg" onClick={onBgClick} />
            <div className="nature-content">
            <div class="w3-display-topleft w3-black w3-padding">{nature.title}</div>
                <img src={nature.fullUrl} />
                {/* <h3>{nature.title}</h3> */}
            </div>
        </div>




    );
}

export default NaturePost;
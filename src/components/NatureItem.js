import './NatureItem.css';
function NatureItem(props) {
    const { nature, onNatureClick } = props;
    return (
        <div className="nature-item">
             <div className="nature-content">
            <div class="w3-display-topleft w3-black w3-padding">{nature.title}</div>
            <img src={nature.thumbnailUrl} onClick={() => onNatureClick(nature)} />
            {/* <h4>{nature.title}</h4> */}
            </div>
        </div>
    );
}

export default NatureItem; //เพื่อนำไปแสดงใน ไฟล์ App.js
export default function Sidebar(props) {
    const { showSide, handleDisplaySide, data } = props

    return (
        <div className="sidebar">

            <div onClick={handleDisplaySide} className="bgOverlay"></div>

            <div className="sideContent">
                <h2>{data?.title}</h2>   

                <div className="descContainer">
                    <p className="descTitle">{data?.date}</p>
                    <p>{data?.explanation}</p>
                </div>

                <button onClick={handleDisplaySide}>
                <i className="fa-solid fa-angle-right"></i>
                </button>
                
            </div>
        </div>
    )
}
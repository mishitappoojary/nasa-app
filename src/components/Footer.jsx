export default function Footer(props) {

    const today = new Date().toISOString().split("T")[0];
    const { handleDisplaySide, data, date, handleDateChange } = props

    return (
        <footer>
            <div className="bgGradient"> </div>

            <div>
                <h1>Powered by NASA APOD</h1>
                <h2>{data?.title}</h2>

                <div className="date-picker">
                <input 
                    type="date" 
                    id="date" 
                    value={date} 
                    onChange={handleDateChange} 
                    max={today}
                />
            </div>

            </div>

            <button onClick={handleDisplaySide}>
            <i className="fa-solid fa-circle-info"></i>
            </button>

        </footer>
    )
}
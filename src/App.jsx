import { useEffect, useState } from "react";
import Footer from "./components/Footer"
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"

function App() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [showSide, setShowSide] = useState(false)
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]); 

    function handleDisplaySide(){
        setShowSide(!showSide)
    }

    const NASA_K = import.meta.env.VITE_NASA_API_KEY;

    async function fetchAPIData(selectedDate) {
        setLoading(true);
        const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_K}&date=${selectedDate}`;
        
        try {
            const res = await fetch(url);
            const apiData = await res.json();

            setData(apiData);
            console.log('DATA\n', apiData);

        } catch (err) {
            console.log(err.message);

        } finally {
            setLoading(false);

        }
    }

    useEffect(() => {
        fetchAPIData(date);
    }, [date]);

    function handleDateChange(e) {
        setDate(e.target.value);
    }

    return (
        <>
            {data ? (<Main data={data} />) : (
                <div className='loadingState'>
                    <i className='fa-solid fa-meteor'></i>
                </div>
            )}

            {showSide && (
                <Sidebar data={data} 
                handleDisplaySide = {handleDisplaySide} />
            )}

            {data && (
                <Footer data={data} 
                handleDisplaySide = {handleDisplaySide}
                date={date}
                handleDateChange = {handleDateChange} />
            )}
        </>
    );
}

export default App;

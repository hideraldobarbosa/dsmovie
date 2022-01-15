import Pagination from "components/Pagination";
import MovieCard from "components/MovieCard";
import axios from "axios";
import { BASE_URL } from "utils/request";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";

function Listing() {

    const [pageNumer, setPageNumer] = useState(0);
 
    useEffect(() => 
    {
        axios.get(`${BASE_URL}/movies?size=12&page=1`)
            .then(response => {
                const data = response.data as MoviePage;
                console.log(data);
                setPageNumer(data.number)
            });
    }, [])

    return (
        <>
            <p>{pageNumer}</p>
            <Pagination/>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-b3">
                        <MovieCard/>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-b3">
                        <MovieCard/>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-b3">
                        <MovieCard/>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-b3">
                        <MovieCard/>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-b3">
                        <MovieCard/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Listing;

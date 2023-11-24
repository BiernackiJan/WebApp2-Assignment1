import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import { getSortedMovies } from "../../api/tmdb-api";
import { useQuery } from "react-query";


function MovieListPageTemplate({ movies, title, action }) {  
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [yearFilter, setYearFilter] = useState("");
  const [orderFilter, setOrderFilter] = useState("");
  const genreId = Number(genreFilter);

  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 23
  const startIndex = (currentPage - 1)*moviesPerPage
  const endIndex = startIndex + moviesPerPage


  let { data, error, isLoading, isError, refetch  } = useQuery('discover', () => {
    if (orderFilter) {
      return getSortedMovies(orderFilter);
    } else {
      return Promise.resolve( data = movies ); // Uses the passed-in movies when sortOrderFilter is empty
    }
  });


  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);

    window.scrollTo({
      behavior: 'smooth',
      top: 0,
      
    });
  };

  React.useEffect(() => {
    refetch();
  }, [orderFilter]);

  
  console.log(orderFilter)

  let displayedMovies = data
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    })
    .filter((m) => {
      return yearFilter !== "" ? m.release_date.includes(yearFilter) : true;
    });

  const paginatedMovies = displayedMovies.slice(startIndex, endIndex);

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else if (type === "genre") setGenreFilter(value);
    else if (type === "year") setYearFilter(value);
    else if (type === "order") setOrderFilter(value);
  };

  

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
            yearFilter={yearFilter}
            orderFilter={orderFilter}
          />
        </Grid>
        <MovieList action={action} movies={paginatedMovies}></MovieList>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px', fontSize: 'large' }}>
          <Pagination
            count={Math.ceil(displayedMovies.length / moviesPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            sx={{ "& .MuiPaginationItem-root": { fontSize: '1em' } }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
export default MovieListPageTemplate;
import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import img from '../../images/pexels-dziana-hasanbekava-5480827.jpg'
import { getGenres } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'


const formControl = 
  {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)"
  };

export default function FilterMoviesCard(props) {

  const { data, error, isLoading, isError } = useQuery("genres", getGenres);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const genres = data.genres;

  if (genres[0].name !== "All"){
    genres.unshift({ id: "0", name: "All" });
  }

  const sort = props.orderFilter
 
  console.log("sort", sort)
  // if (sort[0].name !== "All"){
  //   sort.unshift({ id:"0", name: "All" });
  // }

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value); // NEW
  };

  const handleTextChange = (e, props) => {
    handleChange(e, "name", e.target.value);
  };

  const handleGenreChange = (e) => {
    handleChange(e, "genre", e.target.value);
  };

  const handleYearChange = (e) => {
    handleChange(e, "year", e.target.value);
  };

  const handleOrderChange = (e) => {
    handleChange(e, "order", e.target.value);
  };

  return (
    <Card 
      sx={{
        maxWidth: 345,
        backgroundColor: "rgb(204, 204, 0)"
      }} 
      variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter the movies.
        </Typography>
        <TextField
          sx={{...formControl}}
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
          value={props.titleFilter}
          onChange={handleTextChange}
        />
        <FormControl sx={{...formControl}}>
          <Select
            labelId="genre-label"
            id="genre-select"
            defaultValue=""
            value={props.genreFilter}
            onChange={handleGenreChange}
          >
            {genres.map((genre) => {
              return (
                <MenuItem key={genre.id} value={genre.id}>
                  {genre.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <TextField
          sx={{ ...formControl }}
          id="filled-year"
          label="Year"
          type="number"
          variant="filled"
          value={props.yearFilter}
          onChange={handleYearChange}
        />
        <FormControl sx={{...formControl}}>
          <Select
            labelId="sort-filter"
            id="sort-select"
            defaultValue=" "
            value={props.orderFilter}
            onChange={handleOrderChange}
          >
            <MenuItem value=" "> All </MenuItem>
            <MenuItem value="&sort_by=popularity.asc"> Popularity Ascending </MenuItem>
            <MenuItem value="&sort_by=popularity.desc"> Popularity Descending </MenuItem>
            <MenuItem value="&sort_by=revenue.asc"> Revenue Ascending </MenuItem>
            <MenuItem value="&sort_by=revenue.desc"> Revenue Descending </MenuItem>
            <MenuItem value="&sort_by=primary_release_date.asc"> Primary Release Date Ascending </MenuItem>
            <MenuItem value="&sort_by=primary_release_date.desc"> Primary Release Date Descending </MenuItem>
            <MenuItem value="&sort_by=vote_average.asc"> Vote Average Ascending </MenuItem>
            <MenuItem value="&sort_by=vote_average.desc"> Vote Average Descending </MenuItem>
            <MenuItem value="&sort_by=vote_count.asc"> Vote Count Ascending </MenuItem>
            <MenuItem value="&sort_by=vote_count.desc"> Vote Count Descending </MenuItem>
          </Select>
        </FormControl>
      </CardContent>
      <CardMedia
        sx={{ height: 300 }}
        image={img}
        title="Filter"
      />
      <CardContent>
        <Typography variant="h5" component="h1">
        </Typography>
      </CardContent>
    </Card>
  );
}
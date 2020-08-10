import React, {Component, Fragment} from 'react';
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '', 
      movies: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.getMovies = this.getMovies.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  getMovies(event) {
    document.getElementById('list').style="display: flex";
    document.getElementById('credits-container').style="display: block";
    const APIKey = "8352f04eb7024b5a4dd28b1f096b629b";
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&language=en-US&query=${this.state.value}&page=1&include_adult=false`)
    .then(res => res.json())
    .then(
      (response) => {
        this.setState({
          movies: response.results
        });
      },
    event.preventDefault())
  }
  render() {
    return (
      <Fragment>
        <div className="container main">
          <form onSubmit={this.getMovies}>
            <input className="input-group flex-nowrap" type="text" autoComplete="off" value={this.state.value} onChange={this.handleChange} placeholder="Buscá una película" />
            <input className="btn search" type="submit" value="🔎" />
          </form>
        </div>
        <ul id="list" className="container">
          { this.state.movies.map(movie => (
            <li className="movie" key={movie.id}>
              <div className="poster" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path})`,
            }}></div>
              <h4 className="movie-title" title={movie.title}>{movie.title}</h4>
              <span className="year">{movie.release_date}</span>
            </li>
          )) }
        </ul>
        <div id="credits-container" className="container">
          <span className="credits">Hecho con ♥ por <a className="nuzze" href="https://nuzze.now.sh" target="_blank">Nuzze</a></span>
        </div>
      </Fragment>
    )
  }
}
export default Main
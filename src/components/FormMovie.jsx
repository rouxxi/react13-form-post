import React from "react";
import axios from "axios";
import './FormMovie.css';

class FormMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName: "",
      urlPoster: "",
      comment: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitChange = this.submitChange.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  submitChange(e) {
    e.preventDefault();
    const url = "https://post-a-form.herokuapp.com/api/movies/";
    axios
      .post(url, this.state)
      .then((res) => res.data)
      .then((res) => {
        alert(`movie as been send! ${res.id} !`);
      })
      .catch((e) => {
        console.error(e);
        alert(`Error, movie not send : ${e.message}`);
      });
  }

  render() {
    return (
      <form onSubmit={this.submitChange}>
          <div>
        <label htmlFor="movieName">
          Title
          <input
            id="movieName"
            name="movieName"
            type="text"
            value={this.state.movieName}
            onChange={this.handleChange}
          />
        </label>
        </div>
<div>
        <label htmlFor="urlPoster">
          Poster url
          <input
            id="urlPoster"
            name="urlPoster"
            type="text"
            value={this.state.urlPoster}
            onChange={this.handleChange}
          />
        </label>
        </div>
        <div>
        <label htmlFor="Comment">
          Comment
          <textarea
            id="comment"
            name="comment"
            cols="30"
            rows="10"
            value={this.state.comment}
            onChange={this.handleChange}
          ></textarea>
        </label>
        </div>
        <input type="submit" value="Send" />
      </form>
    );
  }
}

export default FormMovie;

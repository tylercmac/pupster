import React, { Component } from 'react';
import API from "../../utils/API";

export default class Discover extends Component {
  state = {
    random: ''
  }

  componentDidMount = () => {
    API.random()
      .then(res => this.setState({ random: res.data.message }))
      .catch(err => console.log(err));
  }

  likeBtn = () => {
    const randNum = Math.floor((Math.random() * 5) + 1)
    console.log(randNum);
    
    if (randNum === 2) {
      alert("You matched with this puppy!")
    }
    API.random()
      .then(res => this.setState({ random: res.data.message }))
      .catch(err => console.log(err));
  }

  dislikeBtn = () => {
    API.random()
      .then(res => this.setState({ random: res.data.message }))
      .catch(err => console.log(err));
  }

  render() {
    const styles = {
      imageCont: {
        backgroundImage: `url(${this.state.random})`,
        backgroundSize: 'cover',
        height: '20rem',
        width: '20rem',
        margin: '0 auto'
      }
    }
    return (
      <div>
        <div style={styles.imageCont} className='card'>
          <span>
            <button
              name="dislike"
              onClick={this.dislikeBtn}
            > Dislike </button>
            <button
              name="like"
              onClick={this.likeBtn}
            > Like </button>
          </span>
        </div>
      </div>
    )
  }
}


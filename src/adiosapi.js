import React from "react";
import axios from "axios";

class AlbumApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: []
    };
  }
  componentDidMount() {
    axios.get("http://localhost:3001/api/album").then(res => {
      this.setState({
        id: res.data
      });
    });
  }

  render() {
    return (
      <>
        {this.state.id.map(person => (
          <li>{person.artist}</li>
        ))}
      </>
    );
  }
}

export default AlbumApi;

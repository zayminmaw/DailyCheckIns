import React, { Component } from "react";

class FetchApi extends Component {
  state = {
    loading: true,
    people: [],
  };
  async componentDidMount() {
    const url = "https://api.randomuser.me/?results=5";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ people: data.results, loading: false });
  }
  render() {
    // if (this.state.loading) {
    //   return <div>Loading...</div>;
    // }
    // if (!this.state.person) {
    //   return <div>Loading...</div>;
    // }
    return (
      <div>
        {this.state.loading || !this.state.people.length ? (
          <div>Loading...</div>
        ) : (
          <>
            {this.state.people.map((person, i) => (
              <div key={`ID : ${i}`}>
                {/*key={person.login.uuid}*/}
                <div>{person.name.title}</div>
                <div>{person.name.first}</div>
                <div>{person.name.last}</div>
                <img src={person.picture.large} alt="profile" />
              </div>
            ))}
          </>
        )}
      </div>
    );
  }
}

export default FetchApi;

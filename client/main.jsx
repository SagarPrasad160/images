import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";

const baseURL = "https://api.unsplash.com/";

import ImageList from "./components/image_list";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }
  componentDidMount() {
    axios
      .get(`${baseURL}/photos/random`, {
        headers: {
          Authorization:
            "Client-ID " + "5zl2NXBmOrG_Ue77L8Tr-Z-GK9Owwc8D05vDIXiRSOg",
        },
        params: {
          count: 10,
        },
      })
      .then((response) => this.setState({ images: response.data }));
  }
  render() {
    return (
      <div className="container">
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

Meteor.startup(() => {
  const root = createRoot(document.getElementById("root"));
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});

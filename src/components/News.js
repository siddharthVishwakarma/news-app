import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/everything?q=technology&apiKey=be30d809c74544209e01fe977372609f";
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }

  render() {
    return (
      <div>
        <div className="container my-3">
          <h1>This is a news component</h1>
          <div className="row">
            {this.state.articles.map((ele) => {
              return (
                <div className="col-md-4 my-3 " key={ele.url}>
                  <NewsItem
                    title={ele.title ? ele.title.slice(0, 40) : ""}
                    description={
                      ele.description ? ele.description.slice(0, 80) : ""
                    }
                    imageUrl={ele.urlToImage}
                    newsUrl={ele.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default News;

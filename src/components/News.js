import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/everything?q=technology&apiKey=be30d809c74544209e01fe977372609f&page=1";
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }

  handelPrevoiousClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/everything?q=technology&apiKey=be30d809c74544209e01fe977372609f&page=${
      this.state.page - 1
    }`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };
  handelNextClick = async () => {
    console.log("Next");
    let url = `https://newsapi.org/v2/everything?q=technology&apiKey=be30d809c74544209e01fe977372609f&page=${
      this.state.page + 1
    }`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
    });
  };

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
          <div className="container d-flex justify-content-between mx-3">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.handelPrevoiousClick}
            >
              &larr; Previous
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.handelNextClick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;

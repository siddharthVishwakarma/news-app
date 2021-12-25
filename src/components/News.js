import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} News`;
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=be30d809c74544209e01fe977372609f&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({ articles: parsedData.articles, loading: false });
  }

  handelPrevoiousClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/everything?q=${
      this.props.category
    }&apiKey=be30d809c74544209e01fe977372609f&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };
  handelNextClick = async () => {
    console.log("Next");
    let url = `https://newsapi.org/v2/everything?q=${
      this.props.category
    }&apiKey=be30d809c74544209e01fe977372609f&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  render() {
    return (
      <div>
        <div className="container my-3">
          <h1 className="text-center my-3">
            News Hub - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
            News
          </h1>

          {this.state.loading && <Spinner />}
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
                    date={ele.publishedAt}
                    author={ele.author}
                    source={ele.source.name}
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
              disabled={this.state.page >= 10}
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

import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <h1>This is a news component</h1>
          <div class="row">
            <div class="col">
              <NewsItem />
            </div>
            <div class="col">
              <NewsItem />
            </div>
            <div class="col">
              <NewsItem />
            </div>
            <div class="col">
              <NewsItem />
            </div>
          </div>
          <div class="row my-3">
            <div class="col">
              <NewsItem />
            </div>
            <div class="col">
              <NewsItem />
            </div>
            <div class="col">
              <NewsItem />
            </div>
            <div class="col">
              <NewsItem />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;

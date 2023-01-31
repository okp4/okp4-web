import * as React from "react";
import Halo from "../../animations/Halo";
import Parallax from "../../animations/Parallax";
import IconArrowtr from "../../../assets/images/icons/arrow-tr.inline.svg";
import contentCommunity from "/content/pages/community/community.yaml";

const LatestNews = () => (
  <section className="latest_news">
    <Halo />
    <div className="wrapper">
      <div className="latest_news__content">
        <h3>{contentCommunity.news.title}</h3>

        <div className="community_news_cards">
          <div className="community_news_cards_content">
            <a
              href={contentCommunity.news.news1.url}
              className="community_news_cards_item"
              target="_blank"
              rel="noreferrer"
            >
              <p className="date">{contentCommunity.news.news1.date}</p>
              <p className="title">{contentCommunity.news.news1.title}</p>
              <p className="description">
                {contentCommunity.news.news1.content}
              </p>
              <div className="news_bottom_wrapper">
                <div className="tag">
                  <p>{contentCommunity.news.news1.tag}</p>
                </div>
                <IconArrowtr />
              </div>
            </a>
            <a
              href={contentCommunity.news.news2.url}
              className="community_news_cards_item"
              target="_blank"
              rel="noreferrer"
            >
              <p className="date">{contentCommunity.news.news2.date}</p>
              <p className="title">{contentCommunity.news.news2.title}</p>
              <p className="description">
                {contentCommunity.news.news2.content}
              </p>
              <div className="news_bottom_wrapper">
                <div className="tag">
                  <p>{contentCommunity.news.news2.tag}</p>
                </div>
                <IconArrowtr />
              </div>
            </a>

            <a
              href={contentCommunity.news.news3.url}
              className="community_news_cards_item"
              target="_blank"
              rel="noreferrer"
            >
              <p className="date">{contentCommunity.news.news3.date}</p>
              <p className="title">{contentCommunity.news.news3.title}</p>
              <p className="description">
                {contentCommunity.news.news3.content}
              </p>
              <div className="news_bottom_wrapper">
                <div className="tag">
                  <p>{contentCommunity.news.news3.tag}</p>
                </div>
                <IconArrowtr />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LatestNews;

import * as React from "react";
import IconArrowtr from "../../../../assets/images/icons/arrow-tr.inline.svg";
import contentCommunity from "/content/pages/interact/community.yaml";

const LatestNews = ({ posts }) => (
  <section className="latest_news">
    <div className="wrapper">
      <div className="latest_news__content">
        <h3 className="news_title">{contentCommunity.news.title}</h3>

        <div className="community_news_cards">
          <div className="community_news_cards_content">
            {posts.slice(0, 3).map((post) => (
              <a
                key={post.node.uniqueSlug}
                href={`${contentCommunity.news.url}${post.node.uniqueSlug}`}
                target="_blank"
                rel="noreferrer"
                className="community_news_cards_item--content"
              >
                <div className="community_news_cards_item">
                  <p className="date">{post.node.createdAt}</p>
                  <p className="title">{post.node.title}</p>
                  <p className="description">{post.node.virtuals.subtitle}</p>
                  <div className="news_bottom_wrapper">
                    <div className="tags">
                      {post.node.virtuals.tags.slice(0, 3).map((tag) => (
                        <div key={tag.name} className="tag">
                          <p>{tag.name}</p>
                        </div>
                      ))}
                    </div>
                    <IconArrowtr />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LatestNews;

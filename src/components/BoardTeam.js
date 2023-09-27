import React, { useMemo } from "react";
import contentFooter from "/content/transversals/footer.yaml";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const BoardTeam = () => {
  const team = useMemo(
    () => [
      {
        name: contentFooter.team.people[0].name,
        lastname: contentFooter.team.people[0].lastname,
        job: contentFooter.team.people[0].job,
        image: (
          <StaticImage
            className="team__member__image"
            src="../../content/images/people/team/emmanuel.webp"
            alt={contentFooter.team.people[0].alt}
          />
        ),
      },
      {
        name: contentFooter.team.people[1].name,
        lastname: contentFooter.team.people[1].lastname,
        job: contentFooter.team.people[1].job,
        image: (
          <StaticImage
            className="team__member__image"
            src="../../content/images/people/team/marine.webp"
            alt={contentFooter.team.people[1].alt}
          />
        ),
      },

      {
        name: contentFooter.team.people[2].name,
        lastname: contentFooter.team.people[2].lastname,
        job: contentFooter.team.people[2].job,
        image: (
          <StaticImage
            className="team__member__image"
            src="../../content/images/people/team/christophe.webp"
            alt={contentFooter.team.people[2].alt}
          />
        ),
      },
      {
        name: contentFooter.team.people[3].name,
        lastname: contentFooter.team.people[3].lastname,
        job: contentFooter.team.people[3].job,
        image: (
          <StaticImage
            className="team__member__image" // a changer
            src="../../content/images/people/team/theo.webp"
            alt={contentFooter.team.people[3].alt}
          />
        ),
      },
    ],
    []
  );

  return (
    <section className="team">
      <div className="team__wrapper">
        <p className="team__title">{contentFooter.team.title}</p>
        <div className="team__members__wrapper">
          {team.map(({ name, lastname, job, image }) => (
            <div className="team__members__container" key={name + lastname}>
              <div className="team__member__card" key={name + lastname}>
                <StaticImage
                  className="team__member__background"
                  src="../../content/images/people/card_background.webp"
                  alt=""
                />
                <span>{image}</span>
              </div>
              <div className="team__member__fullname">
                <p>
                  {name}{" "}
                  <span className="team__member__lastname">{lastname}</span>
                </p>
              </div>
              <p className="team__member__position"> {job} </p>
            </div>
          ))}
        </div>
        <Link
          to={contentFooter.team.button.link}
          className="blue__gradient__button"
        >
          <span>{contentFooter.team.button.name}</span>
        </Link>
      </div>
    </section>
  );
};

export default BoardTeam;

import React, { useMemo } from "react";
import contentFooter from "/content/transversals/footer.yaml";
import { StaticImage } from "gatsby-plugin-image";

const BoardTeam = () => {
  const team = useMemo(
    () => [
      {
        name: contentFooter.team.people[0].name,
        lastname: contentFooter.team.people[0].lastname,
        job: contentFooter.team.people[0].job,
        image: (
          <StaticImage
            className="person__image"
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
            className="person__image"
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
            className="person__image"
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
            className="person__image"
            src="../../content/images/people/team/theo.webp"
            alt={contentFooter.team.people[3].alt}
          />
        ),
      },
      {
        name: contentFooter.team.people[4].name,
        lastname: contentFooter.team.people[4].lastname,
        job: contentFooter.team.people[4].job,
        image: (
          <StaticImage
            className="person__image"
            src="../../content/images/people/team/arnaud.webp"
            alt={contentFooter.team.people[4].alt}
          />
        ),
      },
      {
        name: contentFooter.team.people[5].name,
        lastname: contentFooter.team.people[5].lastname,
        job: contentFooter.team.people[5].job,
        image: (
          <StaticImage
            className="person__image"
            src="../../content/images/people/team/julien.webp"
            alt={contentFooter.team.people[5].alt}
          />
        ),
      },
      {
        name: contentFooter.team.people[6].name,
        lastname: contentFooter.team.people[6].lastname,
        job: contentFooter.team.people[6].job,
        image: (
          <StaticImage
            className="person__image"
            src="../../content/images/people/team/mathieu.webp"
            alt={contentFooter.team.people[6].alt}
          />
        ),
      },
    ],
    []
  );

  return (
    <section className="people">
      <div className="people__wrapper">
        <h3 className="people__title">{contentFooter.team.title}</h3>
        <div className="people__infos__wrapper board__team">
          {team.map(({ name, lastname, job, image }) => (
            <div className="person__infos__container" key={name + lastname}>
              <div className="person__infos__card" key={name + lastname}>
                <StaticImage
                  className="person__card__background"
                  src="../../content/images/people/card_background.webp"
                  alt=""
                />
                <span>{image}</span>
              </div>
              <div className="person__fullname">
                <p>
                  {name} <span className="person__lastname">{lastname}</span>
                </p>
              </div>
              <p className="person__position"> {job} </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardTeam;

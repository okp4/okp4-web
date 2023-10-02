import React, { useMemo } from "react";
import content from "/content/pages/interact/ambassador-program.yaml";
import { GatsbyImage } from "gatsby-plugin-image";
import * as MediaManager from "../../../utils/MediaManager.js";
import Education from "../../../assets/images/icons/ambassador/education.inline.svg";
import Handshake from "../../../assets/images/icons/ambassador/handshake.inline.svg";
import Reward from "../../../assets/images/icons/ambassador/reward.inline.svg";
import IconArrowtr from "/src/assets/images/icons/arrow-tr.inline.svg";
import Document from "../../../assets/images/icons/ambassador/document.inline.svg";
import FloralOrnament from "../../../assets/images/icons/ambassador/floral_ornament.inline.svg";
import Hourglass from "../../../assets/images/icons/ambassador/hourglass.inline.svg";
import Mortarboard from "../../../assets/images/icons/ambassador/mortarboard.inline.svg";

import classNames from "classnames";

const AmbassadorProgram = ({ files }) => {
  const pillarBlocks = useMemo(
    () => [
      {
        icon: <Handshake />,
        title: content.reasons.blocks[0].title,
        description: content.reasons.blocks[0].text,
        label: content.reasons.blocks[0].label,
      },
      {
        icon: <Education />,
        title: content.reasons.blocks[1].title,
        description: content.reasons.blocks[1].text,
        label: content.reasons.blocks[1].label,
      },
      {
        icon: <Reward />,
        title: content.reasons.blocks[2].title,
        description: content.reasons.blocks[2].text,
        label: content.reasons.blocks[2].label,
      },
    ],
    []
  );

  const roleBlocks = useMemo(
    () => [
      {
        image: content.ambassadorProgram.cards[0].image,
        title: content.ambassadorProgram.cards[0].title,
        description: content.ambassadorProgram.cards[0].description,
        label: content.ambassadorProgram.cards[0].alt,
      },
      {
        image: content.ambassadorProgram.cards[1].image,
        title: content.ambassadorProgram.cards[1].title,
        description: content.ambassadorProgram.cards[1].description,
        label: content.ambassadorProgram.cards[1].alt,
      },
      {
        image: content.ambassadorProgram.cards[2].image,
        title: content.ambassadorProgram.cards[2].title,
        description: content.ambassadorProgram.cards[2].description,
        label: content.ambassadorProgram.cards[2].alt,
      },
      {
        image: content.ambassadorProgram.cards[3].image,
        title: content.ambassadorProgram.cards[3].title,
        description: content.ambassadorProgram.cards[3].description,
        label: content.ambassadorProgram.cards[3].alt,
      },
      {
        image: content.ambassadorProgram.cards[4].image,
        title: content.ambassadorProgram.cards[4].title,
        description: content.ambassadorProgram.cards[4].description,
        label: content.ambassadorProgram.cards[4].alt,
      },
      {
        image: content.ambassadorProgram.cards[5].image,
        title: content.ambassadorProgram.cards[5].title,
        description: content.ambassadorProgram.cards[5].description,
        label: content.ambassadorProgram.cards[5].alt,
      },
    ],
    []
  );

  const stepBlocks = useMemo(
    () => [
      {
        icon: <Mortarboard />,
        number: content.applicationSteps.steps[0].number,
        title: content.applicationSteps.steps[0].title,
        description: content.applicationSteps.steps[0].description,
        label: content.applicationSteps.steps[0].alt,
      },
      {
        icon: <Hourglass />,
        number: content.applicationSteps.steps[1].number,
        title: content.applicationSteps.steps[1].title,
        description: content.applicationSteps.steps[1].description,
        label: content.applicationSteps.steps[1].alt,
      },
      {
        icon: <Document />,
        number: content.applicationSteps.steps[2].number,
        title: content.applicationSteps.steps[2].title,
        description: content.applicationSteps.steps[2].description,
        label: content.applicationSteps.steps[2].alt,
      },
      {
        icon: <FloralOrnament />,
        number: content.applicationSteps.steps[3].number,
        title: content.applicationSteps.steps[3].title,
        description: content.applicationSteps.steps[3].description,
        label: content.applicationSteps.steps[3].alt,
      },
    ],
    []
  );
  return (
    <div>
      <div className="wrapper">
        <div className="ambassador_program">
          <div className="ambassador_program__join_us_part">
            <div className="ambassador_program__subject">
              {content.joinUs.subject}
            </div>
            <div className="ambassador_program__container">
              <h1 className="ambassador_program__title">
                {content.joinUs.title}
              </h1>

              <div className="ambassador_program__description_container">
                <p
                  className="ambassador_program__description"
                  dangerouslySetInnerHTML={{
                    __html: content.joinUs.description.paragraph1,
                  }}
                ></p>
                <p
                  className="ambassador_program__description"
                  dangerouslySetInnerHTML={{
                    __html: content.joinUs.description.paragraph2,
                  }}
                ></p>
              </div>
              <a
                href={content.joinUs.link}
                className="blue__gradient__button join"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{content.joinUs.button}</span>
              </a>
            </div>
            <div className="ambassador_program__image_wrapper">
              <GatsbyImage
                className="ambassador_program__image"
                image={MediaManager.GetImage(content.joinUs.image, files)}
                alt={content.joinUs.alt}
                loadambassador_program__roles__descriptioning="eager"
              />
            </div>
          </div>
          <div className="ambassador_program__reasons">
            <h1 className="ambassador_program__reasons__title">
              {content.reasons.title}
            </h1>
            <div className="ambassador_program__reasons__pillars">
              {pillarBlocks.map(({ title, description, label, icon }) => (
                <div
                  className={classNames(
                    "ambassador_program__reasons__pillar",
                    label
                  )}
                >
                  <div className="ambassador_program__reasons__pillar__icon">
                    {icon}
                  </div>
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
              ))}
            </div>
            <div className="ambassadors__halo" />
          </div>

          <div className="ambassador_program__roles">
            <h1 className="ambassador_program__roles__title">
              {content.ambassadorProgram.title}
            </h1>
            <p className="ambassador_program__roles__description">
              {content.ambassadorProgram.description}
            </p>
            <div className="ambassador_program__roles__cards">
              {roleBlocks.map(({ title, description, label, image }) => (
                <div
                  className={classNames(
                    "ambassador_program__role__card",
                    label
                  )}
                >
                  <div className="ambassador_program__image_wrapper">
                    <GatsbyImage
                      className="ambassador_program__image"
                      image={MediaManager.GetImage(image, files)}
                      alt={label}
                      loading="eager"
                    />
                  </div>
                  <div className="ambassador_program__role__text">
                    <h4 className="ambassador_program__role__title">{title}</h4>

                    <p className="ambassador_program__role__description">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: description,
                        }}
                      />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="ambassador_program__start_joining">
            <div className="ambassador_program__start_joining_text">
              <h1 className="ambassador_program__start_joining_title">
                {content.startToJoin.title}
              </h1>
              <p className="ambassador_program__start_joining__description">
                {content.startToJoin.zealyDescription}
              </p>
              <a
                href={content.startToJoin.link}
                className="blue__gradient__button start_joining"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="ambassador_program__start_joining_button_content">
                  <span>{content.startToJoin.button}</span>
                  <IconArrowtr className="arrow" />
                </div>
              </a>
            </div>
            <div className="ambassador_program__image_wrapper">
              <GatsbyImage
                className="ambassador_program__start_joining_image"
                image={MediaManager.GetImage(content.startToJoin.image, files)}
                alt={content.startToJoin.alt}
                loadambassador_program__roles__descriptioning="eager"
              />
            </div>
            <div className="ambassadors__hands__halo" />
          </div>

          <div className="ambassador_program__application_description">
            <div className="ambassador_program__application_description_text">
              <p> {content.applicationSteps.description.paragraph1}</p>
              <p> {content.applicationSteps.description.paragraph2}</p>
            </div>
            <div className="ambassador_program__application_steps_container">
              {stepBlocks.map(({ number, title, description, icon, alt }) => (
                <div className="ambassador_program__application_step">
                  <div className="ambassador_program__application_step_icon">
                    {icon}
                  </div>
                  <div className="ambassador_program__application_step_number">
                    {number}
                  </div>
                  <div className="ambassador_program__application_step_text">
                    <h4 className="ambassador_program__application_step_title">
                      {title}
                    </h4>

                    <p className="ambassador_program__application_step_description">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: description,
                        }}
                      />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="ambassador_program__adventure_start">
            <div className="ambassador_program__adventure_start_container">
              <h1 className="ambassador_program__adventure_start_title">
                {content.adventureStart.title}
              </h1>
              <div className="ambassador_program__adventure_start_description">
                {content.adventureStart.description}
              </div>
              <a
                href={content.joinUs.link}
                className="blue__gradient__button start"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{content.adventureStart.button}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmbassadorProgram;

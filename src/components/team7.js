import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './team7.css'

const Team7 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="team7-max-width thq-section-max-width">
        <div className="team7-section-title">
          <div className="team7-content1">
            <h2 className="team7-text10 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="team7-text23">Our Team</span>
                </Fragment>
              )}
            </h2>
            <p className="team7-text11 thq-body-large">
              {props.content2 ?? (
                <Fragment>
                  <span className="team7-text29">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="team7-content2">
          <div className="team7-card1">
            <img
              alt={props.member1Alt}
              src={props.member1Src}
              className="team7-placeholder-image1 thq-img-ratio-1-1 thq-img-round"
            />
            <div className="team7-content3">
              <div className="team7-title1">
                <span className="team7-text12 thq-body-small">
                  {props.member1 ?? (
                    <Fragment>
                      <span className="team7-text31">Full name</span>
                    </Fragment>
                  )}
                </span>
                <span className="team7-text13 thq-body-small">
                  {props.member1Job ?? (
                    <Fragment>
                      <span className="team7-text27">Job title</span>
                    </Fragment>
                  )}
                </span>
              </div>
              <span className="thq-body-small">
                {props.member1Content ?? (
                  <Fragment>
                    <span className="team7-text22">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="team7-card2">
            <img
              alt={props.member2Alt}
              src={props.member2Src}
              className="team7-placeholder-image2 thq-img-ratio-1-1 thq-img-round"
            />
            <div className="team7-content4">
              <div className="team7-title2">
                <span className="team7-text15 thq-body-small">
                  {props.member2 ?? (
                    <Fragment>
                      <span className="team7-text21">Full name</span>
                    </Fragment>
                  )}
                </span>
                <span className="team7-text16 thq-body-small">
                  {props.member2Job ?? (
                    <Fragment>
                      <span className="team7-text25">Job title</span>
                    </Fragment>
                  )}
                </span>
              </div>
              <span className="thq-body-small">
                {props.member2Content ?? (
                  <Fragment>
                    <span className="team7-text26">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="team7-social-icons"></div>
          </div>
          <div className="team7-card3">
            <img
              alt={props.member3Alt}
              src={props.member3Src}
              className="team7-placeholder-image3 thq-img-ratio-1-1 thq-img-round"
            />
            <div className="team7-content5">
              <div className="team7-title3">
                <span className="team7-text18 thq-body-small">
                  {props.member3 ?? (
                    <Fragment>
                      <span className="team7-text24">Full name</span>
                    </Fragment>
                  )}
                </span>
                <span className="team7-text19 thq-body-small">
                  {props.member3Job ?? (
                    <Fragment>
                      <span className="team7-text28">Job title</span>
                    </Fragment>
                  )}
                </span>
              </div>
              <span className="thq-body-small">
                {props.member3Content ?? (
                  <Fragment>
                    <span className="team7-text30">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Team7.defaultProps = {
  member2: undefined,
  member3Src:
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=1400',
  member1Content: undefined,
  member1Alt: 'Member Alt',
  heading1: undefined,
  member1Src:
    'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=1400',
  member3: undefined,
  member2Job: undefined,
  member2Content: undefined,
  member1Job: undefined,
  member2Src:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=1400',
  member3Job: undefined,
  content2: undefined,
  member2Alt: 'Member Alt',
  member3Content: undefined,
  member1: undefined,
  member3Alt: 'Member Alt',
}

Team7.propTypes = {
  member2: PropTypes.element,
  member3Src: PropTypes.string,
  member1Content: PropTypes.element,
  member1Alt: PropTypes.string,
  heading1: PropTypes.element,
  member1Src: PropTypes.string,
  member3: PropTypes.element,
  member2Job: PropTypes.element,
  member2Content: PropTypes.element,
  member1Job: PropTypes.element,
  member2Src: PropTypes.string,
  member3Job: PropTypes.element,
  content2: PropTypes.element,
  member2Alt: PropTypes.string,
  member3Content: PropTypes.element,
  member1: PropTypes.element,
  member3Alt: PropTypes.string,
}

export default Team7

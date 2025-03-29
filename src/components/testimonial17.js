import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container10">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="testimonial17-text36">Testimonials</span>
              </Fragment>
            )}
          </h2>
          <span className="testimonial17-text11 thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial17-text32">
                  Read what our clients have to say about their experience with
                  EarAI.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container13">
                    <strong className="thq-body-large">
                      {props.author1Name ?? (
                        <Fragment>
                          <span className="testimonial17-text27">John Doe</span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text26">
                            CEO, Tech Co.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text14 thq-body-small">
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text33">
                        EarAI has revolutionized the way we approach AI
                        solutions. Their innovative approach has truly set them
                        apart in the industry.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container15">
                    <strong className="thq-body-large">
                      {props.author2Name ?? (
                        <Fragment>
                          <span className="testimonial17-text34">
                            Jane Smith
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text24">
                            CTO, Data Corp.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text17 thq-body-small">
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text29">
                        Working with EarAI has been a game-changer for our
                        business. Their expertise and dedication have exceeded
                        our expectations.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container17">
                    <strong className="thq-body-large">
                      {props.author3Name ?? (
                        <Fragment>
                          <span className="testimonial17-text31">
                            David Lee
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text30">
                            Head of Operations, Innovate LLC
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text20 thq-body-small">
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text25">
                        I can&apos;t recommend EarAI enough. Their solutions
                        have streamlined our processes and improved efficiency
                        across the board.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card4"
              >
                <div className="testimonial17-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image4"
                  />
                  <div className="testimonial17-container19">
                    <strong className="thq-body-large">
                      {props.author4Name ?? (
                        <Fragment>
                          <span className="testimonial17-text28">
                            Sarah Johnson
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text35">
                            Marketing Director, Connect Inc.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text23 thq-body-small">
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text37">
                        EarAI&apos;s team is not only talented but also
                        incredibly responsive. They truly care about delivering
                        top-notch service.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  author2Position: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzAxODI4NHw&ixlib=rb-4.0.3&q=80&w=1080',
  review3: undefined,
  author1Position: undefined,
  author3Src:
    'https://images.unsplash.com/photo-1636041247125-6354b32c5fc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzAxODI4NHw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Alt: 'Image of Jane Smith',
  author4Alt: 'Image of Sarah Johnson',
  author1Src:
    'https://images.unsplash.com/photo-1554311884-415bfda22b47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzAxODI4M3w&ixlib=rb-4.0.3&q=80&w=1080',
  author1Name: undefined,
  author4Name: undefined,
  author1Alt: 'Image of John Doe',
  author4Src:
    'https://images.unsplash.com/photo-1441441247730-d09529166668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzAxODI4M3w&ixlib=rb-4.0.3&q=80&w=1080',
  review2: undefined,
  author3Position: undefined,
  author3Name: undefined,
  content1: undefined,
  review1: undefined,
  author2Name: undefined,
  author4Position: undefined,
  heading1: undefined,
  author3Alt: 'Image of David Lee',
  review4: undefined,
}

Testimonial17.propTypes = {
  author2Position: PropTypes.element,
  author2Src: PropTypes.string,
  review3: PropTypes.element,
  author1Position: PropTypes.element,
  author3Src: PropTypes.string,
  author2Alt: PropTypes.string,
  author4Alt: PropTypes.string,
  author1Src: PropTypes.string,
  author1Name: PropTypes.element,
  author4Name: PropTypes.element,
  author1Alt: PropTypes.string,
  author4Src: PropTypes.string,
  review2: PropTypes.element,
  author3Position: PropTypes.element,
  author3Name: PropTypes.element,
  content1: PropTypes.element,
  review1: PropTypes.element,
  author2Name: PropTypes.element,
  author4Position: PropTypes.element,
  heading1: PropTypes.element,
  author3Alt: PropTypes.string,
  review4: PropTypes.element,
}

export default Testimonial17

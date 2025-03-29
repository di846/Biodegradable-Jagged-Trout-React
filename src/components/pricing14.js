import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './pricing14.css'

const Pricing14 = (props) => {
  const [isMonthly, setIsMonthly] = useState(true)
  return (
    <div
      id={props.pricing14Id}
      className="pricing14-pricing23 thq-section-padding"
    >
      <div className="pricing14-max-width thq-section-max-width">
        <div className="pricing14-section-title">
          <div className="pricing14-content">
            <h2 className="pricing14-text100 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="pricing14-text175">Pricing plan</span>
                </Fragment>
              )}
            </h2>
            <p className="pricing14-text101 thq-body-large">
              {props.content2 ?? (
                <Fragment>
                  <span className="pricing14-text192">
                    Sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        {isMonthly && (
          <div className="pricing14-container1">
            <div className="pricing14-column1 thq-card">
              <div className="pricing14-price10">
                <div className="pricing14-price11">
                  <p className="pricing14-text102 thq-body-large">
                    {props.plan1 ?? (
                      <Fragment>
                        <span className="pricing14-text187">Essential</span>
                      </Fragment>
                    )}
                  </p>
                  <h3 className="pricing14-text103 thq-heading-3">
                    {props.plan1Price ?? (
                      <Fragment>
                        <span className="pricing14-text203">$99</span>
                      </Fragment>
                    )}
                  </h3>
                </div>
                <div className="pricing14-list1">
                  <div className="pricing14-list-item10">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature1 ?? (
                        <Fragment>
                          <span className="pricing14-text169">
                            Feature 1 of Essential plan
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item11">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature2 ?? (
                        <Fragment>
                          <span className="pricing14-text173">
                            Feature 2 of Essential plan
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item12">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature3 ?? (
                        <Fragment>
                          <span className="pricing14-text157">
                            Feature 3 of Essential plan
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item13">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature32 ?? (
                        <Fragment>
                          <span className="pricing14-text195">
                            Feature 3 of Essential plan
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing14-button1 thq-button-outline thq-button-animated">
                <span className="thq-body-small">
                  {props.plan1Action ?? (
                    <Fragment>
                      <span className="pricing14-text155">Get Started</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="pricing14-column2 thq-card">
              <div className="pricing14-price12">
                <div className="pricing14-price13">
                  <p className="pricing14-text109 thq-body-large">
                    {props.plan2 ?? (
                      <Fragment>
                        <span className="pricing14-text199">Pro</span>
                      </Fragment>
                    )}
                  </p>
                  <h3 className="pricing14-text110 thq-heading-3">
                    {props.plan2Price ?? (
                      <Fragment>
                        <span className="pricing14-text160">$199</span>
                      </Fragment>
                    )}
                  </h3>
                </div>
                <div className="pricing14-list2">
                  <div className="pricing14-list-item14">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature1 ?? (
                        <Fragment>
                          <span className="pricing14-text172">
                            Feature 1 of Pro plan
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item15">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature2 ?? (
                        <Fragment>
                          <span className="pricing14-text158">
                            Feature 2 of Pro plan
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item16">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature3 ?? (
                        <Fragment>
                          <span className="pricing14-text202">
                            Feature 3 of Pro plan
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item17">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature4 ?? (
                        <Fragment>
                          <span className="pricing14-text197">
                            Feature 4 of Pro plan
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item18">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature42 ?? (
                        <Fragment>
                          <span className="pricing14-text196">
                            Feature 4 of Pro plan
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing14-button2 thq-button-animated thq-button-filled">
                <span className="thq-body-small">
                  {props.plan2Action ?? (
                    <Fragment>
                      <span className="pricing14-text189">Get Started</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="pricing14-column3 thq-card">
              <div className="pricing14-price14">
                <div className="pricing14-price15">
                  <p className="pricing14-text117 thq-body-large">
                    {props.plan3 ?? (
                      <Fragment>
                        <span className="pricing14-text153">Enterprise</span>
                      </Fragment>
                    )}
                  </p>
                  <h3 className="pricing14-text118 thq-heading-3">
                    {props.plan3Price ?? (
                      <Fragment>
                        <span className="pricing14-text190">$499</span>
                      </Fragment>
                    )}
                  </h3>
                </div>
                <span>
                  {props.text ?? (
                    <Fragment>
                      <span className="pricing14-text183">Text</span>
                    </Fragment>
                  )}
                </span>
                <div className="pricing14-list3">
                  <div className="pricing14-list-item19">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature1 ?? (
                        <Fragment>
                          <span className="pricing14-text185">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item20">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature2 ?? (
                        <Fragment>
                          <span className="pricing14-text168">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item21">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature23 ?? (
                        <Fragment>
                          <span className="pricing14-text180">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item22">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature22 ?? (
                        <Fragment>
                          <span className="pricing14-text161">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item23">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature3 ?? (
                        <Fragment>
                          <span className="pricing14-text159">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item24">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature4 ?? (
                        <Fragment>
                          <span className="pricing14-text188">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item25">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature5 ?? (
                        <Fragment>
                          <span className="pricing14-text152">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing14-button3 thq-button-animated thq-button-filled">
                <span className="thq-body-small">
                  {props.plan3Action ?? (
                    <Fragment>
                      <span className="pricing14-text186">Get Started</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        )}
        {!isMonthly && (
          <div className="pricing14-container2">
            <div className="pricing14-column4 thq-card">
              <div className="pricing14-price16">
                <div className="pricing14-price17">
                  <span className="pricing14-text128 thq-body-large">
                    {props.plan11 ?? (
                      <Fragment>
                        <span className="pricing14-text163">Basic plan</span>
                      </Fragment>
                    )}
                  </span>
                  <h3 className="pricing14-text129 thq-heading-3">
                    {props.plan1Price1 ?? (
                      <Fragment>
                        <span className="pricing14-text154">$199/month</span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-large">
                    {props.plan1Yearly1 ?? (
                      <Fragment>
                        <span className="pricing14-text184">$1999/year</span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="pricing14-list4">
                  <div className="pricing14-list-item26">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature11 ?? (
                        <Fragment>
                          <span className="pricing14-text174">
                            Feature 11 of Essential plan
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item27">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature21 ?? (
                        <Fragment>
                          <span className="pricing14-text176">
                            Feature 21 of Essential plan
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item28">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature31 ?? (
                        <Fragment>
                          <span className="pricing14-text156">
                            Feature 31 of Essential plan
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing14-button4 thq-button-outline thq-button-animated">
                <span className="thq-body-small">
                  {props.plan1Action1 ?? (
                    <Fragment>
                      <span className="pricing14-text200">Get Started</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="pricing14-column5 thq-card">
              <div className="pricing14-price18">
                <div className="pricing14-price19">
                  <span className="pricing14-text135 thq-body-large">
                    {props.plan21 ?? (
                      <Fragment>
                        <span className="pricing14-text179">Business plan</span>
                      </Fragment>
                    )}
                  </span>
                  <h3 className="pricing14-text136 thq-heading-3">
                    {props.plan2Price1 ?? (
                      <Fragment>
                        <span className="pricing14-text165">$299/month</span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-large">
                    {props.plan2Yearly1 ?? (
                      <Fragment>
                        <span className="pricing14-text201">$2999/year</span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="pricing14-list5">
                  <div className="pricing14-list-item29">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature11 ?? (
                        <Fragment>
                          <span className="pricing14-text170">
                            Feature 11 of Pro plan
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item30">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature21 ?? (
                        <Fragment>
                          <span className="pricing14-text181">
                            Feature 21 of Pro plan
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item31">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature31 ?? (
                        <Fragment>
                          <span className="pricing14-text171">
                            Feature 31 of Pro plan
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item32">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature41 ?? (
                        <Fragment>
                          <span className="pricing14-text193">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing14-button5 thq-button-animated thq-button-filled">
                <span className="thq-body-small">
                  {props.plan2Action1 ?? (
                    <Fragment>
                      <span className="pricing14-text194">Get Started</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="pricing14-column6 thq-card">
              <div className="pricing14-price20">
                <div className="pricing14-price21">
                  <span className="pricing14-text143 thq-body-large">
                    {props.plan31 ?? (
                      <Fragment>
                        <span className="pricing14-text191">
                          Enterprise plan
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <h3 className="pricing14-text144 thq-heading-3">
                    {props.plan3Price1 ?? (
                      <Fragment>
                        <span className="pricing14-text166">$699/month</span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-large">
                    {props.plan3Yearly1 ?? (
                      <Fragment>
                        <span className="pricing14-text162">$6999/year</span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="pricing14-list6">
                  <div className="pricing14-list-item33">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature11 ?? (
                        <Fragment>
                          <span className="pricing14-text178">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item34">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature21 ?? (
                        <Fragment>
                          <span className="pricing14-text167">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item35">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature31 ?? (
                        <Fragment>
                          <span className="pricing14-text164">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item36">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature41 ?? (
                        <Fragment>
                          <span className="pricing14-text182">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item37">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature51 ?? (
                        <Fragment>
                          <span className="pricing14-text177">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing14-button6 thq-button-animated thq-button-filled">
                <span className="thq-body-small">
                  {props.plan3Action1 ?? (
                    <Fragment>
                      <span className="pricing14-text198">Get Started</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

Pricing14.defaultProps = {
  plan3Feature5: undefined,
  plan3: undefined,
  plan1Price1: undefined,
  plan1Action: undefined,
  plan1Feature31: undefined,
  plan1Feature3: undefined,
  plan2Feature2: undefined,
  plan3Feature3: undefined,
  plan2Price: undefined,
  plan3Feature22: undefined,
  plan3Yearly1: undefined,
  plan11: undefined,
  plan3Feature31: undefined,
  plan2Price1: undefined,
  plan3Price1: undefined,
  plan3Feature21: undefined,
  plan3Feature2: undefined,
  pricing14Id: '',
  plan1Feature1: undefined,
  plan2Feature11: undefined,
  plan2Feature31: undefined,
  plan2Feature1: undefined,
  plan1Feature2: undefined,
  plan1Feature11: undefined,
  heading1: undefined,
  plan1Feature21: undefined,
  plan3Feature51: undefined,
  plan3Feature11: undefined,
  plan21: undefined,
  plan3Feature23: undefined,
  plan2Feature21: undefined,
  plan3Feature41: undefined,
  text: undefined,
  plan1Yearly1: undefined,
  plan3Feature1: undefined,
  plan3Action: undefined,
  plan1: undefined,
  plan3Feature4: undefined,
  plan2Action: undefined,
  plan3Price: undefined,
  plan31: undefined,
  content2: undefined,
  plan2Feature41: undefined,
  plan2Action1: undefined,
  plan1Feature32: undefined,
  plan2Feature42: undefined,
  plan2Feature4: undefined,
  plan3Action1: undefined,
  plan2: undefined,
  plan1Action1: undefined,
  plan2Yearly1: undefined,
  plan2Feature3: undefined,
  plan1Price: undefined,
}

Pricing14.propTypes = {
  plan3Feature5: PropTypes.element,
  plan3: PropTypes.element,
  plan1Price1: PropTypes.element,
  plan1Action: PropTypes.element,
  plan1Feature31: PropTypes.element,
  plan1Feature3: PropTypes.element,
  plan2Feature2: PropTypes.element,
  plan3Feature3: PropTypes.element,
  plan2Price: PropTypes.element,
  plan3Feature22: PropTypes.element,
  plan3Yearly1: PropTypes.element,
  plan11: PropTypes.element,
  plan3Feature31: PropTypes.element,
  plan2Price1: PropTypes.element,
  plan3Price1: PropTypes.element,
  plan3Feature21: PropTypes.element,
  plan3Feature2: PropTypes.element,
  pricing14Id: PropTypes.string,
  plan1Feature1: PropTypes.element,
  plan2Feature11: PropTypes.element,
  plan2Feature31: PropTypes.element,
  plan2Feature1: PropTypes.element,
  plan1Feature2: PropTypes.element,
  plan1Feature11: PropTypes.element,
  heading1: PropTypes.element,
  plan1Feature21: PropTypes.element,
  plan3Feature51: PropTypes.element,
  plan3Feature11: PropTypes.element,
  plan21: PropTypes.element,
  plan3Feature23: PropTypes.element,
  plan2Feature21: PropTypes.element,
  plan3Feature41: PropTypes.element,
  text: PropTypes.element,
  plan1Yearly1: PropTypes.element,
  plan3Feature1: PropTypes.element,
  plan3Action: PropTypes.element,
  plan1: PropTypes.element,
  plan3Feature4: PropTypes.element,
  plan2Action: PropTypes.element,
  plan3Price: PropTypes.element,
  plan31: PropTypes.element,
  content2: PropTypes.element,
  plan2Feature41: PropTypes.element,
  plan2Action1: PropTypes.element,
  plan1Feature32: PropTypes.element,
  plan2Feature42: PropTypes.element,
  plan2Feature4: PropTypes.element,
  plan3Action1: PropTypes.element,
  plan2: PropTypes.element,
  plan1Action1: PropTypes.element,
  plan2Yearly1: PropTypes.element,
  plan2Feature3: PropTypes.element,
  plan1Price: PropTypes.element,
}

export default Pricing14

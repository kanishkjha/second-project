import React, { useState } from "react";
import "../styles/Job.css";
import img from "../assets/horn-sound.png";
import JobPosting from "../components/JobPosting";

export default function Job() {
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);
  const [state4, setState4] = useState(false);
  const [state5, setState5] = useState(false);
  const [state6, setState6] = useState(false);

  return (
    <div className="job">
      <div className="horn">
        <div>
          <h2>Find your dream engagement quickly.</h2>
        </div>
        <div className="image-container">
          <img src={img} alt="" />
        </div>
      </div>

      <div className="search">
        <form>
          <select className="form-search" name="engagement">
            <option value="" disabled selected hidden>
              Engagement
            </option>
            <option value="">Bussiness Analyst</option>
            <option value="">Consultant</option>
            <option value="">Financial Risk Management</option>
            <option value="">Wealth Management Expert</option>
          </select>

          <select className="form-search" name="" id="">
            <option value="" disabled selected hidden>
              Spacialization
            </option>
            <option value="">Commerce & Accounting</option>
            <option value="">Real Estate</option>
            <option value="">Consulting</option>
            <option value="">Investment Guidance</option>
          </select>

          <select className="form-search" name="" id="">
            <option value="" disabled selected hidden>
              All location
            </option>
            <option value="">Mumbai</option>
            <option value="">Bangalore</option>
            <option value="">Delhi</option>
            <option value="">Chennai</option>
          </select>

          <button>Search</button>
        </form>

        <div className="filter">
          <div className="filter-bar">
            <h2>Filter</h2>
            <div>
              <p>Category</p>
              {!state1 && (
                <button className="first" onClick={() => setState1(!state1)}>
                  +
                </button>
              )}
              {state1 && (
                <button
                  style={{ marginLeft: state1 ? "auto" : "" }}
                  onClick={() => setState1(!state1)}
                >
                  -
                </button>
              )}
            </div>
            {state1 && (
              <div className="label-wrapper">
                <label htmlFor="">
                  Technical
                  <input type="checkbox" name="" id="" />
                </label>
                <label htmlFor="">
                  Technical
                  <input type="checkbox" name="" id="" />
                </label>
                <label htmlFor="">
                  R&D
                  <input type="checkbox" name="" id="" />
                </label>
                <label htmlFor="">
                  Technical
                  <input type="checkbox" name="" id="" />
                </label>
                <label htmlFor="">
                  Technical
                  <input type="checkbox" name="" id="" />
                </label>
                <label htmlFor="">
                  R&D
                  <input type="checkbox" name="" id="" />
                </label>
                <label htmlFor="">
                  Technical
                  <input type="checkbox" name="" id="" />
                </label>
                <label htmlFor="">
                  Technical
                  <input type="checkbox" name="" id="" />
                </label>
                <label htmlFor="">
                  R&D
                  <input type="checkbox" name="" id="" />
                </label>
              </div>
            )}

            <div>
              <p>Engagement type</p>
              {!state2 && (
                <button className="first" onClick={() => setState2(!state2)}>
                  +
                </button>
              )}
              {state2 && (
                <button
                  style={{ marginLeft: state2 ? "auto" : "" }}
                  onClick={() => setState2(!state2)}
                >
                  -
                </button>
              )}
            </div>
            {state2 && (
              <div className="label-wrapper">
                <label htmlFor="">
                  Technical
                  <input type="checkbox" name="" id="" />
                </label>
                <label htmlFor="">
                  Technical
                  <input type="checkbox" name="" id="" />
                </label>
                <label htmlFor="">
                  R&D
                  <input type="checkbox" name="" id="" />
                </label>
                <label htmlFor="">
                  Technical
                  <input type="checkbox" name="" id="" />
                </label>
                <label htmlFor="">
                  Technical
                  <input type="checkbox" name="" id="" />
                </label>
                <label htmlFor="">
                  R&D
                  <input type="checkbox" name="" id="" />
                </label>
                <label htmlFor="">
                  Technical
                  <input type="checkbox" name="" id="" />
                </label>
                <label htmlFor="">
                  Technical
                  <input type="checkbox" name="" id="" />
                </label>
                <label htmlFor="">
                  R&D
                  <input type="checkbox" name="" id="" />
                </label>
              </div>
            )}

            <div>
              <p>Organization</p>
              {!state3 && (
                <button className="first" onClick={() => setState3(!state3)}>
                  +
                </button>
              )}
              {state3 && (
                <button
                  style={{ marginLeft: state3 ? "auto" : "" }}
                  onClick={() => setState3(!state3)}
                >
                  -
                </button>
              )}
            </div>
            {state3 && (
              <div className="label-wrapper">
                <label htmlFor="">
                  Technical
                  <input type="checkbox" name="" id="" />
                </label>
                <label htmlFor="">
                  Technical
                  <input type="checkbox" name="" id="" />
                </label>
                <label htmlFor="">
                  R&D
                  <input type="checkbox" name="" id="" />
                </label>
                <label htmlFor="">
                  Technical
                  <input type="checkbox" name="" id="" />
                </label>
                <label htmlFor="">
                  Technical
                  <input type="checkbox" name="" id="" />
                </label>
                <label htmlFor="">
                  R&D
                  <input type="checkbox" name="" id="" />
                </label>
                <label htmlFor="">
                  Technical
                  <input type="checkbox" name="" id="" />
                </label>
                <label htmlFor="">
                  Technical
                  <input type="checkbox" name="" id="" />
                </label>
                <label htmlFor="">
                  R&D
                  <input type="checkbox" name="" id="" />
                </label>
              </div>
            )}

            <div>
              <p>Sector</p>
              {!state4 && (
                <button className="first" onClick={() => setState4(!state4)}>
                  +
                </button>
              )}
              {state4 && (
                <button
                  style={{ marginLeft: state4 ? "auto" : "" }}
                  onClick={() => setState4(!state4)}
                >
                  -
                </button>
              )}
            </div>
            {state4 && (
              <div className="label-wrapper">
                <label htmlFor="">
                  Technical
                  <input type="checkbox" name="" id="" />
                </label>
                <label htmlFor="">
                  Technical
                  <input type="checkbox" name="" id="" />
                </label>
                <label htmlFor="">
                  R&D
                  <input type="checkbox" name="" id="" />
                </label>
                <label htmlFor="">
                  Technical
                  <input type="checkbox" name="" id="" />
                </label>
                <label htmlFor="">
                  Technical
                  <input type="checkbox" name="" id="" />
                </label>
                <label htmlFor="">
                  R&D
                  <input type="checkbox" name="" id="" />
                </label>
                <label htmlFor="">
                  Technical
                  <input type="checkbox" name="" id="" />
                </label>
                <label htmlFor="">
                  Technical
                  <input type="checkbox" name="" id="" />
                </label>
                <label htmlFor="">
                  R&D
                  <input type="checkbox" name="" id="" />
                </label>
              </div>
            )}

            <div>
              <p>Local preference</p>
              {!state5 && (
                <button className="first" onClick={() => setState5(!state5)}>
                  +
                </button>
              )}
              {state5 && (
                <button
                  style={{ marginLeft: state5 ? "auto" : "" }}
                  onClick={() => setState5(!state5)}
                >
                  -
                </button>
              )}
            </div>
            {state5 && (
              <div className="label-wrapper">
                <label htmlFor="">
                  Technical
                  <input type="checkbox" name="" id="" />
                </label>
                <label htmlFor="">
                  Technical
                  <input type="checkbox" name="" id="" />
                </label>
                <label htmlFor="">
                  R&D
                  <input type="checkbox" name="" id="" />
                </label>
                <label htmlFor="">
                  Technical
                  <input type="checkbox" name="" id="" />
                </label>
                <label htmlFor="">
                  Technical
                  <input type="checkbox" name="" id="" />
                </label>
                <label htmlFor="">
                  R&D
                  <input type="checkbox" name="" id="" />
                </label>
                <label htmlFor="">
                  Technical
                  <input type="checkbox" name="" id="" />
                </label>
                <label htmlFor="">
                  Technical
                  <input type="checkbox" name="" id="" />
                </label>
                <label htmlFor="">
                  R&D
                  <input type="checkbox" name="" id="" />
                </label>
              </div>
            )}

            <div>
              <p>Compensation</p>
              {!state6 && (
                <button className="first" onClick={() => setState6(!state6)}>
                  +
                </button>
              )}
              {state6 && (
                <button
                  style={{ marginLeft: state6 ? "auto" : "" }}
                  onClick={() => setState6(!state6)}
                >
                  -
                </button>
              )}
            </div>
            {state6 && (
              <div className="label-wrapper">
                <label htmlFor="">
                  Technical
                  <input type="checkbox" name="" id="" />
                </label>
                <label htmlFor="">
                  Technical
                  <input type="checkbox" name="" id="" />
                </label>
                <label htmlFor="">
                  R&D
                  <input type="checkbox" name="" id="" />
                </label>
                <label htmlFor="">
                  Technical
                  <input type="checkbox" name="" id="" />
                </label>
                <label htmlFor="">
                  Technical
                  <input type="checkbox" name="" id="" />
                </label>
                <label htmlFor="">
                  R&D
                  <input type="checkbox" name="" id="" />
                </label>
                <label htmlFor="">
                  Technical
                  <input type="checkbox" name="" id="" />
                </label>
                <label htmlFor="">
                  Technical
                  <input type="checkbox" name="" id="" />
                </label>
                <label htmlFor="">
                  R&D
                  <input type="checkbox" name="" id="" />
                </label>
              </div>
            )}
          </div>
          <div className="job-posting">
            <div className="upper">
              <h3 className="active">Published Engagements</h3>
              <h3>Other Engagements</h3>
              <p>
                <span>Sort by freshness:</span> Last 2 Months
              </p>
            </div>
            <JobPosting />
          </div>
        </div>
      </div>
    </div>
  );
}

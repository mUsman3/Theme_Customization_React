import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography as MuiTypography } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { IconName } from 'react-icons/fc';

const Typography = () => {
  const controllerOptions = [1, 2, 3, 4, 5, 6];
  const [showControllers, setShowControllers] = useState(controllerOptions[0]);

  const serverOptions = [1, 2, 3, 4, 5, 6];
  const [showServers, setshowServers] = useState(serverOptions[0]);

  const renderCards = () => {
    return controllerOptions.map(option => {
      if (option > showControllers) {
        // console.log('matched');
        return;
      }

      return (
        <div
          className="card  bg-light mb-3"
          key={option}
          style={{ width: '25rem', margin: '0 auto', float: 'none' }}
        >
          <div className="card-body">
          <h5
              className="card-title"
              style={{ marginLeft: 20 }}
            >
              <b> Change Hardware Config</b>
            </h5>
            <div style={{ marginLeft: 30 }}>
              <p className="card-text">
                <label
                  htmlFor="quantity"
                  style={{ marginLeft: 20 }}
                >
                  CPU
                </label>
                <select style={{ marginLeft: 50 }}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>{' '}
                <b style={{marginLeft:100}}> Socket(s) </b>
                <br />
                <label
                  htmlFor="quantity"
                  style={{ marginLeft: 20 }}
                >
                  CORE
                </label>
                <select style={{ marginLeft: 38 }}>
                  <option>2</option>
                  <option>4</option>
                  <option>6</option>
                  <option>8</option>
                  <option>10</option>
                </select>{' '}
                <b style={{marginLeft:91}}> Cores </b>
                <br />
                <label
                  htmlFor="quantity"
                  style={{ marginLeft: 20 }}
                >
                  RAM
                </label>
                <select style={{ marginLeft: 48 }}>
                  <option>4</option>
                  <option>8</option>
                  <option>16</option>
                  <option>32</option>
                  <option>64</option>
                </select>{' '}
                <b style={{marginLeft:92}}> GB </b>
                <br />
                <svg
                  className="bi bi-plus-circle"
                  fill="currentColor"
                  height="1em"
                  viewBox="0 0 16 16"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"
                    fillRule="evenodd"
                  />
                  <path
                    d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"
                    fillRule="evenodd"
                  />
                  <path
                    d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                    fillRule="evenodd"
                  />
                </svg>
                <label
                  htmlFor="quantity"
                  style={{ marginLeft: 4 }}
                >
                  HDD
                </label>
                <select style={{ marginLeft: 49 }}>
                  <option>64</option>
                  <option>128</option>
                  <option>256</option>
                  <option>512</option>
                  <option>1024</option>
                </select>{' '}
                <b style={{marginLeft:75}}> GB </b>
                <br />
                <svg
                  className="bi bi-plus-circle"
                  fill="currentColor"
                  height="1em"
                  viewBox="0 0 16 16"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"
                    fillRule="evenodd"
                  />
                  <path
                    d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"
                    fillRule="evenodd"
                  />
                  <path
                    d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                    fillRule="evenodd"
                  />
                </svg>{' '}
                Hardware
              </p>
            </div>
          </div>
        </div>
      );
    });
  };

  //server
  const renderServerCards = () => {
    return serverOptions.map(option => {
      if (option > showServers) {
        // console.log('matched');
        return;
      }

      return (
        <div
          className="card  bg-light mb-3"
          key={option}
          style={{ width: '25rem', margin: '0 auto', float: 'none' }}
        >
          <div className="card-body">
            <h5
              className="card-title"
              style={{ marginLeft: 20 }}
            >
              <b> Change Hardware Config</b>
            </h5>
            <div style={{ marginLeft: 30 }}>
              <p className="card-text">
                <label
                  htmlFor="quantity"
                  style={{ marginLeft: 20 }}
                >
                  CPU
                </label>
                <select style={{ marginLeft: 50 }}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>{' '}
               <b style={{marginLeft:100}}> Socket(s) </b>
                <br />
                <label
                  htmlFor="quantity"
                  style={{ marginLeft: 20 }}
                >
                  CORE
                </label>
                <select style={{ marginLeft: 38 }}>
                  <option>2</option>
                  <option>4</option>
                  <option>6</option>
                  <option>8</option>
                  <option>10</option>
                </select>{' '}
                <b style={{marginLeft:91}}> Cores </b>
                <br />
                <label
                  htmlFor="quantity"
                  style={{ marginLeft: 20 }}
                >
                  RAM
                </label>
                <select style={{ marginLeft: 48 }}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>{' '}
                <b style={{marginLeft:101}}> GB </b>
                <br />
                {/* <label htmlFor="quantity">HDD</label>
                <select style={{ marginLeft: 49 }}>
                  <option>64</option>
                  <option>128</option>
                  <option>256</option>
                  <option>512</option>
                  <option>1024</option>
                </select>{' '}
                GB
                <br />
                Hardware */}
                <svg
                  className="bi bi-plus-circle"
                  fill="currentColor"
                  height="1em"
                  viewBox="0 0 16 16"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"
                    fillRule="evenodd"
                  />
                  <path
                    d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"
                    fillRule="evenodd"
                  />
                  <path
                    d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                    fillRule="evenodd"
                  />
                </svg>
                <label
                  htmlFor="quantity"
                  style={{ marginLeft: 4 }}
                >
                  HDD
                </label>
                <select style={{ marginLeft: 49 }}>
                  <option>64</option>
                  <option>128</option>
                  <option>256</option>
                  <option>512</option>
                  <option>1024</option>
                </select>{' '}
                <b style={{marginLeft:75}}> GB </b>
                <br />
                <svg
                  className="bi bi-plus-circle"
                  fill="currentColor"
                  height="1em"
                  viewBox="0 0 16 16"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"
                    fillRule="evenodd"
                  />
                  <path
                    d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"
                    fillRule="evenodd"
                  />
                  <path
                    d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                    fillRule="evenodd"
                  />
                </svg>{' '}
                Hardware
              </p>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div>
      <h2 style={{ color: '#19B364' }}>DEPLOY INFRASTRUCTURE</h2>
      <br />

      <div>
        <h6 style={{ marginLeft: 30 }}>
          LOAD CONFIG XML
          <input
            id="myFile"
            name="filename"
            style={{ marginLeft: 92 }}
            type="file"
          />
        </h6>

        {/* <div style={{display: table}}>
        <label style={{display: table-cell, width: 80}}>Text</label>
        <input type="file" style={{display:table-cell ,width: 100}}/> 
    </div> */}

        <br />

        <h6 style={{ marginLeft: 30 }}>
          Choose Client
          <input
            style={{ marginLeft: 138, color: '#10055D' }}
            type="text"
          />
        </h6>
      </div>
      <br />
      <hr />
      <h3 style={{ color: '#19B364' }}>1) Active Directory Config</h3>
      <br />
      <div style={{ marginLeft: 30 }}>
        <b>FQDN </b>
        <svg
          className="bi bi-plus-circle"
          fill="currentColor"
          height="1em"
          style={{ marginLeft: 120 }}
          viewBox="0 0 16 16"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"
            fillRule="evenodd"
          />
          <path
            d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"
            fillRule="evenodd"
          />
          <path
            d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            fillRule="evenodd"
          />
        </svg>{' '}
        <b style={{ marginLeft: 10 }}> Add prefix </b>
        <input
          placeholder="ad"
          style={{ marginLeft: 20 }}
          type="text"
        />{' '}
        <svg
          className="bi bi-dot"
          fill="currentColor"
          height="1em"
          viewBox="0 0 16 16"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
            fillRule="evenodd"
          />
        </svg>
        <input
          placeholder="domain"
          type="text"
        />{' '}
        <svg
          className="bi bi-dot"
          fill="currentColor"
          height="1em"
          viewBox="0 0 16 16"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
            fillRule="evenodd"
          />
        </svg>
        <input
          placeholder="tld"
          type="text"
        />
      </div>
      <br />

      <div style={{ marginLeft: 30 }}>
        <b> NETBIOS Name </b>
        <input
          placeholder="ad"
          style={{ marginLeft: 180 }}
          type="text"
        />
      </div>
      <br />

      <div style={{ marginLeft: 30 }}>
        <b> Admin password </b>
        <input
          placeholder="domain"
          placeholder="password"
          style={{ marginLeft: 169 }}
          type="text"
        />
      </div>
      <br />
      <div>
        <h3 style={{ color: '#19B364' }}>2) Server Config</h3>
        <br />
        <label
          htmlFor="quantity"
          style={{ textSizeAdjust: 20, marginLeft: 30 }}
        >
          <b> ADD DOMAIN CONTROLLER:</b>{' '}
        </label>
        <select onChange={event => setShowControllers(event.target.value)}>
          {controllerOptions.map(option => {
            return (
              <option
                key={option}
                value={option}
              >
                {option}
              </option>
            );
          })}
        </select>

        {renderCards()}
        <br />
        <label
          htmlFor="quantity"
          style={{ textSizeAdjust: 20, marginLeft: 30 }}
        >
          <b>ADD Server:</b>{' '}
        </label>
        <select onChange={event => setshowServers(event.target.value)}>
          {serverOptions.map(option => {
            return (
              <option
                key={option}
                value={option}
              >
                {option}
              </option>
            );
          })}
        </select>
      </div>

      {renderServerCards()}

      <br />
      <hr />
      <div>
        <h4 style={{ color: '#19B364' }}>3) START DEPLOYMENT PROCESS</h4>
        <button
          className="btn btn-success"
          style={{ marginLeft: 120, marginTop: 10 }}
          type="button"
        >
          ASK TECHNICIAN TO REVIEW
        </button>
        <br />
        <br />
        <button
          className="btn btn-danger btn-lg"
          style={{ marginLeft: 170 }}
          type="button"
        >
          DEPLOY
        </button>
        <br />
        <br />

        <svg
          className="bi bi-download"
          fill="currentColor"
          height="3em"
          style={{ marginLeft: 95 }}
          viewBox="0 0 16 16"
          width="3em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M.5 8a.5.5 0 0 1 .5.5V12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8.5a.5.5 0 0 1 1 0V12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8.5A.5.5 0 0 1 .5 8z"
            fillRule="evenodd"
          />
          <path
            d="M5 7.5a.5.5 0 0 1 .707 0L8 9.793 10.293 7.5a.5.5 0 1 1 .707.707l-2.646 2.647a.5.5 0 0 1-.708 0L5 8.207A.5.5 0 0 1 5 7.5z"
            fillRule="evenodd"
          />
          <path
            d="M8 1a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0v-8A.5.5 0 0 1 8 1z"
            fillRule="evenodd"
          />
        </svg>
        <a
          className="btn btn-light btn-lg"
          href="#"
        >
          <span /> DOWNLOAD XML AS CONFIG
        </a>
      </div>
    </div>
  );
};

export default Typography;

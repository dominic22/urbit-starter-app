import React, { Component } from "react";
import classnames from "classnames";
import _ from "lodash";

export default class exampleappTile extends Component {
  render() {
    return (
      <div className="w-100 h-100 relative" style={{ background: "#1a1a1a" }}>
        <a className="w-100 h-100 db pa2 no-underline" href="/~exampleapp">
          <p
            className="gray label-regular b absolute"
            style={{ left: 8, top: 4 }}
          >
            This is the new exampleapp
          </p>
          <p className="white absolute" style={{ top: 25, left: 8 }}>
            This is sample text for your full app tile.
          </p>
        </a>
      </div>
    );
  }
}

window.exampleappTile = exampleappTile;

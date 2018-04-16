import * as React from "react";
import { Container } from "../";

const SiteFooter = ({ children, ...rest }) => (
  <React.Fragment>
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <div className="col-6 col-md-3">
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#">First link</a>
                  </li>
                  <li>
                    <a href="#">Second link</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-3">
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#">Third link</a>
                  </li>
                  <li>
                    <a href="#">Fourth link</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-3">
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#">Fifth link</a>
                  </li>
                  <li>
                    <a href="#">Sixth link</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-3">
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#">Other link</a>
                  </li>
                  <li>
                    <a href="#">Last link</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-4 mt-lg-0">
            Premium and Open Source dashboard template with responsive and high
            quality UI. For Free!
          </div>
        </div>
      </div>
    </div>
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center flex-row-reverse">
          <div className="col-auto ml-auto">
            <div className="row align-items-center">
              <div className="col-auto">
                <ul className="list-inline list-inline-dots mb-0">
                  <li className="list-inline-item">
                    <a href="./docs/index.html">Documentation</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="./faq.html">FAQ</a>
                  </li>
                </ul>
              </div>
              <div className="col-auto">
                <a
                  href="https://github.com/tabler/tabler"
                  className="btn btn-outline-primary btn-sm"
                >
                  Source code
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-auto mt-3 mt-lg-0 text-center">
            Copyright © 2018
            <a href=".">Tabler</a>. Theme by
            <a href="https://codecalm.net" target="_blank">
              codecalm.net
            </a>{" "}
            All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  </React.Fragment>
);

export default SiteFooter;

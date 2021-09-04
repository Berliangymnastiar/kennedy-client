import React, { Component } from "react";

import profileChat from "../assets/images/photo-profile.png";

import Header from "../components/Header";
import Footer from "../components/Footer";

class Chat extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <section className="searching mt-5">
            <div className="container container-fluid">
              <div className="row">
                <div className="col-9">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search chat"
                      aria-label="Search chat"
                      aria-describedby="button-addon2"
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        id="button-addon2"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <form>
                    <div className="form-group">
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option disabled>Sort by</option>
                        <option>Read Date</option>
                        <option>Date Added</option>
                        <option>Name</option>
                      </select>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <section className="chat-card">
            <div className="container container-fluid">
              <div className="row chat-line">
                <div className="col-2">
                  <img src={profileChat} className="icon-back-black" alt="" />
                </div>
                <div className="col-8">
                  <p>User 1</p>
                  <p style={{ marginTop: "-15px" }}>
                    Hey, is the vespa still available?
                  </p>
                </div>
                <div className="col-2">
                  <p className="chat-date">Just now</p>
                </div>
              </div>
              <div className="row chat-line">
                <div className="col-2">
                  <img src={profileChat} className="icon-back-black" alt="" />
                </div>
                <div className="col-8">
                  <p>User 1</p>
                  <p style={{ marginTop: "-15px" }}>
                    Hey, is the vespa still available?
                  </p>
                </div>
                <div className="col-2">
                  <p className="chat-date">Just now</p>
                </div>
              </div>
              <div className="row chat-line">
                <div className="col-2">
                  <img src={profileChat} className="icon-back-black" alt="" />
                </div>
                <div className="col-8">
                  <p>User 1</p>
                  <p style={{ marginTop: "-15px" }}>
                    Hey, is the vespa still available?
                  </p>
                </div>
                <div className="col-2">
                  <p className="chat-date">Just now</p>
                </div>
              </div>
              <div className="row chat-line">
                <div className="col-2">
                  <img src={profileChat} className="icon-back-black" alt="" />
                </div>
                <div className="col-8">
                  <p>User 1</p>
                  <p style={{ marginTop: "-15px" }}>
                    Hey, is the vespa still available?
                  </p>
                </div>
                <div className="col-2">
                  <p className="chat-date">Just now</p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default Chat;

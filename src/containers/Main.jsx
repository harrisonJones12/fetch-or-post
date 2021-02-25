import React, { useState } from "react";

import { Form, Button } from "react-bootstrap";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { makePost } from "./actions/index.js";

import ShowModal from "../components/ShowModal";

import "./Main.css";

export function Main(props) {
  const [title, setTitle] = useState("");
  const [body, setPost] = useState("");

  const userId = Math.floor(Math.random() * 6) + 1;

  const postInfo = {
    title,
    body,
    userId,
  };

  const { makePost, loading, showModal } = props;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    makePost(postInfo);
  };

  return (
    <div className="Main">
      {showModal ? <ShowModal /> : null}
      <div className="content">
        <div className="heading">
          <Link to="/fetch">
            <h1>Fetch</h1>
          </Link>
          <h1>or</h1>
          <Link to="/">
            <h1>Post</h1>
          </Link>
        </div>
        <div className="post-container">
          <Form onSubmit={handleSubmit}>
            <Form.Group onChange={(e) => setTitle(e.target.value)}>
              <Form.Label>Post Title</Form.Label>
              <Form.Control placeholder="Title" />
              <Form.Text className="text-muted">
                Get creative no one will see it ;)
              </Form.Text>
            </Form.Group>

            <Form.Group onChange={(e) => setPost(e.target.value)}>
              <Form.Label>Post Message</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Button variant="primary" type="submit" data-testid="post-form">
              {loading ? "Submiting ...." : "Submit"}
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  makePost: makePost,
};

export const mapStateToProps = (state) => ({
  loading: state.loading,
  showModal: state.showModal,
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);

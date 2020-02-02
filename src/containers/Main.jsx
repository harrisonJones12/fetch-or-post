import React, { useState } from "react";

import { Form, Button } from "react-bootstrap";

import { connect } from "react-redux";

import { makePost } from "./actions/index.js";

import ShowModal from "../components/ShowModal";

import "./Main.css";

function Main(props) {
  const [title, setTitle] = useState("");
  const [body, setPost] = useState("");

  const userId = Math.floor(Math.random() * 6) + 1;

  const postInfo = {
    title,
    body,
    userId
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    makePost(postInfo);
  };

  const { makePost, loading, showModal } = props;

  return (
    <div className="Main">
      {showModal ? <ShowModal /> : null}
      <div className="content">
        <h1>Fetch or Post</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group onChange={e => setTitle(e.target.value)}>
            <Form.Label>Post Title</Form.Label>
            <Form.Control placeholder="Title" />
            <Form.Text className="text-muted">
              Get creative no one will see it ;)
            </Form.Text>
          </Form.Group>

          <Form.Group onChange={e => setPost(e.target.value)}>
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Button variant="primary" type="submit">
            {loading ? "Submiting ...." : "Submit"}
          </Button>
        </Form>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  makePost: makePost
};

const mapStateToProps = state => ({
  loading: state.loading,
  showModal: state.showModal
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);

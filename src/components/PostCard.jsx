import React, { Fragment } from "react";
import { Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./PostCard.css";
import { fetchPost } from "../containers/actions/index.js";

function PostCard(props) {
  const handleFetch = () => {
    props.fetchPost();
  };

  const { loading, fetchResponse } = props;

  return (
    <Fragment>
      <div className="heading">
        <Link to="/fetch">
          <h1>Fetch</h1>
        </Link>
        <h1>or</h1>
        <Link to="/">
          <h1>Post</h1>
        </Link>
      </div>
      <Card className="postcard-content">
        <Card.Body>
          <Card.Title>{fetchResponse.title}</Card.Title>
          <Card.Text>{fetchResponse.body}</Card.Text>
          <Button variant="primary" onClick={handleFetch} className="mt-5">
            {loading ? "Fetching ...." : "Fetch"}
          </Button>
        </Card.Body>
      </Card>
    </Fragment>
  );
}

const mapDispatchToProps = {
  fetchPost: fetchPost,
};

const mapStateToProps = (state) => ({
  loading: state.loading,
  fetchResponse: state.fetchResponse,
});

export default connect(mapStateToProps, mapDispatchToProps)(PostCard);

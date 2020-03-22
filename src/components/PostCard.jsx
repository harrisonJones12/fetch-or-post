import React from 'react';
import { Card , Button } from "react-bootstrap";
import { connect } from "react-redux";

import './PostCard.css';
import { fetchPost } from "../containers/actions/index.js";

 function PostCard(props) {


  const handleFetch = () => {

    props.fetchPost();
  }

  const { loading, fetchResponse } = props;

 console.log('PostCard',fetchResponse);
  return (
    <div>
       <h1>Fetch or Post</h1>
        <Card className="postcard-content">
        <Card.Header as="h5">Featured</Card.Header>
        <Card.Body>
          <Card.Title>fetchResponse.title</Card.Title>
          <Card.Text>
            fetchResponse.body
          </Card.Text>
          <Button variant="primary" onClick={handleFetch} className="mt-5">{loading ? 'Fetching ....' : 'Fetch'}</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

const mapDispatchToProps = {
  fetchPost: fetchPost 
};

const mapStateToProps = state => ({
  loading: state.loading,
  fetchResponse: state.fetchResponse
});




export default connect(mapStateToProps, mapDispatchToProps)(PostCard);

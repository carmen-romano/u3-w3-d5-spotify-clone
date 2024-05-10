import { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";

import { useDispatch } from "react-redux";
import { searchSong } from "../redux/actions/index.js";

const SearchRes = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.length > 0) {
      dispatch(searchSong(query));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className="mt-3">
        <Form.Control
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search"
          className="mr-sm-2"
        />

        <Button
          variant="outline-secondary"
          type="submit"
          className="btn-sm h-100"
        >
          GO
        </Button>
      </InputGroup>
    </Form>
  );
};

export default SearchRes;

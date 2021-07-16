import React, { useState } from 'react';
import { useHistory } from 'react-router';

const Home = () => {
  const history = useHistory();
  const [input, setInput] = useState({'language': '','gerner' : ''});

  const changeHandler = (e) => {
    setInput({...input,[e.target.name] : [e.target.value]});
  };

  const submitHandler = e => {
    
    history.push({
      pathname:'/movie',
      state:{
        input
      }
    });
  };
  return (
    <div className="container">
      <h1 className="title">Movie Suggestor</h1>
      <div className="dropdown">
        <label for="browser" className="form_label">
          Language:
        </label>
        <input
          list="browsers"
          className="form_input"
          name="language"
          id="browser"
          onChange={changeHandler}
        />

        <datalist id="browsers">
          <option value="Hindhi" />
          <option value="Telugu" />
          <option value="English" />
        </datalist>

        <label for="s" className="form_label ">
          Genre:
        </label>
        <input
          list="gener"
          className="form_input gerner"
          name="gerner"
          id="s"
          onChange={changeHandler}
        />

        <datalist id="gener">
          <option value="Comedy" />
          <option value="Action" />
          <option value="Thriller" />
          <option value="Biography" />
          <option value="Horror" />
          <option value="Romance" />
        </datalist>
      </div>

      <button className="btn" onClick={submitHandler}>Suggest</button>
    </div>
  );
};

export default Home;

import React from 'react';

class Title extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title-container__title">Weather Retriever</h1>
        <h3 className="title-container__subtitle">Find the weather, temperature, conditions and more about your favourite cities!</h3>
      </div>
    );
  }
}

export default Title;

import React from 'react';

function Form(props) {
  return (
    <div className="Form">
      <iframe
        src={props.formUrl}
        width="600"
        height="1000"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </div>
  );
}

export default Form;

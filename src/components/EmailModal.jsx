import React from "react";

const EmailModal = () => (
  <form method="POST" action="https://formspree.io/contact2019@marcmogdanz.de">
    <div className="field is-horizontal">
      <div className="field-label is-normal">
        <label className="label" htmlFor="nameInput">
          Your name
        </label>
      </div>
      <div className="field-body">
        <div className="field">
          <div className="control">
            <input
              className="input"
              id="nameInput"
              name="name"
              type="text"
              placeholder="Steve Jobs"
            />
          </div>
          <p className="help">This field is required.</p>
        </div>
      </div>
    </div>

    <div className="field is-horizontal">
      <div className="field-label is-normal">
        <label className="label" htmlFor="emailInput">
          Your email address
        </label>
      </div>
      <div className="field-body">
        <div className="field">
          <div className="control">
            <input
              className="input"
              id="emailInput"
              name="email"
              type="email"
              placeholder="steve@apple.com"
            />
          </div>
          <p className="help">This field is required.</p>
        </div>
      </div>
    </div>

    <div className="field is-horizontal">
      <div className="field-label is-normal">
        <label className="label" htmlFor="messageTextarea">
          Your message
        </label>
      </div>
      <div className="field-body">
        <div className="field">
          <div className="control">
            <textarea
              className="textarea"
              id="messageTextarea"
              name="message"
              placeholder="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            />
          </div>
          <p className="help">This field is required.</p>
        </div>
      </div>
    </div>

    <div className="field is-horizontal">
      <div className="field-label" />
      <div className="field-body">
        <div className="field">
          <div className="control">
            <button className="button is-primary" type="submit">
              Send message
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
);

export default EmailModal;

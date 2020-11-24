import React, { useState } from "react";
import axios from "axios";

const EmailModal = (): JSX.Element => {
  const [status, setStatus] = useState({
    isSubmitted: false,
    isSubmitting: false,
    hasFailed: false,
  });

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleServerResponse = (success: boolean) => {
    if (success) {
      setStatus({
        isSubmitted: true,
        isSubmitting: false,
        hasFailed: false,
      });
      setInputs({
        name: "",
        email: "",
        message: "",
      });
      return;
    }

    setStatus({
      isSubmitted: false,
      isSubmitting: false,
      hasFailed: true,
    });
  };

  const handleOnChange = (event: React.FormEvent<EventTarget>) => {
    const target = event.target as HTMLInputElement;

    event.persist();
    setInputs((prev) => ({
      ...prev,
      [target.id]: target.value,
    }));
    setStatus({
      isSubmitted: false,
      isSubmitting: false,
      hasFailed: false,
    });
  };

  const handleOnSubmit = async (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    setStatus((prevStatus) => ({
      ...prevStatus,
      isSubmitting: true,
    }));

    try {
      await axios({
        method: "POST",
        url: "https://formspree.io/f/moqpnvby",
        data: inputs,
      });

      handleServerResponse(true);
    } catch (err) {
      handleServerResponse(false);
    }
  };

  return (
    <form onSubmit={handleOnSubmit} name="contact">
      <input type="hidden" name="form-name" value="contact" />

      {status.hasFailed && (
        <div className="message is-danger">
          <div className="message-body">
            Sending the message failed. Please try again later.
          </div>
        </div>
      )}
      {!status.hasFailed && status.isSubmitted && (
        <div className="message is-success">
          <div className="message-body">Message successfully sent.</div>
        </div>
      )}

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label" htmlFor="name">
            Your name
          </label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <input
                className="input"
                id="name"
                name="name"
                type="text"
                placeholder="Steve Jobs"
                onChange={handleOnChange}
                required
                value={inputs.name}
              />
            </div>
            <p className="help">This field is required.</p>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label" htmlFor="email">
            Your email address
          </label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <input
                className="input"
                id="email"
                name="_replyto"
                type="email"
                placeholder="steve@apple.com"
                onChange={handleOnChange}
                required
                value={inputs.email}
              />
            </div>
            <p className="help">This field is required.</p>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label" htmlFor="message">
            Your message
          </label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <textarea
                className="textarea"
                id="message"
                name="message"
                placeholder="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
                onChange={handleOnChange}
                required
                value={inputs.message}
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
              <button
                className="button is-primary"
                type="submit"
                disabled={status.isSubmitting}
              >
                {!status.isSubmitting
                  ? !status.isSubmitted
                    ? "Send message"
                    : "Message sent"
                  : "Sending..."}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EmailModal;

import axios from "axios";
import React, { useState } from "react";
import Layout from "../components/Layout";

const ContactPage = (): JSX.Element => {
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
    <Layout page="Contact">
      <div className="mt-8 lg:mt-16">
        <form onSubmit={handleOnSubmit} name="contact" className="m-auto">
          <div className="flex flex-col xl:w-1/2 m-auto">
            {!status.hasFailed && status.isSubmitted && (
              <div className="border-solid border-l-4 border-green-500 bg-green-200 p-4 mb-12">
                Message successfully sent.
              </div>
            )}

            {status.hasFailed && (
              <div className="border-solid border-l-4 border-red-500 bg-red-200 p-4 mb-12">
                Sending the message failed. Please try again later.
              </div>
            )}

            <div className="my-2">
              <label
                htmlFor="name"
                className="block text-xs font-bold text-gray-600 uppercase"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Steve Jobs"
                onChange={handleOnChange}
                required
                value={inputs.name}
                className="appearance-none block bg-grey-lighter text-grey-darker border border-grey-lighter rounded w-full p-3"
              />
            </div>

            <div className="my-2">
              <label
                htmlFor="email"
                className="block text-xs font-bold text-gray-600 uppercase"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="steve@apple.com"
                onChange={handleOnChange}
                required
                value={inputs.email}
                className="appearance-none block bg-grey-lighter text-grey-darker border border-grey-lighter rounded w-full p-3"
              />
            </div>

            <div className="my-2">
              <label
                htmlFor="message"
                className="block text-xs font-bold text-gray-600 uppercase"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
                onChange={handleOnChange}
                required
                value={inputs.message}
                className="appearance-none block bg-grey-lighter text-grey-darker border border-grey-lighter rounded w-full p-3 h-32"
              />
            </div>

            <div className="flex justify-center my-2">
              <button
                type="submit"
                disabled={status.isSubmitting}
                className="text-white bg-primary hover:bg-primary-dark border border-gray-400 font-bold py-2 px-8 rounded-md md:w-1/3 "
              >
                {!status.isSubmitting
                  ? !status.isSubmitted
                    ? "Send message"
                    : "Message sent"
                  : "Sending..."}
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};
export default ContactPage;

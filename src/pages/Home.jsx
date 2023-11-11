import React from "react";

const Home = () => {
  return (
    <section className="section">
      <div className="container has-text-black">
        <h1 className="title">Brief</h1>
        <div className="content">
          <p>Your challenge is to build out animals gallery web application.</p>
          <p>
            We suggest to build this with ReactJS, but you can use any tools you
            like to help you complete the challenge. So if you've got something
            you'd like to share, feel free to give it a go.
          </p>
          <p>
            We suggest to use this API to fetch images, if you have your
            favourite API feel free to use it: <br />
            <a
              href="https://dog.ceo/dog-api/?ref=apilist.fun"
              target="_blank"
              rel="noreferrer"
            >
              dog.ceo/dog-api/
            </a>
            <br />
            <a
              href="https://docs.thecatapi.com/"
              target="_blank"
              rel="noreferrer"
            >
              docs.thecatapi.com
            </a>
          </p>
          <p> Your users should be able to:</p>
          <ul>
            <li>
              View the optimal layout for the app depending on their device's
              screen size
            </li>
            <li>See hover states for all interactive elements on the page</li>
            <li>
              Navigate between Home, Gallery, Favourite, add other pages if you
              want
            </li>
            <li>Add/Remove favourite pictures from Favourite page</li>
            <li>
              <strong>Bonus:</strong> use infinity scroll to get more results
            </li>
            <li>
              <strong>Bonus:</strong> create pagination, display no more then 50
              results for page
            </li>
            <li>
              <strong>Bonus:</strong> show image in full screen view
            </li>
            <li>
              <strong>Bonus:</strong> filter images based on labels: "cats",
              "dogs"
            </li>
          </ul>
          <p>
            You have one week to publish your finished project on version
            control system (you can choose which one you like) and send us your
            public repository link. <br />
            If you have any questions you can ask us via email. <br /> Good
            luck!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;

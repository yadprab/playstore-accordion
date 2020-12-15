import React, { useState } from "react";

import { ChevUp } from "./Chevup";

import { ChevDown } from "./Chevdown";

import { Text } from "./Text";

import { Close } from "./Close";

const Article = ({ id, name, image, title, text, state }) => {
  const [update, setupUpdate] = useState(false);

  const [show, showFn] = useState(false);

  return (
    <>
      <section key={id} className="apps">
        <article key={id}>
          <section
            className="img--section"
            id={state || update ? "updating" : ""}
          >
            <img src={image} alt={name} />
          </section>
          <section className="info">
            <p>{title}</p>
            <button
              onClick={() => {
                showFn(!show);
              }}
            >
              {show ? <ChevUp /> : <ChevDown />}
            </button>
          </section>
          <button
            id={state || update ? "close" : "update"}
            onClick={() => {
              setupUpdate(!update);
            }}
          >
            {state || update ? <Close /> : "update"}
          </button>
        </article>
        {show ? <Text text={text} /> : ""}
      </section>
    </>
  );
};

export { Article };

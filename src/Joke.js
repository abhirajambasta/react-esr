import React, { useCallback, useEffect, useState } from "react";
import { useData } from "./data";

export default () => {
  const _joke = useData();
  const [joke, updateJoke] = useState(_joke);

  const fetchJoke = useCallback(async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const result = await response.json();
    updateJoke(result.value);
  }, [])

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `data = ${JSON.stringify(joke)};`,
        }}
      />
      <div>{joke}</div>
      <button onClick={fetchJoke}>Get a new one</button>
    </>
  );
};

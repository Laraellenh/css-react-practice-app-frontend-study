import "./styles.css";
import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";

export default function App() {
  const url = "https://dog.ceo/api/breeds/image/random/10";
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then((data) => setDogs(data.message))
      .catch((error) => console.log(error));
  }, []);

  // const fakeName = faker.name.firstName(e);

  return (
    <div className="App">
      <h1> Welcome to the dog book </h1>
      <ul className="ul">
        {dogs.map((dogUrl) => (
          <li key={dogUrl}>
            <DogCard className="img"> </DogCard>
            <p> {faker.name.firstName()} </p>

            <img className="img" src={dogUrl} alt="doggie headshot" />
          </li>
        ))}
      </ul>
    </div>
  );
}

function DogCard() {
  function handleGoodDog() {
    goodDog ? setIsGoodDog(!goodDog) : setIsGoodDog(goodDog);
  }
  function handleLikes() {
    setLikes(likes + 1);
  }
  const [likes, setLikes] = useState(0);
  const [goodDog, setIsGoodDog] = useState(true);
  return (
    <div>
      <button className="button" onClick={handleLikes}>
        {" "}
        likes: {likes}{" "}
      </button>
      <button onClick={(e) => handleGoodDog} className="button">
        {" "}
        {!goodDog ? "Bad Dog" : "Good Dog!"}{" "}
      </button>
    </div>
  );
}

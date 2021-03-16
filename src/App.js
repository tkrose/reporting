import "./App.css";
import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Question, Stream } from "./components";

function App() {
  const [screenAnswer, toggleScreenAnswer] = useState(null);
  const [genreAnswer, toggleGenreAnswer] = useState(null);
  const [offlineAnswer, toggleOfflineAnswer] = useState(null);
  const [qualityAnswer, toggleQualityAnswer] = useState(null);

  const [stream, setStream] = useState(null);

  const screenQuestion = {
    title: "How many people will be on the account?",
    options: [
      { label: 1, value: 1 },
      { label: 2, value: 2 },
      { label: 3, value: 3 },
      { label: 4, value: 4 }
    ]
  };

  const genreQuestion = {
    title: "What kind of shows do you want to watch?",
    options: [
      { label: "Kids", value: "Kids" },
      { label: "Adult", value: "Adult" },
      { label: "Both", value: "Both" }
    ]
  };

  const offlineQuestion = {
    title: "Would you like to offline viewing content?",
    options: [
      { label: "Yes", value: "Yes" },
      { label: "No", value: "No" }
    ]
  };

  const qualityQuestion = {
    title: "How important is the quallity of the resolution for you?",
    options: [
      { label: "Not Important", value: "Not Important" },
      { label: "Important", value: "Important" },
      { label: "Very Important", value: "Very Important" }
    ]
  };

  const Netflix = {
    title: "Netflix",
    description:
      "Netflix is a subscription-based streaming service that allows our members to watch TV shows and movies without commercials on an internet-connected device. You can also download TV shows and movies to your iOS, Android, or Windows 10 device and watch without an internet connection.Netflix is a subscription-based streaming service that allows our members to watch TV shows and movies without commercials on an internet-connected device. You can also download TV shows and movies to your iOS, Android, or Windows 10 device and watch without an internet connection.",
    plans: [
      { title: "Basic", price: "$8.99/mo" },
      { title: "Premium", price: "$17.99/mo" }
    ],
    screen: 4,
    genre: "Both",
    offline: "Yes",
    quality: "Very Important",
    logo:
      "https://cdn.vox-cdn.com/thumbor/AwKSiDyDnwy_qoVdLPyoRPUPo00=/39x0:3111x2048/1400x1400/filters:focal(39x0:3111x2048):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png"
  };

  const Peacock = {
    title: "Peacock",
    description:
      "With Peacock, you can stream hundreds of hit movies, iconic TV shows, current NBC hits, and Peacock Channels 24/7, plus daily live news, late night, and pop culture to satisfy your FOMO. You'll also get access to live sports, kids' movies and shows, hit Spanish-language TV shows and news from Telemundo—all for free.",
    plans: [
      { title: "Basic", price: "Free" },
      { title: "Premium", price: "$4.99/mo" },
      { title: "Premium Plus", price: "$9.99/mo" }
    ],
    screen: 4,
    genre: "Adult",
    offline: "Yes",
    quality: "Important",
    logo:
      "https://cdn.vox-cdn.com/thumbor/G0CLHzhFWIcwEdT0lK_cXPn3Jgs=/0x0:1000x601/1200x800/filters:focal(420x221:580x381)/cdn.vox-cdn.com/uploads/chorus_image/image/65262553/peacock.0.png"
  };

  const Disney = {
    title: "Disney +",
    description:
      "Disney Plus is an on-demand streaming service with a growing collection of movies and shows from Disney, Pixar, Marvel, Star Wars, National Geographic, and 20th Century Fox.",
    plans: [
      { title: "Basic", price: "$8.00/mo" },
      { title: "Hulu Bundle", price: "$14.00/mo" },
      { title: "Hulu Live TV Bundle", price: "$72.00/mo" }
    ],
    screen: 4,
    offline: "No",
    quality: "Very Important",
    genre: "Kids",
    logo:
      "https://cdn141.picsart.com/338357049046211.png?type=webp&to=min&r=640"
  };

  const Amazon = {
    title: "Amazon Prime Video",
    description:
      "Prime Video is a video streaming service available for Amazon Prime members. With an eligible Amazon Prime membership, you have access to thousands of Prime Video titles at no additional cost.",
    plans: [{ title: "Basic", price: "$8.99/mo" }],
    screen: 1,
    offline: "Yes",
    quality: "Very Important",
    genre: "Both",
    logo: "https://www.soda.com/wp-content/uploads/2019/12/prime-video.jpg"
  };

  const submit = () => {
    if (screenAnswer && genreAnswer && qualityAnswer && offlineAnswer) {
      getTotalScore(Netflix);
      getTotalScore(Disney);
      getTotalScore(Peacock);
      getTotalScore(Amazon);

      let streams = [Netflix, Disney, Peacock, Amazon];

      let highestScore = Math.max.apply(
        Math,
        streams.map(function (o) {
          return o.totalScore;
        })
      );

      let stream = streams.filter((obj) => {
        return obj.totalScore === highestScore;
      });

      stream = stream[0];

      console.log(stream);

      setStream(stream);
    } else {
      window.alert("Please answer all questions.");
    }
  };

  const getTotalScore = (stream) => {
    let totalScore = 0;

    if (screenAnswer.value >= stream.screen) {
      totalScore += 1;
    }

    if (stream.genre === genreAnswer.value) {
      totalScore += 1;

      if (genreAnswer.value === "Kids") {
        totalScore += 1;
      }
    }

    if (stream.quality === qualityAnswer.value) {
      totalScore += 1;
    }

    if (stream.offline === offlineAnswer.value) {
      totalScore += 1;
    }

    stream.totalScore = totalScore;
  };

  return (
    <div className="App">
      <h1 className={"title"}>Best Streaming Service For You</h1>
      <p className={"description"}>
        Tell us your prefrences and we'll find a streaming service that meets
        your needs.
      </p>
      {stream ? (
        <Stream stream={stream} />
      ) : (
        <div className="questions-container">
          <Question
            question={genreQuestion}
            answer={genreAnswer}
            toggleAnswer={toggleGenreAnswer}
          />
          <Question
            question={screenQuestion}
            answer={screenAnswer}
            toggleAnswer={toggleScreenAnswer}
          />
          <Question
            question={offlineQuestion}
            answer={offlineAnswer}
            toggleAnswer={toggleOfflineAnswer}
          />
          <Question
            question={qualityQuestion}
            answer={qualityAnswer}
            toggleAnswer={toggleQualityAnswer}
          />
          <div className="button-container">
            <div className="submit-button" onClick={submit}>
              <p>Submit</p>
              <BsArrowRight className="arrow" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

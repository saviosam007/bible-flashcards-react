import "./styles.css";
import { FlashcardArray } from "react-quizlet-flashcard";
import { getVerses } from "./services/verseList";
import { getFlashCardVerses } from "./services/verseList";
import { useEffect, useState } from "react";
import { Sidebar } from "./components/sidebar";
export default function App() {
  const [fullList, setFullList] = useState();
  const [verseCards, setVerseCards] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // getVerses().then((res) => {
    //   const result = res.data.verses.map((obj) => ({
    //     frontHTML: obj.title,
    //     backHTML: obj.content
    //   }));
    //   setLoading(false);
    //   console.log(result);
    //   setVerseCards(result);
    // });

    getVerses().then((res) => {
      console.log(res.data.verses);
      setFullList(res.data.verses);
      const result = res.data.verses.liveTheNewLife.map((obj) => ({
        frontHTML: obj.title,
        backHTML: obj.content
      }));
      setLoading(false);
      setVerseCards(result);
    });
  }, []);

  const series = (data) => {
    setVerseCards(
      fullList[`${data}`].map((obj) => ({
        frontHTML: obj.title,
        backHTML: obj.content
      }))
    );
  };
  // const cards = [
  //   {
  //     frontHTML: "What is the capital of <u>Alaska</u>?",
  //     backHTML: "Juneau"
  //   },
  //   {
  //     frontHTML: "What is the capital of California?",
  //     backHTML: "Sacramento"
  //   },
  //   {
  //     frontHTML: "What is the capital of New York?",
  //     backHTML: "Albany"
  //   }
  // ];
  // inline-flex items-center justify-center
  return (
    <div className="h-screen">
      <Sidebar
        series={series}
        cards={
          <div className="h-screen items-center justify-center flex">
            {loading ? (
              "loading.."
            ) : (
              <FlashcardArray
                cards={verseCards}
                backContentStyle={{
                  backgroundColor: "transparent",
                  color: "black",
                  padding: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "1.1rem"
                }}
                frontContentStyle={{
                  backgroundColor: "transparent",
                  color: "black",
                  padding: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "1.3rem"
                }}
              />
            )}
          </div>
        }
      ></Sidebar>
    </div>
  );
}

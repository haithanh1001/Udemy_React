import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataQuiz } from "../../services/apiService";
import _ from "lodash";
const DetailQuiz = (props) => {
  const params = useParams();
  //   console.log(">>>check params: ", params);
  const quizId = params.id;
  useEffect(() => {
    fetchQuestions();
  }, [quizId]);
  const fetchQuestions = async () => {
    const res = await getDataQuiz(quizId);
    console.log(">>>Check question: ", res);
    if (res && res.EC === 0) {
      let raw = res.DT;
      console.log("Raw data: ", raw);
      let data = _.chain(raw)

        // Group the elements of Array based on `color` property
        .groupBy("id")
        // `key` is group's name (color), `value` is the array of objects
        .map((value, key) => {
          console.log("value ", value, "Key: ", key);
          let answers = [];
          let questionDescription,
            image = null;
          value.forEach((item, index) => {
            if (index === 0) {
              questionDescription = item.description;
              image = item.image;
            }
            answers.push(item.answers);
          });

          return { questionId: key, answers, questionDescription, image };
        })
        .value();
      console.log("data: ", data);
    }
  };
  return <div className="detail-quiz-container">DetailQuiz</div>;
};

export default DetailQuiz;

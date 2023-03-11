import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataQuiz } from "../../services/apiService";
import { useLocation } from "react-router-dom";
import _ from "lodash";
import "./DetailQuiz.scss";
const DetailQuiz = (props) => {
  const params = useParams();
  //   console.log(">>>check params: ", params);
  const quizId = params.id;
  const location = useLocation();
  console.log("Location: ", location);
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
  return (
    <div className="detail-quiz-container">
      <div className="left-content">
        <div className="title">
          Quiz {quizId}: {location?.state?.quizTitle}
        </div>
        <hr />
        <div className="q-body">
          <img src="" alt="" />
        </div>
        <div className="q-content">
          <div className="question">Question 1: How are you doing</div>
          <div className="answer">
            <div className="a-child">A. Cau tra loi 1</div>
            <div className="a-child">B. Cau tra loi 2</div>
            <div className="a-child">C. Cau tra loi 3</div>
          </div>
        </div>
        <div className="footer">
          <button className="btn btn-secondary">Prev</button>
          <button className="btn btn-primary">Next</button>
        </div>
      </div>
      <div className="right-content">Count Down</div>
    </div>
  );
};

export default DetailQuiz;

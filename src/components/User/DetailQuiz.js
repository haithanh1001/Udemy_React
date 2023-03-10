import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataQuiz } from "../../services/apiService";
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
  };
  return <div className="detail-quiz-container">DetailQuiz</div>;
};

export default DetailQuiz;

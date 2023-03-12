import _ from "lodash";

const Question = (props) => {
  const { data, index } = props;
  if (_.isEmpty(data)) {
    return <></>;
  }
  return (
    <>
      {data.image && (
        <div className="q-image">
          <img src={`data:image/jpeg;base64,${data.image}`} />
        </div>
      )}
      <div className="question">
        Question {index + 1}: {data.questionDescription}
      </div>
      <div className="answer">
        {data.answers &&
          data.answers.length &&
          data.answers.map((a, index) => {
            return (
              <div className="a-child" key={`answer-${index}`}>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" />
                  <label class="form-check-label">
                    {index + 1}. {a.description}
                  </label>
                </div>
              </div>
            );
          })}

        {/* <div className="a-child">B. Cau tra loi 2</div>
        <div className="a-child">C. Cau tra loi 3</div> */}
      </div>
    </>
  );
};
export default Question;

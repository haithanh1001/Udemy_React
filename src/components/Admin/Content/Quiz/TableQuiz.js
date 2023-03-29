import { useEffect, useState } from "react";
import { getAllQuizForAdmin } from "../../../../services/apiService";
import ModalDeleteQuiz from "./ModalDeleteQuiz";
import ModalUpdateQuiz from "./ModalUpdateQuiz";
const TableQuiz = (props) => {
  const [listQuiz, setListQuiz] = useState([]);
  const [isShowDeleteQuizModal, setIsShowDeleteQuizModal] = useState(false);
  const [dataDelete, setDataDelete] = useState({});
  const [isShowUpdateQuizModal, setIsShowUpdateQuizModal] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  useEffect(() => {
    fetchQuiz();
  }, []);
  const fetchQuiz = async () => {
    let res = await getAllQuizForAdmin();
    if (res && res.EC === 0) {
      console.log("check listQuiz: ", res.DT);
      setListQuiz(res.DT);
    }
  };
  const handleClickBtnEdit = (quiz) => {
    console.log(quiz);
    setIsShowUpdateQuizModal(!isShowUpdateQuizModal);
    setDataUpdate(quiz);
  };
  const resetUpdateData = () => {
    setDataUpdate({});
  };
  return (
    <>
      <div>List Quizzes: </div>
      <table className="table table-danger table-hover table-bordered my-3">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Type</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {listQuiz &&
            listQuiz.length > 0 &&
            listQuiz.map((item, index) => {
              return (
                <tr key={`table-quiz-${index}`}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.difficulty}</td>
                  <td style={{ display: "flex", gap: "15px" }}>
                    <button
                      className="btn btn-warning"
                      onClick={() => handleClickBtnEdit(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        setIsShowDeleteQuizModal(!isShowDeleteQuizModal);
                        setDataDelete({ id: +item.id });
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <ModalDeleteQuiz
        show={isShowDeleteQuizModal}
        setShow={setIsShowDeleteQuizModal}
        dataDelete={dataDelete}
        fetchQuiz={fetchQuiz}
      />
      <ModalUpdateQuiz
        show={isShowUpdateQuizModal}
        setShow={setIsShowUpdateQuizModal}
        dataUpdate={dataUpdate}
        fetchQuiz={fetchQuiz}
        resetUpdateData={resetUpdateData}
      />
    </>
  );
};

export default TableQuiz;

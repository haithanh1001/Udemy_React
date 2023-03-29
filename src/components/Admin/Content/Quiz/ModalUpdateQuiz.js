import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
// import _default from "react-bootstrap/Modal";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";
import { toast } from "react-toastify";
import { putUpdateQuiz } from "../../../../services/apiService";
import _ from "lodash";
const ModalUpdateQuiz = (props) => {
  const { show, setShow, fetchQuiz, dataUpdate, resetUpdateData } = props;
  const handleClose = () => {
    setShow(false);
    setId("");
    setDesciption("");
    setName("");
    setDifficulty("EASY");
    setQuizImage("");
    setPreviewImage("");
    resetUpdateData();
  };
  // const handleShow = () => setShow(true);
  const [id, setId] = useState("");
  const [description, setDesciption] = useState("");
  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState("EASY");
  const [quizImage, setQuizImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    // console.log("run effect... ");
    if (!_.isEmpty(dataUpdate)) {
      setId(dataUpdate.id);
      setDesciption(dataUpdate.description);
      setName(dataUpdate.name);
      setQuizImage("");
      if (dataUpdate.image) {
        setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`);
      }
    }
  }, [dataUpdate]);
  const handleUploadImage = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      setPreviewImage(URL.createObjectURL(event.target.files[0]));
      setQuizImage(event.target.files[0]);
    } else {
      // console.log("upload file", event.target.files[0]);
    }
  };
  const handleSubmitUpdateQuiz = async () => {
    let data = await putUpdateQuiz(
      id,
      description,
      name,
      difficulty,
      quizImage
    );
    if (data && data.EC === 0) {
      toast.success(data.EM);
      handleClose();
      await fetchQuiz();
    } else if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };

  console.log(">>> check render data update: ", dataUpdate);
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        backdrop="static"
        className="modal-add-user"
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Quiz</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Description</label>
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(event) => setDesciption(event.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Difficulty</label>
              <select
                className="form-select"
                onChange={(e) => setDifficulty(e.target.value)}
                value={difficulty}
              >
                <option value="EASY">EASY</option>
                <option value="MEDIUM">MEDIUM</option>
                <option value="HARD">HARD</option>
              </select>
            </div>
            <div className="col-md-12">
              <label className="form-label label-upload" htmlFor="labelUpload">
                <FcPlus />
                Upload File Image
              </label>
              <input
                type="file"
                hidden
                id="labelUpload"
                onChange={(e) => handleUploadImage(e)}
              />
            </div>
            <div className="col-md-12 img-preview">
              {previewImage ? (
                <img src={previewImage} alt="" />
              ) : (
                <span>Preview Image</span>
              )}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmitUpdateQuiz()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalUpdateQuiz;

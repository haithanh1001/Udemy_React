import axios from "../utils/axiosCustomize";
const postCreateNewUser = (email, password, username, role, image) => {
  const data = new FormData();
  data.append("email", email);
  data.append("password", password);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  //   return axios.post("http://localhost:8081/api/v1/participant", data);
  return axios.post("api/v1/participant", data);
};

const getAllUsers = () => {
  return axios.get("api/v1/participant/all");
};

const putUpdateUser = (id, username, role, image) => {
  const data = new FormData();
  data.append("id", id);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  //   return axios.post("http://localhost:8081/api/v1/participant", data);
  return axios.put("api/v1/participant", data);
};

const deleteUser = (userId) => {
  return axios.delete("api/v1/participant", { data: { id: userId } });
};
const getUserWithPaginate = (page, limit) => {
  return axios.get(`api/v1/participant?page=${page}&limit=${limit}`);
};

// const postLogin = (userEmail, userPassword) => {
//   return axios.post(`api/v1/login`, {
//     data: { email: userEmail, password: userPassword },
//   });
// };
const postLogin = (email, password) => {
  return axios.post(`api/v1/login`, { email, password, delay: 1500 });
};

const postRegister = (email, username, password) => {
  return axios.post(`api/v1/register`, { email, username, password });
};
const getQuizByUser = () => {
  return axios.get(`/api/v1/quiz-by-participant`);
};
const getDataQuiz = (id) => {
  return axios.get(`/api/v1/questions-by-quiz?quizId=${id}`);
};

const postSubmitQuiz = (data) => {
  return axios.post(`api/v1/quiz-submit`, { ...data });
};
const postCreateNewQuiz = (description, name, difficulty, image) => {
  const data = new FormData();
  data.append("description", description);
  data.append("name", name);
  data.append("difficulty", difficulty);
  data.append("quizImage", image);
  //   return axios.post("http://localhost:8081/api/v1/participant", data);
  return axios.post("api/v1/quiz", data);
};
const getAllQuizForAdmin = () => {
  return axios.get("/api/v1/quiz/all");
};
export {
  postCreateNewUser,
  getAllUsers,
  putUpdateUser,
  deleteUser,
  getUserWithPaginate,
  postLogin,
  postRegister,
  getQuizByUser,
  getDataQuiz,
  postSubmitQuiz,
  postCreateNewQuiz,
  getAllQuizForAdmin,
};

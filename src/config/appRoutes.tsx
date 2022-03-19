export const AppRouteUi = {
  Root: () => "/",
  Register: () => "/register",
  About: () => "/about",
  Login: () => "/login",
  Logout: () => "/logout",
  Courses: () => "/courses",
  AboutUs: () => "/about-us",
  Exam: () => "/exam",
  Quizzes: () => "/quizzes",
  Quiz: () => "/quiz",
};

const AUTH_ROOT = "http://localhost:8000";
const DATA_ROOT = "http://localhost:8000";

export const AppRouteApi = {
  Login: () => `${AUTH_ROOT}/token/`,
  Quizzes: () => `${AUTH_ROOT}/api/quizzes/`,
  Quiz: () => `${AUTH_ROOT}/api/quizzes/color-quiz`,
  Register: () => `${AUTH_ROOT}/api/signup`,
  SaveAnswer: () => `${AUTH_ROOT}/api/save-answer/`,
};

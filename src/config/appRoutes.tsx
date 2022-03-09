export const AppRouteUi = {
    Root: () => "/",
    Register: () => "/register",
    About: () => "/about",
    Login: () => "/login",
    Logout: () => "/logout",
    Courses: () => "/courses",
    AboutUs: () => "/about-us",
    Exam: () => "/exam",
    Quizzes: () => "/quizzes"
  }; 
  
const AUTH_ROOT = "http://localhost:8000";
const DATA_ROOT = "http://localhost:8000";

export const AppRouteApi = {
  Login: () => `${AUTH_ROOT}/token/`,
  Quizzes: () => `${AUTH_ROOT}/api/quizzes`,
  // BookBed: () => `${DATA_ROOT}/Hotel/BookBed`,
  // CancelBooking: () => `${DATA_ROOT}/Hotel/CancelBooking`,
  // Profile: () => `${AUTH_ROOT}/user/GetUserById`,
  // UpdateProfile: () => `${AUTH_ROOT}/user/Update`,
  // Bookings: () => `${DATA_ROOT}/query/BookingByUser`,
  // ChangePassword: () => `${AUTH_ROOT}/user/ChangePassword`,
  // AvailableRooms: () => `${DATA_ROOT}/Hotel/AvailableRooms`,
  // GetAllDepartments: () => `${AUTH_ROOT}/user/GetAllDepartments`,
};
  
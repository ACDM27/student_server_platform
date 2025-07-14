// 导入axios或其他HTTP客户端库
import axios from 'axios';

// 创建axios实例
const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:1337/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// 请求拦截器 - 添加token
http.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

// 响应拦截器 - 处理错误
http.interceptors.response.use(
  response => response.data,
  error => {
    // 处理401未授权错误
    if (error.response && error.response.status === 401) {
      // 清除token并重定向到登录页
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// 1. 学生模块（students）
export function fetchStudents(params) {
  return http.get('/students', { params });
}

export function fetchStudentById(id) {
  return http.get(`/students/${id}`);
}

export function createStudent(payload) {
  return http.post('/students', { data: payload });
}

export function updateStudent(id, payload) {
  return http.put(`/students/${id}`, { data: payload });
}

export function deleteStudent(id) {
  return http.delete(`/students/${id}`);
}

// 2. 教师模块（teachers）
export function fetchTeachers(params) {
  return http.get('/teachers', { params });
}

export function fetchTeacherById(id) {
  return http.get(`/teachers/${id}`);
}

export function createTeacher(payload) {
  return http.post('/teachers', { data: payload });
}

export function updateTeacher(id, payload) {
  return http.put(`/teachers/${id}`, { data: payload });
}

export function deleteTeacher(id) {
  return http.delete(`/teachers/${id}`);
}

// 3. 课程模块（courses）
export function fetchCourses(params) {
  return http.get('/courses', { params });
}

export function fetchCourseById(id) {
  return http.get(`/courses/${id}`);
}

export function createCourse(payload) {
  return http.post('/courses', { data: payload });
}

export function updateCourse(id, payload) {
  return http.put(`/courses/${id}`, { data: payload });
}

export function deleteCourse(id) {
  return http.delete(`/courses/${id}`);
}

// 4. 作业模块（assignments）
export function fetchAssignments(params) {
  return http.get('/assignments', { params });
}

export function fetchAssignmentById(id) {
  return http.get(`/assignments/${id}`);
}

export function createAssignment(payload) {
  return http.post('/assignments', { data: payload });
}

export function updateAssignment(id, payload) {
  return http.put(`/assignments/${id}`, { data: payload });
}

export function deleteAssignment(id) {
  return http.delete(`/assignments/${id}`);
}

// 5. 成就模块（achievements）
export function fetchAchievements(params) {
  return http.get('/achievements', { params });
}

export function fetchAchievementById(id) {
  return http.get(`/achievements/${id}`);
}

export function createAchievement(payload) {
  return http.post('/achievements', { data: payload });
}

export function updateAchievement(id, payload) {
  return http.put(`/achievements/${id}`, { data: payload });
}

export function deleteAchievement(id) {
  return http.delete(`/achievements/${id}`);
}

// 6. 简历模块（resumes）
export function fetchResumes(params) {
  return http.get('/resumes', { params });
}

export function fetchResumeById(id) {
  return http.get(`/resumes/${id}`);
}

export function createResume(payload) {
  return http.post('/resumes', { data: payload });
}

export function updateResume(id, payload) {
  return http.put(`/resumes/${id}`, { data: payload });
}

export function deleteResume(id) {
  return http.delete(`/resumes/${id}`);
}

// 7. 反馈模块（feedbacks）
export function fetchFeedbacks(params) {
  return http.get('/feedbacks', { params });
}

export function fetchFeedbackById(id) {
  return http.get(`/feedbacks/${id}`);
}

export function createFeedback(payload) {
  return http.post('/feedbacks', { data: payload });
}

export function updateFeedback(id, payload) {
  return http.put(`/feedbacks/${id}`, { data: payload });
}

export function deleteFeedback(id) {
  return http.delete(`/feedbacks/${id}`);
}

// 8. 咨询模块（consults）
export function fetchConsults(params) {
  return http.get('/consults', { params });
}

export function fetchConsultById(id) {
  return http.get(`/consults/${id}`);
}

export function createConsult(payload) {
  return http.post('/consults', { data: payload });
}

export function updateConsult(id, payload) {
  return http.put(`/consults/${id}`, { data: payload });
}

export function deleteConsult(id) {
  return http.delete(`/consults/${id}`);
}

// 9. 统计模块（statistics）
export function fetchStatistics(params) {
  return http.get('/statistics', { params });
}

export function fetchStatisticById(id) {
  return http.get(`/statistics/${id}`);
}

export function createStatistic(payload) {
  return http.post('/statistics', { data: payload });
}

export function updateStatistic(id, payload) {
  return http.put(`/statistics/${id}`, { data: payload });
}

export function deleteStatistic(id) {
  return http.delete(`/statistics/${id}`);
}

// 10. 认证模块（auth）- Strapi内置
export function login(identifier, password) {
  return http.post('/auth/local', { identifier, password });
}

export function register(userInfo) {
  return http.post('/auth/local/register', userInfo);
}

export function forgotPassword(email) {
  return http.post('/auth/forgot-password', { email });
}

export function resetPassword(code, password, passwordConfirmation) {
  return http.post('/auth/reset-password', {
    code,
    password,
    passwordConfirmation
  });
}

// 11. 用户模块（users）- Strapi内置
export function fetchMe() {
  return http.get('/users/me');
}

export function updateMe(payload) {
  return http.put('/users/me', payload);
}

// 12. 文件上传模块（upload）- Strapi内置
export function uploadFile(formData) {
  return http.post('/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}

export function deleteFile(id) {
  return http.delete(`/upload/files/${id}`);
}

// 导出http实例，以便在需要时直接使用
export default http;
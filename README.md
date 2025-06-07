# 🌸 Mankai Academy - Japanese Learning Platform

A comprehensive web-based Japanese language learning platform designed for students to improve their Japanese skills through interactive modules and assessments.

## 🌐 Live Demo

**Website URL:** [https://letoan0902.github.io/MankaiUser/](https://letoan0902.github.io/MankaiUser/)

## 📋 Project Overview

Mankai Academy is an educational platform that provides:
- **Authentication & Student Management** - User registration, login, and profile management
- **Course Management** - Structured Japanese learning courses
- **Topic & Vocabulary Management** - Interactive vocabulary learning modules
- **Session Management** - Track learning progress and session history
- **Exam Management** - Assessment system with quizzes and tests

## 🏗️ Project Structure

```
MankaiUser/
├── Authentication-StudentManager/    # User authentication and management
├── CourseManager/                   # Course content and management
├── TopicManager-VocabularyManager/  # Vocabulary and topic modules
├── SessionManager/                  # Learning session tracking
├── ExamManager/                     # Assessment and testing system
├── assets/                          # Images, icons, and media files
├── fonts/                          # Custom fonts for Japanese text
├── .github/workflows/              # GitHub Actions for deployment
├── index.html                      # Main entry point
└── README.md                       # Project documentation
```

## 🚀 Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions.

### Deployment Process:
1. Push changes to the `main` branch
2. GitHub Actions automatically builds and deploys
3. Website becomes available at the GitHub Pages URL

### Manual Deployment Setup:
1. Go to repository Settings → Pages
2. Set Source to "GitHub Actions"
3. The deployment workflow will handle the rest

## 💻 Local Development

To run this project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/letoan0902/MankaiUser.git
   cd MankaiUser
   ```

2. **Open with a local server:**
   - Use Live Server extension in VS Code, or
   - Use Python: `python -m http.server 8000`, or
   - Use Node.js: `npx http-server`

3. **Access the application:**
   - Open `http://localhost:8000` in your browser

## 🛠️ Technologies Used

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Styling:** Modern CSS with Flexbox/Grid, Responsive Design
- **Deployment:** GitHub Pages with GitHub Actions
- **Version Control:** Git & GitHub

## 🌏 Features

### 🔐 Authentication System
- User registration and login
- Profile management
- Session persistence

### 📚 Learning Modules
- Interactive vocabulary learning
- Topic-based lessons
- Progress tracking
- Multiple learning modes

### 📝 Assessment System
- Quizzes and tests
- Performance analytics
- Result tracking
- Adaptive difficulty

### 📱 Responsive Design
- Mobile-friendly interface
- Cross-browser compatibility
- Modern UI/UX design

## 🔧 Configuration

The project uses relative paths for GitHub Pages compatibility. All asset references and navigation links use relative paths starting from the project root.

## 📈 Performance

- Optimized images and assets
- Minimal external dependencies
- Fast loading times
- Efficient resource management

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Open a Pull Request

## 📧 Contact

For questions or feedback about Mankai Academy, please open an issue in this repository.

---

**Last Updated:** December 2024
**Version:** 2.0.0 - GitHub Pages Compatible 
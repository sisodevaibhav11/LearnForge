# LearnForge Backend API

RESTful API backend for LearnForge built with Node.js (ESM), Express.js 5, MongoDB (Atlas), and the Google Gemini API.

## API Endpoints Summary

### Authentication (`/api/auth`)
- `POST /register`: Register a new user account.
- `POST /login`: Log in and retrieve JWT bearer token.
- `GET /profile`: Get authenticated user profile.
- `PUT /profile`: Update user profile details.
- `POST /change-password`: Change user password.

### Documents (`/api/documents`)
- `POST /upload`: Upload PDF or TXT file (Multer).
- `GET /`: Get all documents with flashcard and quiz counts.
- `GET /:id`: Get specific document and extracted text chunks.
- `PUT /:id`: Update document metadata.
- `DELETE /:id`: Delete document and all associated quizzes/flashcards.

### AI Engine (`/api/ai`)
- `POST /generate-flashcards`: Generate flashcards from document context.
- `POST /generate-quiz`: Generate multiple-choice quiz from document topic.
- `POST /generate-summary`: Generate executive summary of document.
- `POST /chat`: RAG contextual conversation with document chunks.
- `POST /explain-concept`: Generate structured explanation of concept.
- `GET /chat-history/:documentId`: Fetch saved chat history.
- `GET /concept-history/:documentId`: Fetch saved concept explanation history.

### Flashcards (`/api/flashcards`)
- `GET /`: Get all flashcard sets.
- `GET /:documentId`: Get flashcards for a specific document.
- `POST /:cardId/review`: Record flashcard review.
- `PUT /:flashcardSetId/toggle-star`: Toggle starred card.
- `DELETE /:id`: Delete flashcard set.

### Quizzes (`/api/quizzes`)
- `GET /:documentId`: Get all quizzes for document.
- `GET /quiz/:id`: Get quiz questions by ID.
- `POST /:id/submit`: Submit answers and get instant scoring.
- `GET /:id/results`: Get detailed quiz results.
- `DELETE /:id`: Delete quiz.

### Progress & Dashboard (`/api/progress`)
- `GET /dashboard`: Aggregate study metrics, streak calculations, and recent activity.

### System (`/api/health`)
- `GET /health`: Server health check.

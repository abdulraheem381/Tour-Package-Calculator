# Tour-Package-Calculator

Tour-Package-Calculator is a real-world **Tour Package Management and Expense Tracking application** built as part of a DevOps learning-in-public journey.

The goal of this project is not only the application itself, but the **systems, pipelines, and infrastructure** that take code from **commit to production** in a reliable, repeatable, and production-ready way.

---

## 🚀 Project Goals

- Learn DevOps by building and operating a real application
- Design and evolve CI/CD pipelines step by step
- Practice containerization, deployment, and infrastructure decisions (Docker, Kubernetes)
- Document every major decision, failure, and trade-off publicly
- Keep the stack simple, open-source, and low-cost

---

## 🏗️ What This Project Is (and Is Not)

**This project IS:**
- A realistic 3-tier application (frontend, backend, database)
- A playground for CI/CD, Docker, Kubernetes, and observability
- A tool for calculating tour packages, managing services, hotels, and rates.

**This project is NOT:**
- A production business
- A generic e-commerce storefront

The focus is **DevOps, not just features**.

---

## 🧠 High-Level Architecture

```

Frontend (React/Vite)  →  Backend API (Node.js/Express)  →  Database (MongoDB)

```

The architecture is designed to be containerized and orchestrated via Docker and Kubernetes.

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite), Tailwind CSS
- **Backend:** Node.js (Express)
- **Database:** MongoDB (Mongoose)
- **CI/CD:** GitHub Actions
- **Containerization:** Docker & Docker Compose
- **Deployment:** Incremental (VM → containers → Kubernetes)

---

## 📂 Repository Structure

```

Tour-Package-Calculator/
├── app/                 # Application source code
│   ├── frontend/        # React frontend
│   ├── backend/         # Node.js backend
│
├── docker-compose.yml   # Multi-container setup
├── .github/             # CI workflows
│   └── workflows/
│
├── LICENSE
└── README.md

```

---

## 🗺️ Roadmap (High Level)

- **Phase 0:** Repository setup & architectural planning
- **Phase 1:** CI pipelines (linting, tests, builds)
- **Phase 2:** Containerization with Docker
- **Phase 3:** Continuous deployment
- **Phase 4:** Kubernetes orchestration
- **Phase 5:** Observability & reliability

---

## ⚡ Local Development

### Prerequisites
- Node.js (v18+)
- MongoDB (Running locally or via Docker)

### 1. Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd app/backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:
   ```bash
   cp .env.example .env
   # Ensure MONGO_URI is pointing to your MongoDB instance
   ```
4. Start the server:
   ```bash
   npm start # or node server.js
   ```

### 2. Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd app/frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

---

## 📖 Learning in Public

Every major step in this project is documented through:
- Blogs (DevOps Diaries)
- GitHub decision records
- Short updates on X (Twitter)

---

## 🔗 Links

- 🐦 **X (Twitter):** [Abdulraheem183](https://x.com/Abdulraheem183)
- 🌐 **Portfolio:** [abdulraheem.cloud](https://abdulraheem.cloud)
- ✍️ **Hashnode (Project Blog Series):** [abdulraheem.hashnode.dev](https://abdulraheem.hashnode.dev/)

## 🤝 Contributions

Contributions are welcome as the project stabilizes. For now, this repository serves as a personal DevOps lab.

---

## 📜 License

This project is licensed under the **MIT License**.

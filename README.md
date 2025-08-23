

```markdown
# Learn Nest Fullstack Project  

A **fullstack web application** built with:  
- **Frontend**: React + Vite + TailwindCSS  
- **Backend**: NestJS (Node.js framework)  

This project is a learning playground for building scalable applications with a clean separation between client and server.  

---

## 📂 Project Structure
```

learn-nest/
│── client/    # React + Vite frontend
│── server/    # NestJS backend
│── README.md  # Project documentation

````

---

## 🚀 Features
- React frontend with Vite for fast dev experience  
- TailwindCSS for styling  
- NestJS backend for API and business logic  
- Monorepo-style project (frontend + backend in one place)  

---

## 🛠️ Installation  

Clone the repo:
```bash
git clone https://github.com/glorisonglotech/learn-nest.git
cd learn-nest
````

### Install dependencies for both apps:

```bash
cd client && npm install
cd ../server && npm install
```

---

## ▶️ Running the Project

### Run Frontend (React + Vite):

```bash
cd client
npm run dev
```

App runs on:
👉 [http://localhost:5173](http://localhost:5173)

### Run Backend (NestJS):

```bash
cd server
npm run start:dev
```

API runs on:
👉 [http://localhost:3000](http://localhost:3000)

---

## ⚡ Run Both Together (Optional)

At the root, create a `package.json` and add:

```json
{
  "name": "learn-nest-root",
  "private": true,
  "scripts": {
    "dev": "concurrently \"npm run dev --prefix client\" \"npm run start:dev --prefix server\""
  },
  "devDependencies": {
    "concurrently": "^9.0.0"
  }
}
```

Install concurrently at root:

```bash
npm install --save-dev concurrently
```

Now you can run:

```bash
npm run dev
```

This starts **frontend + backend together** 🚀

---

## 📌 Next Steps

* [ ] Add API routes in NestJS
* [ ] Connect a database (e.g., PostgreSQL, MongoDB)
* [ ] Build UI components in React
* [ ] Deploy to production (e.g., Vercel + Render)

---

## 🤝 Contributing

1. Fork the repo
2. Create a new branch (`feature/my-feature`)
3. Commit changes (`git commit -m "feat: add my feature"`)
4. Push to branch
5. Open a Pull Request

---

## 📜 License

This project is open-source under the **MIT License**.

```

Do you want me to also **add badges (React, NestJS, Tailwind, Vite, Node)** at the very top of this README so it looks more professional?
```

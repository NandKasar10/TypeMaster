# TypeMaster – Typing Speed Test Application

A real-time typing speed and accuracy analyzer, built as a **Vocational Training project in Backend Development** at **Techonet Pvt. Ltd., Bhilai**, and later evolved into an **AI-powered backend** using FastAPI, SQLite and the Gemini API.

![Python](https://img.shields.io/badge/Python-3.x-blue)
![Flask](https://img.shields.io/badge/Flask-Phase%201-lightgrey)
![FastAPI](https://img.shields.io/badge/FastAPI-Phase%202-009688)
![SQLite](https://img.shields.io/badge/SQLite-SQLModel-003B57)
![Gemini](https://img.shields.io/badge/Gemini%20API-Tool%20Calling-4285F4)


## Features

- Real-time typing metrics: **WPM (words per minute)** and **accuracy**
- Clean, lightweight frontend with vanilla HTML, CSS and JavaScript
- Python backend engine (Flask in Phase 1, FastAPI in Phase 2)
- Persistent data storage with SQLite managed through SQLModel (Phase 2)
- Gemini API integration with custom tool calling (Phase 2)
- Background Tasks for heavy GenAI processing without blocking the server (Phase 2)

---

## Project Evolution

### Phase 1 – The Foundation (Flask)

| Layer | Technology |
|---|---|
| Backend engine | Python with Flask |
| Frontend UI | Vanilla HTML, CSS, JavaScript |
| Data handling | Client-side Local Storage (zero database dependency) |

**Limitations that led to Phase 2**

- **Volatile data:** browser Local Storage clears easily, so there is no persistence.
- **Synchronous execution:** single-thread processing blocks the server on heavy tasks.
- **Basic logic:** cannot support complex integrations such as AI.

### Phase 2 – The Evolution (AI-Powered Backend)

| Concern | Solution |
|---|---|
| Core engine | FastAPI for high-performance, asynchronous routing |
| Data persistence | SQLite managed through SQLModel (ORM) |
| AI integration | Gemini API with custom tool calling |
| Heavy workloads | Background Tasks for GenAI processing |

---

## Tech Stack

- **Language:** Python
- **Backend:** Flask (Phase 1), FastAPI (Phase 2)
- **Frontend:** HTML, CSS, JavaScript
- **Database / ORM:** SQLite, SQLModel
- **AI:** Google Gemini API

---

## Getting Started

> Adjust the file and folder names below to match your repository.

### 1. Clone the repository

```bash
git clone https://github.com/NandKasar10/<your-repo-name>.git
cd <your-repo-name>
```

### 2. Create a virtual environment and install dependencies

```bash
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### 3. Run the app

**Phase 1 (Flask)**

```bash
python app.py
```

**Phase 2 (FastAPI)**

```bash
uvicorn main:app --reload
```

For Phase 2, set your Gemini API key as an environment variable before running:

```bash
export GEMINI_API_KEY="your-api-key"     # Windows: set GEMINI_API_KEY=your-api-key
```

Then open the URL shown in the terminal (typically `http://127.0.0.1:5000` for Flask or `http://127.0.0.1:8000` for FastAPI).

---

## Project Structure

<!-- Replace with your actual folder layout -->
```
├── app.py / main.py        # Backend entry point
├── templates/              # HTML pages
├── static/                 # CSS and JavaScript
├── models.py               # SQLModel data models (Phase 2)
├── requirements.txt
└── README.md
```

---

## Documentation

A detailed **69-page project report** was submitted to the training organization. It covers:

- System architecture with complete flowcharts and data flow diagrams
- API specifications: documented routes for Flask and frontend integration
- Database schemas: data models as table structures

---

## Future Scope

Moving towards a production-ready backend with persistent relational storage, asynchronous processing and deeper AI integration.

---

## Acknowledgements

- **Techonet Pvt. Ltd., Bhilai** for the vocational training opportunity
- **Chhattisgarh Swami Vivekanand Technical University (CSVTU), Bhilai**
- **Rungta College of Engineering & Technology, Bhilai**

---

## Author

**Nand Kumar Kasar**
B.Tech, Computer Science and Engineering (AIML)

- GitHub: [github.com/NandKasar10](https://github.com/NandKasar10)
- LinkedIn: [linkedin.com/in/nand-kumar-kasar-902286311](https://www.linkedin.com/in/nand-kumar-kasar-902286311/)

---

## License

<!-- Choose a license, e.g. MIT, and add a LICENSE file -->
This project is for educational purposes.
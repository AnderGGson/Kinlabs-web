const topics = [
  {
    id: "matematica",
    title: "Matemática básica",
    content:
      "La matemática básica ayuda a resolver problemas de la vida diaria. Incluye operaciones como suma, resta, multiplicación y división. También permite comprender cantidades, medidas y porcentajes.",
    question: "¿Cuál operación se usa para encontrar el total de varios números?",
    answers: ["Resta", "Suma", "División"],
    correct: "Suma"
  },
  {
    id: "comunicacion",
    title: "Comunicación",
    content:
      "La comunicación es el proceso mediante el cual las personas comparten ideas, pensamientos y sentimientos. Para comunicarnos usamos palabras, gestos, imágenes y sonidos.",
    question: "¿Qué elemento permite transmitir una idea a otra persona?",
    answers: ["Mensaje", "Silencio", "Ruido"],
    correct: "Mensaje"
  },
  {
    id: "ciencias",
    title: "Ciencias naturales",
    content:
      "Las ciencias naturales estudian la naturaleza, los seres vivos, el cuerpo humano, la materia, la energía y el ambiente. Nos ayudan a comprender cómo funciona el mundo.",
    question: "¿Qué estudian las ciencias naturales?",
    answers: ["La naturaleza", "Los videojuegos", "Las redes sociales"],
    correct: "La naturaleza"
  },
  {
    id: "tecnologia",
    title: "Tecnología",
    content:
      "La tecnología permite crear herramientas para resolver problemas. Puede usarse en la educación, la salud, la comunicación y el trabajo. Un ejemplo es una app educativa.",
    question: "¿Para qué sirve principalmente la tecnología?",
    answers: ["Resolver problemas", "Crear problemas", "Evitar estudiar"],
    correct: "Resolver problemas"
  }
];

const topicList = document.getElementById("topicList");
const topicTitle = document.getElementById("topicTitle");
const topicContent = document.getElementById("topicContent");
const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answers");
const result = document.getElementById("result");
const notes = document.getElementById("notes");
const saveNotes = document.getElementById("saveNotes");
const notesMessage = document.getElementById("notesMessage");

let selectedTopic = null;

function renderTopics() {
  topics.forEach((topic) => {
    const button = document.createElement("button");
    button.className = "topic-btn";
    button.textContent = topic.title;

    button.addEventListener("click", () => {
      selectedTopic = topic;
      showTopic(topic);
      setActiveButton(button);
    });

    topicList.appendChild(button);
  });
}

function setActiveButton(activeButton) {
  const buttons = document.querySelectorAll(".topic-btn");

  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  activeButton.classList.add("active");
}

function showTopic(topic) {
  topicTitle.textContent = topic.title;
  topicContent.textContent = topic.content;
  questionText.textContent = topic.question;
  result.textContent = "";
  notesMessage.textContent = "";

  answersContainer.innerHTML = "";

  topic.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.textContent = answer;

    button.addEventListener("click", () => {
      checkAnswer(answer, topic.correct);
    });

    answersContainer.appendChild(button);
  });

  const savedNote = localStorage.getItem(`nota-${topic.id}`);
  notes.value = savedNote || "";
}

function checkAnswer(answer, correctAnswer) {
  if (answer === correctAnswer) {
    result.textContent = "Respuesta correcta. ¡Muy bien!";
    result.style.color = "#10B981";
  } else {
    result.textContent = "Respuesta incorrecta. Intenta de nuevo.";
    result.style.color = "#DC2626";
  }
}

saveNotes.addEventListener("click", () => {
  if (!selectedTopic) {
    notesMessage.textContent = "Primero selecciona un tema.";
    notesMessage.style.color = "#DC2626";
    return;
  }

  localStorage.setItem(`nota-${selectedTopic.id}`, notes.value);
  notesMessage.textContent = "Notas guardadas correctamente.";
  notesMessage.style.color = "#10B981";
});

renderTopics();
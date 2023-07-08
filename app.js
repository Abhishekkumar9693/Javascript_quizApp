const question = [
  {
    que: "Which of the following element is responsible for making the text bold in HTML?",
    a: "<pre>",
    b: "<a>",
    c: " <b> ",
    d: " <br>",
    correct: "c",
  },

  {
    que: "Which of the following tag is used to insert a line-break in HTML ",
    a: "<br>",
    b: "<a> ",
    c: " <pre>",
    d: " <b>",
    correct: "a",
  },

  {
    que: "How to create an unordered list (a list with the list items in bullets) in HTML? ",
    a: "<ul>",
    b: "<ol> ",
    c: " <li>",
    d: " <i>",
    correct: "a",
  },
  {
    que: "How to create an ordered list (a list with the list items in numbers) in HTML? ",
    a: "<ul>",
    b: "<ol> ",
    c: " <li>",
    d: " <i>",
    correct: "b",
  },
];

let index = 0;
let total = question.length;
let right = 0,
  worng = 0;
const queBox = document.getElementById("queBox");
const optionInput = document.querySelectorAll(".options");
const loadQuestion = () => {
  if (index === total) {
    return endQuiz();
  }
  reset();
  const data = question[index];
//   console.log(data);
  queBox.innerText = `${index + 1}. ${data.que}`;
  optionInput[0].nextElementSibling.innerText = data.a;
  optionInput[1].nextElementSibling.innerText = data.b;
  optionInput[2].nextElementSibling.innerText = data.c;
  optionInput[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
  const data = question[index];
  const ans = getans();
  console.log(ans,data.correct)
  if (ans == data.correct) {
    right++;
  } else {
    worng++;
  }
  index++;
  loadQuestion();
  return;
};

const getans = () => {
  let answer;
  optionInput.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};
const reset = () => {
  optionInput.forEach((input) => {
    input.checked = false;
  });
};
const endQuiz = () => {
  document.getElementById("box").innerHTML = `
  <div style="text-align:center">
    <h3> Thanku you for playing the quiz</h3>
    <h2>${right}/${total} are correct</h2>
    <div>`
};

loadQuestion();

import JeoparyService from "./jeopardyService.js";




let _jeopardyService = new JeoparyService()

function _drawJeopardy() {
  let questions = _jeopardyService.Question
  let template = ""
  for (let i = 0; i < questions.length; i++) {
    let question = questions[i]
    template += question.listTemplate
  }
  console.log(template)
  document.getElementById("question-list").innerHTML = template
}


//PUBLIC
export default class JeopardyController {
  constructor() {
    //register subscribers
    _jeopardyService.addSubscribers('questions', _drawJeopardy)
    _jeopardyService.getApiQuestions()
  }
}
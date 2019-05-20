import Question from "../models/jeopardy.js";


let _api = new axios.create({
  baseURL: 'http://jservice.io/api/random'
})


let _state = {
  questions: []
}
let _subscribers = {
  questions: []
}

function setState(propName, data) {
  _state[propName] = data
  _subscribers[propName].forEach(fn => fn())
}

export default class JeoparyService {
  addSubscribers(propName, fn) {
    _subscribers[propName].push(fn)
  }
  get Question() {
    return _state.questions.map(q => new Question(q))
  }
  getApiQuestions() {
    _api.get('')
      .then(response => {
        let data = response.data.map(rawData => new Question(rawData))
        setState('questions', data)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
export default class Question {
  constructor(data) {
    this.answer = data.answer
    this.question = data.question
    this.value = data.value
  }

  get listTemplate() {
    return `<li>Question: ${this.question} <br /> Answer: ${this.answer}</li>`
  }
}


// {
//   "id": 44229,
//     "answer": "Branson, Missouri",
//       "question": "A city in the Ozarks",
//         "value": 100, "airdate": "2001-02-23T12:00:00.000Z",
//           "created_at": "2014-02-11T23:12:30.572Z",
//             "updated_at": "2014-02-11T23:12:30.572Z",
//               "category_id": 5475,
//                 "game_id": null,
//                   "invalid_count": null,
//                     "category": { "id": 5475, "title": "branson, hanson or manson", "created_at": "2014-02-11T23:12:30.458Z", "updated_at": "2014-02-11T23:12:30.458Z", "clues_count": 5 }
// }

import JeopardyController from "./components/jeopardyController.js";



class App {
  constructor() {
    this.controllers = {
      jeopardyController: new JeopardyController()
    }
  }
}

window['app'] = new App();
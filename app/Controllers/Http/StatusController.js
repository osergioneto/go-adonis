"use strict";

class StatusController {
  index({ request, response }) {
    try {
      return response.status(200).send({
        success: { message: `API Funcionando ;)` }
      });
    } catch (error) {
      return response.status(500).send({
        success: { message: `Algo deu errado :(` }
      });
    }
  }
}

module.exports = StatusController;

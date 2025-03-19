const { ObjectId } = require('mongodb');

module.exports = [
  {
    metodo: ["GET", "POST", "PATCH", "DELETE"],
    role_id: new ObjectId("64b7f8e2f2a4b5d6c7e8f9a0"),
    rota_id: new ObjectId("64b7f8e2f2a4b5d6c7e8f9a8")
  },
  {
    metodo: ["GET", "PATCH"],
    role_id: new ObjectId("64b7f8e2f2a4b5d6c7e8f9a1"),
    rota_id: new ObjectId ("64b7f8e2f2a4b5d6c7e8f9a8")
  },
  {
    metodo: ["GET", "PATCH"],
    role_id: new ObjectId("64b7f8e2f2a4b5d6c7e8f9a2"),
    rota_id: new ObjectId("64b7f8e2f2a4b5d6c7e8f9a8")
  }
];
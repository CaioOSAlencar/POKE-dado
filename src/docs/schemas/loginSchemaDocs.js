const loginSchema = {
  retornoLogin: {
    "application/json": {
      schema: {
        type: "object",
        example: {
          "success": true,
          "data": {
            "refreshtoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZDJkOTMyMDY5NGVjY2I5OWZlODEwYSIsImFwZWxpZG8iOiJKb24gU25vdyIsIm5fc29ydGUiOjcsImlhdCI6MTc0MTg3MzY2OSwiZXhwIjoxNzQxOTE2ODY5fQ.OGYJdTFIT7_73XS6G3Sxx6Epmj1pZl0IRibJPKz7aTw",
            "accesstoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZDJkOTMyMDY5NGVjY2I5OWZlODEwYSIsImFwZWxpZG8iOiJKb24gU25vdyIsImlhdCI6MTc0MTg3MzY2OSwiZXhwIjoxNzQxODczOTY5fQ.xNYA0RWJAUrCeLC3NcOiK5p6GaXwRKPyrD3TbQWAieE",
            "user": {
              "_id": "67d2d9320694eccb99fe810a",
              "apelido": "Jon Snow",
              "n_sorte": 7,
              "role": null,
              "mesa_id": null
            }
          }
        }
      }
    }
  },
  erro500Login: {
    "application/json": {
      schema: {
        type: "object",
        example: {
          "success": false,
          "message": "Erro ao buscar usuário no banco de dados",
          "details": [
            "Erro ao buscar usuário no banco de dados"
          ]
        }
      }
    }
  },
}

export default loginSchema;

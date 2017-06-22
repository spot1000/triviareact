let correct = 0
let streak = 0
let currentQuestion = {}
export const gotRight = (correct, streak) => {
  return {
    type: 'GOT_RIGHT',
    correct: correct++
    streak: streak++
  }
}

export const gotWrong = () => {
  return {
    type:'GOT_WRONG'

  }
}


export const getNewQuestions = () => {

  axios.get("https://opentdb.com/api.php?amount=1")
    .then(response => {
      return {
        currentQuestion : response.data.results[0]
      }
      })
    })
}

// export const displayQuestion = () => {
//   return
// }

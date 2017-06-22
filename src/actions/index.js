let correct = 0
let currentQuestion = {}
export const gotRight = () => {
  return {
    type: 'GOT_RIGHT',
    correct: correct++
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

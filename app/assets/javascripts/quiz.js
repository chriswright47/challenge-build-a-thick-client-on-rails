function Quiz(id, name) {
  this.id = id;
  this.name = name;
  this.answers = [];
}

Quiz.prototype.addAnswer = function(answer) {
  this.answers.push(answer);
}

Quiz.prototype.renderNewStatus = function() {
  return '<h5>First question, click on an answer to submit</h5>';
}

var renderQuizList = function(quizzes) {
  $('.container').html("<ul class='quiz_list'></ul>");
  for (var i=0; i<quizzes.length; i++) {
    $('.container').append(renderQuiz(quizzes[i]));
  }
}

var renderQuiz = function(quiz) {
  return "<li class='quiz_link' data-quiz-id="+quiz.quiz_id+">" + quiz.name + "</li>";
}

var renderQuizStatus = function(status) {
  return '<h5>You have gotten ' + status.num_correct + ' correct out of ' + (status.num_correct+status.num_incorrect) + '</h5>'
}
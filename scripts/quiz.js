var myQuestions = [
	{
		question: "O que é User Interface?",
		answers: {
			a: 'Área voltada para propostas visuais com o objetivo de melhorar a interação entre os usuários e aplicativos.',
			b: 'Área de backend em que o profissional estará desenvolvendo uma estrutura para possibilitar a operação de um sistema.',
			c: 'Área de realização de pesquisas e que testa caminhos para melhorar a jornada do usuário.'
		},
		correctAnswer: 'a'
	},
	{
		question: "Em relação a robótica na TI, escolha a frase que melhor define esse tópico.",
		answers: {
			a: 'A robótica não foi importante para a TI, já que são áreas completamente distintas que não caminham juntas.',
			b: 'Com a evolução das tecnologias, inteligência artificial e ciência de dados, a robótica e TI foram ficando cada vez mais próximas.',
			c: 'Robótica e TI são sinônimos, pois ambos os termos se referem ao mesmo assunto.',
		},
		correctAnswer: 'b'
	},
	{
		question: "Qual linguagem é conhecida como 'linguagem de marcação'?",
		answers: {
			a: 'Phyton.',
			b: 'CSS.',
			c: 'Javascript.',
			d: 'HTML.',
		},
		correctAnswer: 'd'
	},
    {
		question: "O que é um arduíno?",
		answers: {
			a: 'É uma plataforma de prototipagem eletrônica de hardware livre e de placa única.',
			b: 'É um robô seguidor de linha muito utilizado no meio acadêmico.',
			c: 'Era uma micro peça utilizada para a elaboração de estrturas robóticas, mas com o tempo se tornou defasada e não é mais utilizada.',
		},
		correctAnswer: 'a'
	},
    {
		question: "Qual linguagem é utilizada para programar no arduíno?",
		answers: {
			a: 'Node.js.',
			b: 'Java.',
			c: 'C/C++.',
		},
		correctAnswer: 'c'
	} 
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
	
		var output = [];
		var answers; 

		
		for(var i=0; i<questions.length; i++){
			
			
			answers = [];

			
			for(letter in questions[i].answers){

				
				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					
						+ questions[i].answers[letter]
					+ '</label>'
				);
			}

			
			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		
		quizContainer.innerHTML = output.join('');
	}


	function showResults(questions, quizContainer, resultsContainer){
			
		
		var answerContainers = quizContainer.querySelectorAll('.answers');
		
		
		var userAnswer = '';
		var numCorrect = 0;
		
		
		for(var i=0; i<questions.length; i++){

			
			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			
			
			if(userAnswer===questions[i].correctAnswer){
				
				numCorrect++;
				
				
				answerContainers[i].style.color = '#297';
			}
			
			else{
				
				answerContainers[i].style.color = 'red';
			}
		}

			
			resultsContainer.innerHTML = numCorrect + ' de ' + questions.length;
		}


	showQuestions(questions, quizContainer);

	
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}

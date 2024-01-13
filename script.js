let currentQuestion = 1;
let score = 0;

function showQuestion(questionNumber) {
    document.querySelectorAll('.question').forEach((question) => {
        question.style.display = 'none';
    });

    document.getElementById(`question${questionNumber}`).style.display = 'block';
}

function next(questionNumber) {
    const selectedOption = document.querySelector(`input[name="question${questionNumber}"]:checked`);

    if (selectedOption) {
        if (selectedOption.id === `correct${questionNumber}`) {
            score++;
        }

        currentQuestion++;
        if (currentQuestion <= 5) {
            showQuestion(currentQuestion);
        } else {
            submitQuiz();
        }
    } else {
        alert("Please select an option before moving to the next question.");
    }
}

function showResult() {
    const resultModal = document.getElementById('result-modal');
    const resultMessage = document.getElementById('result-message');
    const closeButton = document.getElementById('close-button');

    resultMessage.textContent = `You scored ${score} out of 5!`;
    resultModal.style.display = 'block';

    closeButton.onclick = function () {
        resultModal.style.display = 'none';
    };

    window.onclick = function (event) {
        if (event.target === resultModal) {
            resultModal.style.display = 'none';
        }
    };
}

function submitQuiz() {
    // Redirect to a new page with the score
    window.location.href = `result.html?score=${score}`;
}

function closeResultModal() {
    const resultModal = document.getElementById('result-modal');
    resultModal.style.display = 'none';
}

// Initial display
showQuestion(currentQuestion);

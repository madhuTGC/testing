

const score = document.querySelector('.score');
const startScreen = document.querySelector('.startScreen');
const gameArea = document.querySelector('.gameArea');
const level = document.querySelector('.level');
let currentQuestionIndex = 0;


let gameStart = new Audio();
let gameOver = new Audio();




const QuestionList=
    [
        {
          "Id_Game": 10,
          "Start_Date": null,
          "Expiry_Date": null,
          "Id_Assessment_question": 79,
          "Id_Assessment": 14,
          "Assessment_Question": "1.भारत के वर्तमान सीईओ कौन हैं?",
          "allow_attempt": 1,
          "Previous_button": 0,
          "Assessment_Type": 4,
          "assessment_question_url": null,
          "Timer": 30,
          "optionList": [
            {
              "Id_Assessment_question_ans": 280,
              "Id_Assessment_question": 79,
              "Answer_Description": "a)गुंजन शाहrn",
              "Right_Ans": 1,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701946587000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 281,
              "Id_Assessment_question": 79,
              "Answer_Description": "b)संदीप कटारिया",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701946621000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 282,
              "Id_Assessment_question": 79,
              "Answer_Description": "ग) क्रिस किर्क",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701946648000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 283,
              "Id_Assessment_question": 79,
              "Answer_Description": "d)इनमें से कोई नहीं",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701946673000)",
              "Id_CmsUser": 21
            }
          ]
        },
        {
          "Id_Game": 10,
          "Start_Date": null,
          "Expiry_Date": null,
          "Id_Assessment_question": 80,
          "Id_Assessment": 14,
          "Assessment_Question": "3.बाटा इंडिया लिमिटेड (BIL) की शुरुआत हुई:rn",
          "allow_attempt": 1,
          "Previous_button": 0,
          "Assessment_Type": 4,
          "assessment_question_url": null,
          "Timer": 30,
          "optionList": [
            {
              "Id_Assessment_question_ans": 288,
              "Id_Assessment_question": 80,
              "Answer_Description": "ए)1894",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947726000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 289,
              "Id_Assessment_question": 80,
              "Answer_Description": "बी)1931",
              "Right_Ans": 1,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947748000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 290,
              "Id_Assessment_question": 80,
              "Answer_Description": "ग)1936",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947769000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 291,
              "Id_Assessment_question": 80,
              "Answer_Description": "घ) उपरोक्त में से कोई नहीं",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947796000)",
              "Id_CmsUser": 21
            }
          ]
        },
        {
          "Id_Game": 10,
          "Start_Date": null,
          "Expiry_Date": null,
          "Id_Assessment_question": 81,
          "Id_Assessment": 14,
          "Assessment_Question": "4. भारत में 3 विनिर्माण इकाइयों के नाम बताइए।",
          "allow_attempt": 1,
          "Previous_button": 0,
          "Assessment_Type": 4,
          "assessment_question_url": null,
          "Timer": 30,
          "optionList": [
            {
              "Id_Assessment_question_ans": 292,
              "Id_Assessment_question": 81,
              "Answer_Description": "ए) बाटा नगर,",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947821000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 293,
              "Id_Assessment_question": 81,
              "Answer_Description": "b) बाटा गंज",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947844000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 294,
              "Id_Assessment_question": 81,
              "Answer_Description": "c) बता शतक",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947866000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 295,
              "Id_Assessment_question": 81,
              "Answer_Description": "D। उपरोक्त सभी",
              "Right_Ans": 1,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947885000)",
              "Id_CmsUser": 21
            }
          ]
        },
        {
          "Id_Game": 10,
          "Start_Date": null,
          "Expiry_Date": null,
          "Id_Assessment_question": 82,
          "Id_Assessment": 14,
          "Assessment_Question": "5. बाटा कंपनी की दुनिया भर में __ उत्पादन इकाई है।",
          "allow_attempt": 1,
          "Previous_button": 0,
          "Assessment_Type": 4,
          "assessment_question_url": null,
          "Timer": 30,
          "optionList": [
            {
              "Id_Assessment_question_ans": 296,
              "Id_Assessment_question": 82,
              "Answer_Description": "ए) 32",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947915000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 297,
              "Id_Assessment_question": 82,
              "Answer_Description": "बी)34",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947936000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 298,
              "Id_Assessment_question": 82,
              "Answer_Description": "ग) 26",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947961000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 299,
              "Id_Assessment_question": 82,
              "Answer_Description": "घ) 26",
              "Right_Ans": 1,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947977000)",
              "Id_CmsUser": 21
            }
          ]
        },
        {
          "Id_Game": 10,
          "Start_Date": null,
          "Expiry_Date": null,
          "Id_Assessment_question": 83,
          "Id_Assessment": 14,
          "Assessment_Question": "6.BC की उपस्थिति __ से अधिक देशों में है।",
          "allow_attempt": 1,
          "Previous_button": 0,
          "Assessment_Type": 4,
          "assessment_question_url": null,
          "Timer": 30,
          "optionList": [
            {
              "Id_Assessment_question_ans": 300,
              "Id_Assessment_question": 83,
              "Answer_Description": "ए)50+",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947998000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 301,
              "Id_Assessment_question": 83,
              "Answer_Description": "बी)70+",
              "Right_Ans": 1,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948021000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 302,
              "Id_Assessment_question": 83,
              "Answer_Description": "ग)80+",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948064000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 303,
              "Id_Assessment_question": 83,
              "Answer_Description": "घ)100+",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948092000)",
              "Id_CmsUser": 21
            }
          ]
        },
        {
          "Id_Game": 10,
          "Start_Date": null,
          "Expiry_Date": null,
          "Id_Assessment_question": 84,
          "Id_Assessment": 14,
          "Assessment_Question": "7.BCP का पूर्ण रूप क्या है?",
          "allow_attempt": 1,
          "Previous_button": 0,
          "Assessment_Type": 4,
          "assessment_question_url": null,
          "Timer": 30,
          "optionList": [
            {
              "Id_Assessment_question_ans": 304,
              "Id_Assessment_question": 84,
              "Answer_Description": "a) बाटा चैट प्रोग्राम",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948118000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 305,
              "Id_Assessment_question": 84,
              "Answer_Description": "b)बाटा चिल्ड्रेन प्रोग्राम",
              "Right_Ans": 1,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948144000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 306,
              "Id_Assessment_question": 84,
              "Answer_Description": "c) बाटा कॉर्पोरेशन प्रोग्राम",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948166000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 307,
              "Id_Assessment_question": 84,
              "Answer_Description": "d)बाटा कंपनी प्रोफाइलrn",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948192000)",
              "Id_CmsUser": 21
            }
          ]
        },
        {
          "Id_Game": 10,
          "Start_Date": null,
          "Expiry_Date": null,
          "Id_Assessment_question": 85,
          "Id_Assessment": 14,
          "Assessment_Question": "rnrn8)बाटा कंपनी की शुरुआत कब हुई?rn",
          "allow_attempt": 1,
          "Previous_button": 0,
          "Assessment_Type": 4,
          "assessment_question_url": null,
          "Timer": 30,
          "optionList": [
            {
              "Id_Assessment_question_ans": 308,
              "Id_Assessment_question": 85,
              "Answer_Description": "1894rn",
              "Right_Ans": 1,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948219000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 309,
              "Id_Assessment_question": 85,
              "Answer_Description": "बी) 1856",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948240000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 310,
              "Id_Assessment_question": 85,
              "Answer_Description": "ग) 1908",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948263000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 311,
              "Id_Assessment_question": 85,
              "Answer_Description": "घ) 1915",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948289000)",
              "Id_CmsUser": 21
            }
          ]
        },
        {
          "Id_Game": 10,
          "Start_Date": null,
          "Expiry_Date": null,
          "Id_Assessment_question": 86,
          "Id_Assessment": 14,
          "Assessment_Question": "9. BIL के भारत में __ संख्या में स्टोर हैं।",
          "allow_attempt": 1,
          "Previous_button": 0,
          "Assessment_Type": 4,
          "assessment_question_url": null,
          "Timer": 30,
          "optionList": [
            {
              "Id_Assessment_question_ans": 312,
              "Id_Assessment_question": 86,
              "Answer_Description": "ए) 1558",
              "Right_Ans": 1,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948324000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 313,
              "Id_Assessment_question": 86,
              "Answer_Description": "बी) 1200",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948340000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 314,
              "Id_Assessment_question": 86,
              "Answer_Description": "ग) 1100",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948370000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 315,
              "Id_Assessment_question": 86,
              "Answer_Description": "घ) 5000",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948416000)",
              "Id_CmsUser": 21
            }
          ]
        },
        {
          "Id_Game": 10,
          "Start_Date": null,
          "Expiry_Date": null,
          "Id_Assessment_question": 87,
          "Id_Assessment": 14,
          "Assessment_Question": "10.कंप्यूटर सीखना विज्ञान प्रयोगशालाओं तक पहुंच किस कार्यक्रम के अंतर्गत आता है?",
          "allow_attempt": 1,
          "Previous_button": 0,
          "Assessment_Type": 4,
          "assessment_question_url": null,
          "Timer": 30,
          "optionList": [
            {
              "Id_Assessment_question_ans": 316,
              "Id_Assessment_question": 87,
              "Answer_Description": "क) गर्व के साथ आगे बढ़ें।",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948447000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 317,
              "Id_Assessment_question": 87,
              "Answer_Description": "ख) नन्हीं कली।",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948467000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 318,
              "Id_Assessment_question": 87,
              "Answer_Description": "ग) एसटीईएम कार्यक्रम।",
              "Right_Ans": 1,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948492000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 319,
              "Id_Assessment_question": 87,
              "Answer_Description": "घ) हैप्पी फीट।",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948517000)",
              "Id_CmsUser": 21
            }
          ]
        },
        {
          "Id_Game": 10,
          "Start_Date": null,
          "Expiry_Date": null,
          "Id_Assessment_question": 88,
          "Id_Assessment": 14,
          "Assessment_Question": "2.BIL का पूर्ण रूप क्या है?",
          "allow_attempt": 1,
          "Previous_button": 0,
          "Assessment_Type": 4,
          "assessment_question_url": null,
          "Timer": 30,
          "optionList": [
            {
              "Id_Assessment_question_ans": 284,
              "Id_Assessment_question": 88,
              "Answer_Description": "a) बाटा इंडिया लिमिटrn",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947631000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 285,
              "Id_Assessment_question": 88,
              "Answer_Description": "b) बाटा इंडियन लिमिटेडrn",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947650000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 286,
              "Id_Assessment_question": 88,
              "Answer_Description": "c) बाटा इंडिया लिमिटेडrn",
              "Right_Ans": 1,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947675000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 287,
              "Id_Assessment_question": 88,
              "Answer_Description": "d)इनमें से कोई नहीं",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947701000)",
              "Id_CmsUser": 21
            }
          ]
        }

]


gameStart.src = "assets/audio/game_theme.mp3";
gameOver.src = "assets/audio/gameOver_theme.mp3";


const levelSpeed = {easy: 15};


let keys = {
    // ArrowUp: false,
    // ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
}
let player = { speed: 7, score: 0 };
level.addEventListener('click', (e)=> {
    player.speed = levelSpeed[e.target.id];
});

startScreen.addEventListener('click', () => {
    // gameArea.classList.remove('hide');
    startScreen.classList.add('hide');
    // gameArea.innerHTML = "";

    player.start = true;
    gameStart.play();
    gameStart.loop = true;
    player.score = 0;
    window.requestAnimationFrame(gamePlay);

    for(let i=0; i<5; i++){
        let roadLineElement = document.createElement('div');
        roadLineElement.setAttribute('class', 'roadLines');
        roadLineElement.y = (i*150);
        roadLineElement.style.top = roadLineElement.y + "px";
        gameArea.appendChild(roadLineElement);
    }

    let carElement = document.createElement('div');
    carElement.setAttribute('class', 'car');
    gameArea.appendChild(carElement);

    player.x = carElement.offsetLeft;
    player.y = carElement.offsetTop  ;

    for(let i=0; i<3; i++){
        let enemyCar = document.createElement('div');
        enemyCar.setAttribute('class', 'enemyCar');
        enemyCar.y = ((i+1) * 350) * - 1;
        enemyCar.style.top = enemyCar.y + "px";
        enemyCar.style.backgroundColor = randomColor();
        enemyCar.style.left = Math.floor(Math.random() * 350) + "px";
        gameArea.appendChild(enemyCar);
    }
});

function randomColor(){
    function c(){
        let hex = Math.floor(Math.random() * 256).toString(16);
        return ("0"+ String(hex)).substr(-2);
    }
    return "#"+c()+c()+c();
}

let isGamePaused = false;


function onCollision(a, b) {
    aRect = a.getBoundingClientRect();
    bRect = b.getBoundingClientRect();

    if (isGamePaused) {
        return false;
    }

    if (!((aRect.top > bRect.bottom) || (aRect.bottom < bRect.top) ||
        (aRect.right < bRect.left) || (aRect.left > bRect.right))) {
        // Collision detected
        // displayQuestion();
        player.start = false;
        gameStart.pause();

        return true;
    }

    return false;
}
function displayQuestion() {


    
    if (currentQuestionIndex < QuestionList.length) {
        const currentQuestion = QuestionList[currentQuestionIndex];
        displayQuestionInModal(QuestionList[currentQuestionIndex]);

        console.log(currentQuestionIndex);
        // getData();
        
        currentQuestionIndex++;
    } else {
        currentQuestionIndex = 0;
        onGameOver();
    }
}



// let totalPercentage = 0;
let scores=10;



function displayQuestionInModal(questionObj) {
    const question = questionObj.Assessment_Question;
    const options = questionObj.optionList;


    // Display question number and text
    const questionNumber = currentQuestionIndex + 1;
    $('#questionText').html(`${question}`);

    // Clear existing options
    $('.radio-container').empty();

    // Iterate over options and create radio buttons
    options.forEach((option, index) => {
        const optionLabel = $("<label>").text(option.Answer_Description);
        const optionInput = $("<input>").attr({
            type: "radio",
            name: "group",
            value: `${index + 1}`
        });

        optionLabel.prepend(optionInput);
        $('.radio-container').append(optionLabel);
    });




    $('#continueButton').off('click').on('click', function () {
        const selectedOption = $('input[name=group]:checked').val();
        console.log('Selected Option:', selectedOption);  
     
        if (selectedOption) {
            $('#questionModal').modal('hide');
            // currentQuestionIndex++;
            resumeGame();
           
            const errorTextElement = $('#error-text');
            errorTextElement.text("");






            const option=questionObj.optionList
           

            // const correctOptions = options.filter((option) => option.Right_Ans === 2);

                console.log("c",selectedOption);
                console.log("q",QuestionList[currentQuestionIndex - 1].optionList[0].Right_Ans)

            if (selectedOption == QuestionList[currentQuestionIndex - 1].optionList[0].Right_Ans) {
                scores += 10;
                // console.log(scores);
                console.log("correct answer");
                // console.log(QuestionList[currentQuestionIndex - 1].optionList[0].Right_Ans);
            } else {
                console.log("wrong answer");
            }
            
        }else {
            const errorTextElement = $('#error-text');
            errorTextElement.text("Click Any One Option");
            // setTimeout(function () {
            //     $('#questionModal').modal('show');
            // }, 0);
        }
        
    });




    let timer = 30; // Set the timer duration in seconds
    const timerElement = $('#timer');
    timerElement.text(`${timer} sec`);

    const timerInterval = setInterval(() => {
        timer--;

        if (timer >= 0) {
            timerElement.text(`${timer} Sec`);
        } else {
            clearInterval(timerInterval);
            // Time's up, handle it as needed
            onTimeUp();
        }
    }, 1000);

    // Clear timer when modal is hidden
    $('#questionModal').on('hidden.bs.modal', function () {
        clearInterval(timerInterval);
    });

    // Show the question modal
    $('#questionModal').modal('show');
}



function onTimeUp() {
    // Handle the timeout logic here
    player.start = true; // Set player start to true to resume the game
    gameStart.play(); // Play the game start audio

    // Automatically select an option (you can modify this based on your logic)
    $('input[name=group]').first().prop('checked', true);

    // Proceed to the next question
    resumeGame();

    // Hide the question modal
    $('#questionModal').modal('hide');
}



function pauseGame() {
    isGamePaused = true;
    // Add any additional logic or UI changes you want when the game is paused
    gameStart.pause();
}

function resumeGame() {
    gameStart.play();
  
    player.start = true;
    if (currentQuestionIndex < QuestionList.length) {
        window.requestAnimationFrame(gamePlay);

    }
    else {
        onGameOver()
    }

}



// function onGameOver() {
//     player.start = false;
//     gameStart.pause();
//     gameOver.play();
//     startScreen.classList.remove('hide');
//     startScreen.innerHTML = "Game Over <br> Your final score is " + player.score + "<br> Press here to restart the game."+scores;
    
// }



function onGameOver() {
  player.start = false;
  gameStart.pause();
  gameOver.play();
  startScreen.classList.remove('hide');
  startScreen.innerHTML = "Game Over <br> Your final score is " + player.score + "<br> Press here to restart the game."+scores + "<br><button onclick='refreshGame()'>Restart</button>";
}

function refreshGame() {
  // Reload the page to refresh the game
  location.reload();
}




function moveRoadLines(){
    let roadLines = document.querySelectorAll('.roadLines');
    roadLines.forEach((item)=> {
        if(item.y >= 700){
            item.y -= 750;
        }
        item.y += player.speed;
        item.style.top = item.y + "px";
    });
}

function moveEnemyCars(carElement) {
    let enemyCars = document.querySelectorAll('.enemyCar');
    enemyCars.forEach((item) => {
        if (!item.collided && onCollision(carElement, item)) {
            item.collided = true;
            displayQuestion();


        }
        if (item.y >= 750) {
            item.y = -300;
            item.collided = false; // Reset collision status when the car is repositioned
            item.style.left = Math.floor(Math.random() * 350) + "px";
        }
        item.y += player.speed;
        item.style.top = item.y + "px";
    });
}


function gamePlay() {
    let carElement = document.querySelector('.car');
    let road = gameArea.getBoundingClientRect();

    if(player.start){
        moveRoadLines();
        moveEnemyCars(carElement);
            
        // if(keys.ArrowUp && player.y > (road.top + 70)) player.y -= player.speed;
        // if(keys.ArrowDown && player.y < (road.bottom - 85)) player.y += player.speed;
        if(keys.ArrowLeft && player.x > 0) player.x -= player.speed;
        if(keys.ArrowRight && player.x < (road.width - 70)) player.x += player.speed;

        carElement.style.top = player.y + "px";
        carElement.style.left = player.x + "px";

        window.requestAnimationFrame(gamePlay);

        player.score++;
        const ps = player.score - 1;
        score.innerHTML = 'Score: ' + ps;          
    }
}
document.addEventListener('keydown', (e)=>{
    e.preventDefault();
    keys[e.key] = true;
});

document.addEventListener('keyup', (e)=>{
    e.preventDefault();
    keys[e.key] = false;
});



let touchStartX;
let raceCarStartX;

document.addEventListener("touchstart", function (e) {
    e.preventDefault();
    touchStartX = e.touches[0].clientX;
    raceCarStartX = player.x;
});

document.addEventListener("touchmove", function (e) {
    e.preventDefault();
    if (touchStartX !== undefined && raceCarStartX !== undefined) {
        const touchX = e.touches[0].clientX;
        const deltaX = touchX - touchStartX;
        player.x = raceCarStartX + deltaX;

        const road = gameArea.getBoundingClientRect();
        player.x = Math.min(Math.max(player.x, 0), road.width - carElement.offsetWidth);
    }
});

document.addEventListener("touchend", function (e) {
    touchStartX = undefined;
    raceCarStartX = undefined;
});

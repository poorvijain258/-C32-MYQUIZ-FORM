class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
           this.input2 = createInput("Enter Correct Option No.. ")
          

    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
     this.Question = createElement('h3');
     this.option1 = createElement('h4');
     this.option2 = createElement('h4');
     this.option3 = createElement('h4');
     this.option4 = createElement('h4');

    this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);
      this.Question.position(100,90)
      this.option1.position(150,120);
      this.option2.position(150,150);
      this.option3.position(150,180);
      this.option4.position(150,210);

    //Create html() and position() for each question, input and answers.

    this.Question.html("Question:What starts with letter 'E' but ony has one letter?")
      this.option1.html("(a)Everyone");
      this.option2.html("(b)Envelope");
      this.option3.html("(c)Estimate");
      this.option4.html("(d)Example");

    this.input1.position(150, 270);
    this.button.position(290, 320);
    this.input2.position(360,270);
    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
     
    this.message.html("Thankyou, Your Answer Has Been Submited");
    this.message.position(300,330)
     
    });

  }
}

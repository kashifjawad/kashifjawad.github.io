package Quiz;

import java.util.ArrayList;
import java.util.List;

public class QuizJava {

    String question;
    String answer;
    static List<QuizJava> list = new ArrayList<QuizJava>();
    static String questions[]  = {
            "3, 1, 4, 1, 5",
            "1, 1, 2, 3, 5",
            "1, 4, 9, 16, 25",
            "2, 3, 5, 7, 11",
            "1, 2, 4, 8, 16"
    };

    static String answers[] = {"9", "8","36","13","32"};

    public QuizJava(String question, String answer) {
        this.question = question;
        this.answer = answer;
    }

    public QuizJava() {

    }

    public String getQuestion() {
        return question;
    }

    public static List<QuizJava> generateQuestion(){
        for (int i = 0; i < questions.length; i++){
            list.add(new QuizJava(questions[i], answers[i]));
        }
        return list;
    }

    public boolean checkAnswer(String answer){
        return this.answer.equals(answer);
    }

}

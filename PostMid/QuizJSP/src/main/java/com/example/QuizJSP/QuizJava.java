package com.example.QuizJSP;

import java.util.ArrayList;
import java.util.List;

public class QuizJava {

    String question;
    String answer;
    public static int count = 0;
    public static int score = 0;

    static List<QuizJava> list = new ArrayList<>();
    static String questions[]  = {"3, 1, 4, 1, 5",
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

    public static void  increaseCount(){
       count = count + 1 ;
    }

    public static void  increaseScore(){
        score = score + 1 ;
    }



    public String getQuestion() {
        return question;
    }

    public static List<QuizJava> addQuestions(){
        for (int i = 0; i < questions.length; i++){
            list.add(new QuizJava(questions[i], answers[i]));
        }

        return list;
    }

    public boolean isAnwerCorrect(String answer){
        System.out.println("Working?");
        return this.answer.equals(answer);
    }

}

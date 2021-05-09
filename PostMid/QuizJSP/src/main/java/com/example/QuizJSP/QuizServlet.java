package com.example.QuizJSP;

import java.io.*;
import java.util.List;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.*;
import javax.servlet.annotation.*;

//@WebServlet ( {"/QuizJava"})
@WebServlet("/QuizJava")
public class QuizServlet extends HttpServlet {
    private String message;

    List<QuizJava> list;


    @Override
    public void init(ServletConfig config) throws ServletException {
        super.init(config);
        list = QuizJava.addQuestions();
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        response.setContentType("text/html");

        System.out.print(request.getParameter("response"));

          if(QuizJava.count >= QuizJava.questions.length){

              request.setAttribute("score", QuizJava.score);
              request.setAttribute("count", QuizJava.count);
              RequestDispatcher rd = request.getRequestDispatcher("Thankyou.jsp");
              rd.forward(request,response);
              return;
          }

        if(QuizJava.count > 0){
            if(list.get(QuizJava.count-1).isAnwerCorrect(request.getParameter("response"))){
                QuizJava.increaseScore();
            }
        }

        System.out.print(list.get(QuizJava.count).getQuestion());


        request.setAttribute("score", QuizJava.score);
        request.setAttribute("count", QuizJava.count);
        request.setAttribute("question", list.get(QuizJava.count).getQuestion());
        RequestDispatcher rd = request.getRequestDispatcher("index.jsp");
        rd.forward(request,response);





    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        QuizJava.increaseCount();
        doGet(req,resp);
    }

    public void destroy() {
    }
}
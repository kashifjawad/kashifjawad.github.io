package Quiz;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

@WebServlet(urlPatterns = {"/QuizJava"}, initParams = {
        @WebInitParam(name = "location", value = "D:/Uploads"),
        @WebInitParam(name = "maxUploadSize", value = "9900000") })
public class Quiz extends HttpServlet {
    List<QuizJava> list;
    int count = 0;
    int score = 0;

    public void init(ServletConfig config) throws ServletException {
        super.init(config);
        list = QuizJava.generateQuestion();
    }
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {


        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        HttpSession session = request.getSession();
        QuizJava q = (QuizJava)session.getAttribute("quiz");

        ServletConfig config = getServletConfig();
        if(count > 0)
            if(list.get(count - 1).checkAnswer(request.getParameter("response"))){
                score++;
            }


        out.println("\t<h1>The Number of Quiz</h1>\n" +
                "\t<p>Your Score is: " + score +"</p>\n");

        if(count >= list.size()){
            out.println("\t<p>You have completed the Number Quiz, with a score of " + score + " out of 5. </p>\n");
        }else{
            out.println("\t<p>Guess the next number in the sequence.</p>\n" +
                    "\t<p>" + list.get(count++).getQuestion() + "</p>\n" +
                    "\t<form action=\"\" method=\"post\">\n" +
                    "\t\tYour answer:\n" +
                    "\t\t<input type=\"text\" name=\"response\" pattern=\"[0-9]{1,5}\"/>\n" +
                    "\t\t<input type=\"submit\" value=\"Submit\"/>\n" +
                    "\t</form>");
        }


        out.close();

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}

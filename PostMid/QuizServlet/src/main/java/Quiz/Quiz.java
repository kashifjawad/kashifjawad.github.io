package Quiz;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;


@WebServlet ( {"/QuizJava"})
public class Quiz extends HttpServlet {
    private static final long serialVersionUID = 1L;
    List<QuizJava> list;
    int count = 0;
    int score = 0;
    @Override
    public void init(ServletConfig config) throws ServletException {
        super.init(config);
        list = QuizJava.addQuestions();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        if(count > 0)
            if(list.get(count - 1).isAnwerCorrect(request.getParameter("response"))){
                score++;
            }


        out.println("\t<h1>The Number  Quiz</h1>\n" +
                "\t<p>Your current score is " + score +"</p>\n");

        if(count >= list.size() ){
            out.println("\t<p>You have completed the Number Quiz, with a score of " + score + " out of 5. </p>\n");
        }else{
            out.println("<p>Guess the next number in the sequence.</p>\n" +
                    "<p>" + list.get(count++).getQuestion() + "</p>\n" +
                    "<form action=\"\" method=\"post\">\n" +
                    "\t\tYour answer:\n" +
                    "\t\t<input type=\"text\" name=\"response\" pattern=\"[0-9]{1,5}\"/>\n" +
                    "\t\t<input type=\"submit\" value=\"Submit\"/>\n" +
                    "\t</form>");
        }


    }
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);

    }
}

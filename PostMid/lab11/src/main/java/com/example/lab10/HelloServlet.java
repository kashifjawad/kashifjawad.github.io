package com.example.lab10;

import java.io.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;

@WebServlet(name = "helloServlet", value = "/hello-servlet")
public class HelloServlet extends HttpServlet {
    private String message;

    public void init() {
        message = "Hello Kashif!";
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("text/html");

        PrintWriter out = response.getWriter();

        out.println("<html><body>");

        out.println("<h2>Question 1</h2>");
        String s1 = request.getParameter("field1");
        String s2 = request.getParameter("field2");

        if(s1 != null && s2 != null){
            out.println( s1 + " + " + s2 + " = "  + (Integer.parseInt(s1) + Integer.parseInt(s2)  ));
        }

        String s3 = request.getParameter("field3");
        String s4 = request.getParameter("field4");
        out.println("<br/>");
        if(s3 != null && s4 != null) {
            out.println(s3 + " * " + s4 + " = " + (Integer.parseInt(s3) * Integer.parseInt(s4)));
        }


        //Question 2

          int sub = (Integer.parseInt(s3) * Integer.parseInt(s4));
        int add  = (Integer.parseInt(s1) + Integer.parseInt(s2)  );

        String a=request.getParameter("input1");
        String b=request.getParameter("input2");
        String c=request.getParameter("input3");
        String d=request.getParameter("input4");



        response.setContentType("text/html");
        out.println("<body><h2>Question2</h2>" +
                "<form action=\"/lab11_war_exploded/index.html\">\n" +
                "<input type=\"text\" name=\"input1\" value=\""+s1+"\"><span>+</span> \n" +
                "<input type=\"text\" name=\"input2\" value=\""+s2+"\">\n" +
                " = <input type=\"text\" name=\"add\" value=\""+add+"\">\n" +
                "<br><br>\n" +
                "<input type=\"text\" name=\"input3\" value=\""+s3+"\">*\n" +
                "<input type=\"text\" name=\"input4\" value=\""+s4+"\">\n" +
                " = <input type=\"text\" name=\"product\" value=\""+sub+"\">\n" +
                "<br><br>\n" +
                "<input type=\"submit\">\n" +
                "</form>");


        out.println("</body></html>");
    }




    public void destroy() {
    }
}
<%@page import="java.time.LocalDate" %>>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>JSP - The Quiz Number</title>
</head>
<body>




<%String[][] data = {{"Nov 6", "32", "26"},{"Nov 7", "32", "26"},{"Nov 8", "32", "26"}};
    request.setAttribute(“temperatures", data);%>
<table> <tr><th>DATE</th><th>HIGH</th><th>LOW</th></tr>
    <c:forEach var="daily" items="${temperatures}">
    <tr> <td>${daily[0]}</td><td>${daily[1]}</td><td>${daily[2]}</td>
    </tr>
    </c:forEach>


<h1> <%= "The Number  Quiz" %></h1>

<br/>

<p><%= "Your Current Score is:" %> ${score}
</p>
<br />






<p><%= "Guess the next number in the sequence" %>
</p>
<br />
 ${question}


<form action = "" method = "post">
    Your Answer: <input type = "text" name = "response">
    <br />
    <br />

    <input type = "submit" value = "Submit" />
</form>

<%--<a href="hello-servlet">Hello Servlet</a>--%>
</body>
</html>

<%--out.println("\t<p>You have completed the Number Quiz, with a score of " + score + " out of 5. </p>\n");--%>
<%@page import="java.time.LocalDate" %>>

<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>JSP - The Quiz Number</title>
</head>
<body>

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

</body>
</html>


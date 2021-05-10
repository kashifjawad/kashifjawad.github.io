<%--
  Created by IntelliJ IDEA.
  User: kashifjawad
  Date: 5/9/21
  Time: 12:08 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html><head><title>Weather Page</title></head>
<body>
<%String[][] data = {{"Nov 6", "32", "26"},{"Nov 7", "32", "26"},{"Nov 8", "32", "26"}};
request.setAttribute(“temperatures", data);%>
<table> <tr><th>DATE</th><th>HIGH</th><th>LOW</th></tr>
    <c:forEach var="daily" items="${temperatures}">
        <tr> <td>${daily[0]}</td><td>${daily[1]}</td><td>${daily[2]}</td>
        </tr>
    </c:forEach>
</table></body></html>


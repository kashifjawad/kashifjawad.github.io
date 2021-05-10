<%@ page import="java.util.*" %>
<%--<% List styles = (List)request.getAttribute(“styles”) %>--%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<body>
<h1 align="center">Beer Recommendations JSP</h1>
<p>



        <% List styles = (List)request.getAttribute("styles"); %>
    <c:forEach var="daily" items="${styles}">
        <br/> ${daily}
</c:forEach>






<%--<%--%>

<%--List styles = (List)request.getAttribute("styles");--%>

<%--Iterator it = styles.iterator();--%>
<%--while(it.hasNext()) {--%>
<%--out.print("<br>try: " + it.next());--%>
<%--}--%>

<%--%>--%>
</body>
</html>
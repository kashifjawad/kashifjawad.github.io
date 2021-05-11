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

            <c:set var="count" value="0" scope="page" />
            <c:set var="count" value="${count + 90}" scope="page"/>
               ${count + 20};







    <%--<%--%>

<%--List styles = (List)request.getAttribute("styles");--%>

<%--Iterator it = styles.iterator();--%>
<%--while(it.hasNext()) {--%>
<%--out.print("<br>try: " + it.next());--%>
<%--}--%>

<%--%>--%>
</body>
</html>
<%--
  Created by IntelliJ IDEA.
  User: rXing
  Date: 4/18/2019
  Time: 9:21 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <title>AJAX calls to Servlet using JQuery and JSON</title>
    <style>
        table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: 100%;
            display: none;
        }

        td, th {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
        }

        tr:nth-child(even) {
            background-color: #dddddd;
        }
    </style>
    <script src="http://code.jquery.com/jquery-latest.min.js"></script>
    <script>
        $(document).ready(function () {
            $("#retrieveBtn").click(function () {
                $.get("http://jsonplaceholder.typicode.com/users").done(function (data) {
                    console.log(data);
                    $.each(data, function (index, value) {
                        $("#userTable").append("<tr data-id="+value.id+"><td>"+value.id+"</td><td>"+value.username+"</td><td>"+value.email+"</td></tr>");
                    });
                    $("#userTable").show();
                }).fail(function (err) {
                    console.error(err);
                });
            });

            var button2 = $("<button>Comments</button>");



            $("#userTable").on('click', 'tr', function(){
                var self = $(this);
                var userId=self.attr("data-id");
                console.log(userId);
                $.get("http://jsonplaceholder.typicode.com/posts?userId="+userId)
                    .done(function(data){


                        var tableStr = '<tr><td colspan="3"><table><tr><th>ID</th><th>Title</th><th>Body</th></tr>';


                        $.each(data, function (index, value) {

                           let idd = value['id'];
                            let tit = value['title'];
                            let bod = value['body'];


                            $("#userTable").append("<tr data-id="+value.id+"><td>"+idd+"</td><td>"+tit+"</td><td>"+bod+"</td></tr>");
                            $("#userTable").append("<tr><td> <input type='button' name='Comments' id='Comments' value='Comments'></td></tr>")
                        });
                         self.append('</table></td></tr>');

                        // tableStr +='</table></td></tr>';
                        // self.append(tableStr);

                    }).fail(function () {

                });
            });


            $(document).on("click", "#Comments", function(){

                $.get("https://jsonplaceholder.typicode.com/posts/1/comments").done(function(data){

                    let str = "";
                    $.each(data,function (index,value){
                        let nam = value['name'];
                        let em = value['email'];
                        let id = value['id'];
                        str = str + nam + em + id + "\n";

                    })

                    alert(str);


                }).fail(function(){

                });



            });

        });



    </script>

</head>
<body>
<button id="retrieveBtn">Click to see User</button>
<table id="userTable">
    <tr>
        <th>ID</th>
        <th>Username</th>
        <th>Email</th>
    </tr>
</table>
</body>
</html>

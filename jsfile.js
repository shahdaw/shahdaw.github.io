function test(){

if(document.form1.fname.value==""&&document.form1.lname.value==""&&document.form1.ename.value==""&&document.form1.cname.value==""&&document.form1.sname.value==""){
alert("There are empty fields, please fill it");
}
 if(document.form1.fname.value==""){
alert("please fill subject field" );
}

  if(document.form1.lname.value==""){
alert("please fill Email field" );
}

  if(document.form1.ename.value==""){
alert("please fill ID field" );
}

  if(document.form1.cname.value==""){
alert("please fill URL field ");
}

 if(document.form1.sname.value==""){
alert("please fill Message field" );
}

result1 =/^[a-zA-Z]+$/.test(document.form1.fname.value);
result2 = /^[a-zA-Z]+$/.test(document.form1.sname.value);
if(result1==false)	alert("Subject contains non string value");
if(result2==false)	alert("Email contains non string value");

 result3 = (0<=document.form1.ename.value&&document.form1.ename.value<=100)
 if(result3==false)	alert("ID not contains numric value");

 //String domainName = "";
 //String[] parts = email.split("@");
 //if(parts.length == 2)
    //domainName = parts[1];










}


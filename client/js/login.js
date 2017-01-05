var usuario, password, correo, nombre;

Template.login.events({
  'click #login': function(event, template) {
    event.preventDefault();  

    nombre =  $("#User").val();
    usuario = $("#Password").val();

    alert("Click login");
    console.log(nombre);
    console.log(usuario);
  }
});

Template.register.events({
  'click #login': function(event, template) {
    event.preventDefault();  

    nombre =  $("#Nombre").val();
    usuario = $("#Usuario").val();
    correo =  $("#Correo").val();
    password =$("#Password").val(); 

    alert("Click registro");
    console.log(nombre);
    console.log(usuario);
    console.log(correo);
    console.log(password);
    
  }
});
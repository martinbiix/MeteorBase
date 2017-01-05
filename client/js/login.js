Template.login.events({
  'click #login': function(event, template) {
    event.preventDefault();  
    alert($("#User").val()+" => "+$("#Password").val());
  }
});
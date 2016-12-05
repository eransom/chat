
var lastMessage = 0;


function addToDisplay (newMsg) {
     var paragraph = $("<p>")
     paragraph.append(newMsg.username + ": " + newMsg.text)
     $("#chatArea").append(paragraph)

   }

    $('#getMsg').on('click', function (){
      $.get("http://tiy-orl-proxy.herokuapp.com/messages")
      .then(function (response) {
      var messages = response.messages
      messages.forEach(addToDisplay)
     })
   })


    $("form").submit(function(event){
      event.preventDefault()
      var theMsg = $('input').val()
      var theName = $('#user').val()
      $.post("http://tiy-orl-proxy.herokuapp.com/messages",
      {message:
         {
          username: theName,
          text: theMsg
         }})
       .then(response => {
         console.log(response)
         $('input').val('')
         addToDisplay(response.message)
       })
    })

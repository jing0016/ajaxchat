var pollServer = function () {
    $.get('chat.php',function (result) {

        if(!result.success){
            console.log("Error polling server for new message!");
            return;
        }

        $.each(result.message,function (idx) {

            var chatBubble;

            if(this.sent_by == 'self'){
                chatBubble = $('<div></div>')
            }

        })
    });
}
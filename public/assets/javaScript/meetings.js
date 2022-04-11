$(document).ready(function () {
    var personalURL = '/api/meetings';
    getmeetingsDetails();
    

    function getmeetingsDetails() {
        // Here we run our AJAX call to the OpenWeatherMap API
        $.ajax({
            url: personalURL,
            method: "GET",
            dataType: "JSON",
            statusCode: {
                404: function () {
                    alert("not found");
                    return;
                }
            },
            success: function(response) {
                $(`#meetings`).empty();
                // Log the queryURL
                console.log(response);
                // Log the resulting object
                
                for(var i = 0; i < response.length; i++) {
                    var itemIdEl = response[i].id;
                    var date01El = response[i].meetingDate01;
                    var agenda01El = response[i].agendaLink01;
                    var video01El = response[i].videoLink01;
                    var minutes01El = response[i].minutesLink01;

                    var displaydiv = $('<div>')

                    var rowDivEl = $('<div>').addClass("row");

                    var meetingDate01 = $('<p>').addClass("col-md-3");
                    meetingDate01.text(date01El);
                    

                    var agendaLink01 = $('<a>').addClass("col-md-3");
                    agendaLink01.attr({'href': agenda01El, 'target': '_blank'});
                    agendaLink01.text('Agenda Link');


                    var videoLink01 = $('<a>').addClass("col-md-3");
                    videoLink01.attr({'href': video01El, 'target': '_blank'});
                    videoLink01.text('Video Link');


                    var minutesLink01 = $('<a>').addClass("col-md-3");
                    minutesLink01.attr({'href': minutes01El, 'target': '_blank'});
                    minutesLink01.text('Minutes Link');

                    var breakEl = $('<hr/>');



                    $(`#meetings`).append(displaydiv);
                    
                    displaydiv.append(rowDivEl);
                    rowDivEl.append(meetingDate01);
                    rowDivEl.append(agendaLink01);   
                    rowDivEl.append(videoLink01);
                    rowDivEl.append(minutesLink01);

                    displaydiv.append(breakEl);
                }
                
            },
            error: function(){
                alert("Error, 404 (not found)!")
            }
        });

        function profileBtn(event) {
            // This 'preventDefault' method tells the user agent that if the event does not get explicitly
            // handled, its default action should not be taken as it normally would be.
            event.preventDefault(event);
            // The stopPropagation() method stops the bubbling of an event to parent elements, preventing
            // any parent handlers from being notified of the event. You can use the method event.isPropagationStopped()
            // to know whether this method was ever called (on that event object).
            event.stopPropagation(event);
            console.log("city button clicked");
            var selectedNameIndex = $(this).attr('dataIndex').trim();
            console.log(selectedNameIndex);         
        }
    }
});
  
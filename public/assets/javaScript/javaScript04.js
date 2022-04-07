$(document).ready(function () {
    var personalURL = '/api/idealJob';
    getidealJobDetails();
    

    function getidealJobDetails() {
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
                // Log the queryURL
                console.log(response);
                // Log the resulting object
                
                for(var i = 0; i < response.length; i++) {
                    var itemIdEl = response[i].sectionId;
                    var para01El = response[i].paragraph01;
                    var para02El = response[i].paragraph02;
                    var para03El = response[i].paragraph03;
                    var para04El = response[i].paragraph04;
                    var para05El = response[i].paragraph05;
                    var para06El = response[i].paragraph06;
                    var para07El = response[i].paragraph07;



                    var paragraph01El = $('<p>');
                    paragraph01El.text(para01El);
                    var paragraph02El = $('<p>');
                    paragraph02El.text(para02El);
                    var paragraph03El = $('<p>');
                    paragraph03El.text(para03El);
                    var paragraph04El = $('<p>');
                    paragraph014El.text(para04El);
                    var paragraph05El = $('<p>');
                    paragraph05El.text(para05El);
                    var paragraph06El = $('<p>');
                    paragraph06El.text(para06El);
                    var paragraph07El = $('<p>');
                    paragraph07El.text(para07El);
                    var breakEl = $('<hr/>');



                    $(`#idealJob${i}`).append(paragraph01El);
                    $(`#idealJob${i}`).append(paragraph02El);
                    $(`#idealJob${i}`).append(paragraph03El);
                    $(`#idealJob${i}`).append(paragraph04El);
                    $(`#idealJob${i}`).append(paragraph05El);
                    $(`#idealJob${i}`).append(paragraph06El);
                    $(`#idealJob${i}`).append(paragraph07El);
                    $(`#idealJob${i}`).append(breakEl);
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
  
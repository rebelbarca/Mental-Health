$(document).ready(function () {
    var personalURL = '/api/itTech';
    getitTechDetails();
    

    function getitTechDetails() {
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
                    var para08El = response[i].paragraph08;
                    var para09El = response[i].paragraph09;
                    var para10El = response[i].paragraph10;



                    var paragraph01El = $('<p>');
                    paragraph01El.text(para01El);
                    var paragraph02El = $('<p>');
                    paragraph02El.text(para02El);
                    var paragraph03El = $('<p>');
                    paragraph03El.text(para03El);
                    var paragraph04El = $('<p>');
                    paragraph04El.text(para04El);
                    var paragraph05El = $('<p>');
                    paragraph05El.text(para05El);
                    var paragraph06El = $('<p>');
                    paragraph06El.text(para06El);
                    var paragraph07El = $('<p>');
                    paragraph07El.text(para07El);
                    var paragraph08El = $('<p>');
                    paragraph08El.text(para08El);
                    var paragraph09El = $('<p>');
                    paragraph09El.text(para09El);
                    var paragraph10El = $('<p>');
                    paragraph10El.text(para10El);
                    var breakEl = $('<hr/>');



                    $(`#itTech${i}`).append(paragraph01El);
                    $(`#itTech${i}`).append(paragraph02El);
                    $(`#itTech${i}`).append(paragraph03El);
                    $(`#itTech${i}`).append(paragraph04El);
                    $(`#itTech${i}`).append(paragraph05El);
                    $(`#itTech${i}`).append(paragraph06El);
                    $(`#itTech${i}`).append(paragraph07El);
                    $(`#itTech${i}`).append(paragraph08El);
                    $(`#itTech${i}`).append(paragraph09El);
                    $(`#itTech${i}`).append(paragraph10El);
                    $(`#itTech${i}`).append(breakEl);
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
  
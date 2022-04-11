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
                $(`#itTech`).empty()

                // Log the queryURL
                console.log(response);
                // Log the resulting object
                
                for(var i = 0; i < response.length; i++) {
                    var itemIdEl = response[i].sectionId;
                    var head01El = response[i].heading;
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
                    var para11El = response[i].paragraph11;
                    var para12El = response[i].paragraph12;
                    var para13El = response[i].paragraph13;
                    var para14El = response[i].paragraph14;
                    var para15El = response[i].paragraph15;

                    var displaydiv = $('<div>');
                    var headingEl = $('<h2>')
                    headingEl.text(head01El);

                    var row = $('<div>').addClass("row");

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
                    var paragraph11El = $('<p>');
                    paragraph11El.text(para11El);
                    var paragraph12El = $('<p>');
                    paragraph12El.text(para12El);
                    var paragraph13El = $('<p>');
                    paragraph13El.text(para13El);
                    var paragraph14El = $('<p>');
                    paragraph14El.text(para14El);
                    var paragraph15El = $('<p>');
                    paragraph15El.text(para15El);
                    var breakEl = $('<hr/>');

                    $(`#itTech`).append(displaydiv);

                    displaydiv.append(head01El)
                    displaydiv.append(paragraph01El);
                    displaydiv.append(paragraph02El);
                    displaydiv.append(paragraph03El);
                    displaydiv.append(paragraph04El);
                    displaydiv.append(paragraph05El);
                    displaydiv.append(paragraph06El);
                    displaydiv.append(paragraph07El);
                    displaydiv.append(paragraph08El);
                    displaydiv.append(paragraph09El);
                    displaydiv.append(paragraph10El);
                    displaydiv.append(paragraph11El);
                    displaydiv.append(paragraph12El);
                    displaydiv.append(paragraph13El);
                    displaydiv.append(paragraph14El);
                    displaydiv.append(paragraph15El);
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
  
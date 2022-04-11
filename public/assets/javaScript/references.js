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
                    var ref1El = response[i].reference1;
                    var ref2El = response[i].reference2;
                    var ref3El = response[i].reference3;
                    var ref4El = response[i].reference4;
                    var ref5El = response[i].reference5;
                    var ref6El = response[i].reference6;
                    var ref7El = response[i].reference7;
                    var ref8El = response[i].reference8;
                    var ref9El = response[i].reference9;
                    var ref10El = response[i].reference10;
                    var ref11El = response[i].reference11;
                    var ref12El = response[i].reference12;
                    var ref13El = response[i].reference13;
                    var ref14El = response[i].reference14;
                    var ref15El = response[i].reference15;
                    var ref16El = response[i].reference16;
                    var ref17El = response[i].reference17;
                    var ref18El = response[i].reference18;
                    var ref19El = response[i].reference19;
                    var ref20El = response[i].reference20;
                    var ref21El = response[i].reference21;
                    var ref22El = response[i].reference22;
                    var ref23El = response[i].reference23;
                    var ref24El = response[i].reference24;
                    var ref25El = response[i].reference25;
                    var ref26El = response[i].reference26;
                    var ref27El = response[i].reference27;
                    var ref28El = response[i].reference28;
                    var ref29El = response[i].reference29;
                    var ref30El = response[i].reference30;
                    var ref31El = response[i].reference31;
                    var ref32El = response[i].reference32;
                    var ref33El = response[i].reference33;
                    var ref34El = response[i].reference34;
                    var ref35El = response[i].reference35;
                    var ref36El = response[i].reference36;
                    var ref37El = response[i].reference37;
                    var ref38El = response[i].reference38;
                    var ref39El = response[i].reference39;
                    var ref40El = response[i].reference40;
                    var ref41El = response[i].reference41;
                    var ref42El = response[i].reference42;
                    var ref43El = response[i].reference43;
                    var ref44El = response[i].reference44;
                    var ref45El = response[i].reference45;
                    var ref46El = response[i].reference46;
                    var ref47El = response[i].reference47;
                    var ref48El = response[i].reference48;
                    var ref49El = response[i].reference49;
                    var ref50El = response[i].reference50;




                    var reference1El = $('<p>');
                    reference1El.text(ref1El);
                    var reference2El = $('<p>');
                    reference2El.text(ref2El);
                    var reference3El = $('<p>');
                    reference3El.text(ref3El);
                    var reference4El = $('<p>');
                    reference4El.text(ref4El);
                    var reference5El = $('<p>');
                    reference5El.text(ref5El);
                    var reference6El = $('<p>');
                    reference6El.text(ref6El);
                    var reference7El = $('<p>');
                    reference7El.text(ref7El);
                    var reference8El = $('<p>');
                    reference8El.text(ref8El);
                    var reference9El = $('<p>');
                    reference9El.text(ref9El);
                    var reference10El = $('<p>');
                    reference10El.text(ref10El);
                    var reference11El = $('<p>');
                    reference11El.text(ref11El);
                    var reference12El = $('<p>');
                    reference12El.text(ref12El);
                    var reference13El = $('<p>');
                    reference13El.text(ref13El);
                    var reference14El = $('<p>');
                    reference14El.text(ref14El);
                    var reference15El = $('<p>');
                    reference15El.text(ref15El);
                    var reference16El = $('<p>');
                    reference16El.text(ref16El);
                    var reference17El = $('<p>');
                    reference17El.text(ref17El);
                    var reference18El = $('<p>');
                    reference18El.text(ref18El);
                    var reference19El = $('<p>');
                    reference19El.text(ref19El);
                    var reference20El = $('<p>');
                    reference20El.text(ref20El);
                    var reference21El = $('<p>');
                    reference21El.text(ref21El);
                    var reference22El = $('<p>');
                    reference22El.text(ref22El);
                    var reference23El = $('<p>');
                    reference23El.text(ref23El);
                    var reference24El = $('<p>');
                    reference24El.text(ref24El);
                    var reference25El = $('<p>');
                    reference25El.text(ref25El);
                    var reference26El = $('<p>');
                    reference26El.text(ref26El);
                    var reference27El = $('<p>');
                    reference27El.text(ref27El);
                    var reference28El = $('<p>');
                    reference28El.text(ref28El);
                    var reference29El = $('<p>');
                    reference29El.text(ref29El);
                    var reference30El = $('<p>');
                    reference30El.text(ref30El);
                    var reference31El = $('<p>');
                    reference31El.text(ref31El);
                    var reference32El = $('<p>');
                    reference32El.text(ref32El);
                    var reference33El = $('<p>');
                    reference33El.text(ref33El);
                    var reference34El = $('<p>');
                    reference34El.text(ref34El);
                    var reference35El = $('<p>');
                    reference35El.text(ref35El);
                    var reference36El = $('<p>');
                    reference36El.text(ref36El);
                    var reference37El = $('<p>');
                    reference37El.text(ref37El);
                    var reference38El = $('<p>');
                    reference38El.text(ref38El);
                    var reference39El = $('<p>');
                    reference39El.text(ref39El);
                    var reference40El = $('<p>');
                    reference40El.text(ref40El);
                    var reference41El = $('<p>');
                    reference41El.text(ref41El);
                    var reference42El = $('<p>');
                    reference42El.text(ref42El);
                    var reference43El = $('<p>');
                    reference43El.text(ref43El);
                    var reference44El = $('<p>');
                    reference44El.text(ref44El);
                    var reference45El = $('<p>');
                    reference45El.text(ref45El);
                    var reference46El = $('<p>');
                    reference46El.text(ref46El);
                    var reference47El = $('<p>');
                    reference47El.text(ref47El);
                    var reference48El = $('<p>');
                    reference48El.text(ref48El);
                    var reference49El = $('<p>');
                    reference49El.text(ref49El);
                    var reference50El = $('<p>');
                    reference50El.text(ref50El);
                    var breakEl = $('<hr/>');



                    $(`#reference${i}`).append(reference1El);
                    $(`#reference${i}`).append(reference2El);
                    $(`#reference${i}`).append(reference3El);
                    $(`#reference${i}`).append(reference4El);
                    $(`#reference${i}`).append(reference5El);
                    $(`#reference${i}`).append(reference6El);
                    $(`#reference${i}`).append(reference7El);
                    $(`#reference${i}`).append(reference8El);
                    $(`#reference${i}`).append(reference9El);
                    $(`#reference${i}`).append(reference10El);
                    $(`#reference${i}`).append(reference11El);
                    $(`#reference${i}`).append(reference12El);
                    $(`#reference${i}`).append(reference13El);
                    $(`#reference${i}`).append(reference14El);
                    $(`#reference${i}`).append(reference15El);
                    $(`#reference${i}`).append(reference16El);
                    $(`#reference${i}`).append(reference17El);
                    $(`#reference${i}`).append(reference18El);
                    $(`#reference${i}`).append(reference19El);
                    $(`#reference${i}`).append(reference20El);
                    $(`#reference${i}`).append(reference21El);
                    $(`#reference${i}`).append(reference22El);
                    $(`#reference${i}`).append(reference23El);
                    $(`#reference${i}`).append(reference24El);
                    $(`#reference${i}`).append(reference25El);
                    $(`#reference${i}`).append(reference26El);
                    $(`#reference${i}`).append(reference27El);
                    $(`#reference${i}`).append(reference28El);
                    $(`#reference${i}`).append(reference29El);
                    $(`#reference${i}`).append(reference30El);
                    $(`#reference${i}`).append(reference31El);
                    $(`#reference${i}`).append(reference32El);
                    $(`#reference${i}`).append(reference33El);
                    $(`#reference${i}`).append(reference34El);
                    $(`#reference${i}`).append(reference35El);
                    $(`#reference${i}`).append(reference36El);
                    $(`#reference${i}`).append(reference37El);
                    $(`#reference${i}`).append(reference38El);
                    $(`#reference${i}`).append(reference39El);
                    $(`#reference${i}`).append(reference40El);
                    $(`#reference${i}`).append(reference41El);
                    $(`#reference${i}`).append(reference42El);
                    $(`#reference${i}`).append(reference43El);
                    $(`#reference${i}`).append(reference44El);
                    $(`#reference${i}`).append(reference45El);
                    $(`#reference${i}`).append(reference46El);
                    $(`#reference${i}`).append(reference47El);
                    $(`#reference${i}`).append(reference48El);
                    $(`#reference${i}`).append(reference49El);
                    $(`#reference${i}`).append(reference50El);
                    $(`#reference${i}`).append(breakEl);
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
  
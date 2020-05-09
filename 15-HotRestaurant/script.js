$.ajax({
    url: "localhost:6969/api/tables",
    method: "GET"
  }).then(function(response) {
    const tables = reponse;
        // select and empty container div
        $("#tableList").empty();
    
        $.each(tables, function(reservation, i) {
            // generate sections from data (tables object)
            var liElement = $("<li>");
            liElement.attr("class", "list-group-item mt-4");
            var h2ElementTable = $("<h2>");
            var h2ElementID = $("<h2>");
            var h2ElementName = $("<h2>");
            var h2ElementEmail = $("<h2>");
            var h2ElementPhone = $("<h2>");
            var hrElement = $("<hr>");
            // update text
            h2ElementTable.text(`Table ${i}`);
            h2ElementID.text(reservation.ID);
            h2ElementName.text(reservation.name);
            h2ElementEmail.text(reservation.email);
            h2ElementPhone.text(reservation.phone);
            // append elements
            liElement.append(h2ElementTable);
            liElement.append(hrElement);
            liElement.append(h2ElementID);
            liElement.append(h2ElementName);
            liElement.append(h2ElementEmail);
            liElement.append(h2ElementPhone);
            
            $("#tableList").append(liElement);
    
        });
  });

$.ajax({
    url: "localhost:6969/api/waitlist",
    method: "GET"
}).then(function(response) {
    const waitlist = response;

        // select and empty container div
        $("#waitList").empty();
    
        $.each(waitlist, function(reservation, i) {
            // generate sections from data (tables object)
            var liElement = $("<li>");
            liElement.attr("class", "list-group-item mt-4");
            var h2ElementTable = $("<h2>");
            var h2ElementID = $("<h2>");
            var h2ElementName = $("<h2>");
            var h2ElementEmail = $("<h2>");
            var h2ElementPhone = $("<h2>");
            var hrElement = $("<hr>");
            // update text
            h2ElementTable.text(`Table ${i}`);
            h2ElementID.text(reservation.ID);
            h2ElementName.text(reservation.name);
            h2ElementEmail.text(reservation.email);
            h2ElementPhone.text(reservation.phone);
            // append elements
            liElement.append(h2ElementTable);
            liElement.append(hrElement);
            liElement.append(h2ElementID);
            liElement.append(h2ElementName);
            liElement.append(h2ElementEmail);
            liElement.append(h2ElementPhone);
            
            $("#waitList").append(liElement);
        
        });
});

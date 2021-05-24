var time = ["9 a", "10 a", "11 a", "12 A", "1 p", "2 p", "3 p", "4 p", "5 p"]

var firstTime = moment(time[i], "h a").format("h a")

$("#9am").text(firstTime);

var tRowHead = $("#timeTable tbody tr")

tRowHead.find('td:last').each(function() {
    $(this).html('<a class="bi bi-save-fill"></a>')
    $(this).addClass('align-right')
})



var i = 0;
$('table tr').not(':first').find('th:first').each(function () {

    $(this).text(moment(time[i], "h a").format("h a"))
    i++;
})


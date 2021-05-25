var timeDisplayEl = $('#time-display');
var timeBlock = $("<div></div>").addClass('col-2 col-md-1 text-center time-block')
var textArea = $("<textarea></textarea>").addClass('col-6 col-md-6 bg-dark text-white')
var saveBlock = $("<a></a>").addClass('col-2 col-md-1 text-center align-middle saveBtn').html('<i class="bi bi-save-fill"></i>')

function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}

setInterval(displayTime, 1000);

var time = ["9 a", "10 a", "11 a", "12 a", "1 p", "2 p", "3 p", "4 p", "5 p"]

var j = 0
for(j = 0; j < time.length; j++) {
    $('section').append('<div class="row col-12 d-flex justify-content-center m-2"></div>');
}

addRow()

function addRow() {
$('section div').append(timeBlock)
$('section div').append(textArea)
$('section div').append(saveBlock)
addTime()
}

function addTime() {
    var i = 0;
    $('body section div').find('div:first').each(function () {
        $(this).text(moment(time[i], "h a").format("ha"))
        i++;
    })
}

saveBlock.on('click', function (){
    $(this)
})

$('section div div').each(function () {
    console.log(moment.isMoment($(this).text, 'ha'))
    if (moment().isSame($(this), 'h a')) {
        $('textarea').addClass('present')
    }
    if (moment().isBefore($(this), 'h a')) {
        $('textarea').addClass('past')
    }
    if (moment().isAfter($(this), 'h a')) {
        $('textarea').addClass('future')
    }
})
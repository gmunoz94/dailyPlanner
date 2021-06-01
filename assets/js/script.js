var timeDisplayEl = $('#time-display');
var timeBlock = $("<div></div>").addClass('col-2 col-md-1 text-center time-block')
var textArea = $("<textarea></textarea>").addClass('col-6 col-md-6')
var saveBlock = $("<a></a>").addClass('col-2 col-md-1 text-center align-middle saveBtn').html('<i class="bi bi-save-fill"></i>')

function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}

setInterval(displayTime, 1000);

var time = ["06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"]

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
    $('.row').find('div:first').each(function () {
        if (i < 4) {
            $(this).text(moment(time[i], "HH").format("ha"))
            $(this).attr('id', '0' + [i + 6])
            console.log(time[i])
        } else {
            $(this).text(moment(time[i], "HH").format("ha"))
            $(this).attr('id', [i + 6])
            console.log(time[i])
        }
        i++;
    })

}

saveBlock.on('click', function (){
    $(this)
})

var now = moment('14', 'HH').format('HH')

console.log(now)

function colorTime() {
    for (k = 0; k < time.length; k ++) {
        if (now < time[k]) {
            $('#timeSection').children().eq(k).find('textarea').addClass('future')
        }
        else if (now == time[k]) {
            $('#timeSection').children().eq(k).find('textarea').addClass('present')
        }
        else if (now > time[k]) {
            $('#timeSection').children().eq(k).find('textarea').addClass('past')
        }
    }
}

colorTime()
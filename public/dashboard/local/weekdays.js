let host = document.location;

let weekDayUrl = new URL('/admin/weekDay', host.origin);
let pathSegments = host.pathname.split('/');
let currentLang = pathSegments[1];
if(currentLang != 'ar' || currentLang != 'en'){
    currentLang = 'en';
}

var weekDay = $('#get_weekDay').DataTable({
    processing: true,
    serverSide: true,
    ajax: {
        url:weekDayUrl
    },
    columns: [
        {data: "DT_RowIndex", name: "id"},
        {data: "title_"+currentLang, name: "title_"+currentLang},
        {data: "status", name: "status"},
        {data: "action", name: "action"},
    ]
});

//  view modal weekDay
$(document).on('click', '#ShowModalWeekDay', function (e) {
    e.preventDefault();
    $('#modalWeekDayAdd').modal('show');
});

let AddUrl = new URL('admin/weekDay', host.origin);
// category admin
$(document).on('click', '#addWeekDay', function (e) {
    e.preventDefault();
    let formdata = new FormData($('#formWeekDayAdd')[0]);
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        type: 'POST',
        url: AddUrl,
        data: formdata,
        contentType: false,
        processData: false,
        success: function (response) {
            if (response.status == 400) {
                // errors
                $('#list_error_message').html("");
                $('#list_error_message').addClass("alert alert-danger");
                $('#list_error_message').text(response.message);
            } else {
                $('#error_message').html("");
                $('#error_message').addClass("alert alert-success");
                $('#error_message').text(response.message);
                $('#modalWeekDayAdd').modal('hide');
                $('#formWeekDayAdd')[0].reset();
                weekDay.ajax.reload(null, false);
            }
        }
    });
});

let EditUrl = new URL('admin/weekDay', host.origin);
// view modification data
$(document).on('click', '#showModalEditWeekDay', function (e) {
    e.preventDefault();
    var id = $(this).data('id');
    $('#modalWeekDayUpdate').modal('show');
    $.ajax({
        type: 'GET',
        url: EditUrl+'/' + id+'/edit',
        data: "",
        success: function (response) {
            if (response.status == 404) {
                $('#error_message').html("");
                $('#error_message').addClass("alert alert-danger");
                $('#error_message').text(response.message);
            } else {
                $('#id').val(id);
                $('#title_en').val(response.data.title_en);
                $('#title_ar').val(response.data.title_ar);
                $("#parent_id option[value='"+response.data.parent_id+"']").prop("selected", true);
                $("#status option[value='"+response.data.status+"']").prop("selected", true);
            }
        }
    });
});

let UpdateUrl = new URL('admin/weekDay', host.origin);
$(document).on('click', '#updateWeekDay', function (e) {
    e.preventDefault();
    let formdata = new FormData($('#formWeekDayUpdate')[0]);
    var id = $('#id').val();
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        type: 'POST',
        url: UpdateUrl+'/'+id,
        data: formdata,
        contentType: false,
        processData: false,
        success: function (response) {
            if (response.status == 400) {
                // errors
                $('#list_error_message2').html("");
                $('#list_error_message2').addClass("alert alert-danger");
                $('#list_error_message2').text(response.message);
            } else {
                $('#error_message').html("");
                $('#error_message').addClass("alert alert-success");
                $('#error_message').text(response.message);
                $('#modalWeekDayUpdate').modal('hide');
                $('#formWeekDayUpdate')[0].reset();
                weekDay.ajax.reload(null, false);
            }
        }
    });
});

let DeleteUrl = new URL('admin/weekDay', host.origin);
$(document).on('click', '#showModalDeleteWeekDay', function (e) {
    e.preventDefault();
    $('#nameDetele').val($(this).data('name'));
    var id = $(this).data('id');
    $('#modalWeekDayDelete').modal('show');
    gg(id);
});
function gg(id) {
    $(document).off("click", "#deleteWeekDay").on("click", "#deleteWeekDay", function (e) {
        e.preventDefault();
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.ajax({
            type: 'DELETE',
            url: DeleteUrl+'/'+id,
            data: '',
            contentType: false,
            processData: false,
            success: function (response) {
                if (response.status == 400) {
                    // errors
                    $('#list_error_message3').html("");
                    $('#list_error_message3').addClass("alert alert-danger");
                    $('#list_error_message3').text(response.message);
                } else {
                    $('#error_message').html("");
                    $('#error_message').addClass("alert alert-success");
                    $('#error_message').text(response.message);
                    $('#modalWeekDayDelete').modal('hide');
                    weekDay.ajax.reload(null, false);
                }
            }
        });
    });
}

let statusUrl = new URL('admin/status/weekDay', host.origin);
$(document).on('click', '#status', function (e) {
    e.preventDefault();
    var id = $(this).data('id');
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        type: 'PUT',
        url: statusUrl+'/'+id,
        data: "",
        success: function (response) {
             if (response.status == 400) {
                    // errors
                    $('#list_error_message3').html("");
                    $('#list_error_message3').addClass("alert alert-danger");
                    $('#list_error_message3').text(response.message);
                } else {
                    $('#error_message').html("");
                    $('#error_message').addClass("alert alert-success");
                    $('#error_message').text(response.message);
                    weekDay.ajax.reload(null, false);
                }
        }
    });
});

//  close action
$(document).on('click', '#close', function (e) {
    e.preventDefault();
    $('#formWeekDayAdd')[0].reset();
});

// Filters Table
// $('#statusFilter').change(function(){
//     table.ajax.reload(null, false);
// });

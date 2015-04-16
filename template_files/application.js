/// <reference path="modernizr-2.6.2.js" />
$.ajaxSetup({
    'beforeSend': function (xhr) {
        securityToken = $('[name=__RequestVerificationToken]').val();
        xhr.setRequestHeader('__RequestVerificationToken', securityToken);
    }
});

getConfirmationMsg = function() {
    return "";
}

$(function () {

 
    $(".limit_n_").constrain({ allow: { regex: "[0-9]" } });
    $(".limit_n_ret_").constrain({ allow: { regex: "[0-9\r]" } });
    $(".limit_nsdp_").constrain({ allow: { regex: "[0-9 .-]" } });
    $(".limit_ans_").constrain({ allow: { regex: "[a-zA-Z0-9 ]" } });
    $(".limit_f_").constrain({ allow: { regex: "[0-9]\." }, limit: { "\.": 1 } });
    $(".limit_d_").numeric({ format: '0.00' });
    $('.limit_sec_answer_').constrain({ allow: { regex: "[a-zA-Z0-9 .,-]" } });
    $("#Start-Date").datepicker({
        dateFormat: 'yy-mm-dd'
    });
    $("#End-Date").datepicker({
        dateFormat: 'yy-mm-dd'
    });
});

function boss_dialog(msg, title, btns) {
    var hms = msg.replace('\n', '<p/>');
   
     bootbox.dialog({
        message: hms,
        title: title,
        buttons: btns 
    });
}

function boss_confirm(frm, msg) { 
  
    var buttons = {
        confirm: {
            label: i18n.b_continue,
            className: "btn-success",
            callback: function () {
                
            }
        },
        cancel: {
            label: [i18n.b_cancel],
            className: "btn-danger",
            callback: function () {
            }
        }
    };
         
    boss_dialog(msg, i18n.please_confirm, buttons);
}

function boss_alert(msg) {
    var buttons = { 
        success: {
            label: i18n.b_ok,
            className: "btn-success",
            callback: function () {
                return true;
            }
        }

    }; 
    boss_dialog(msg, i18n.please_note, buttons);
}
 
var boss = { 

    is_blank: function (arg) {
        return !arg || (/^\s*$/).test(JSON.stringify(arg));
    },

    selopt: function (code, name, sel) {
        var s = "<option value='" + (boss.is_blank(code) ? "" : code) + "'";
        s += (code == sel || name == sel ? " selected='selected'" : "");
        s += ">" + name + "</option>";
        return s;
    }
}

$(document).delegate(".numericOnly", "keypress keyup", function (event) {
    var evt = (event) ? event : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;  
    if (charCode > 31 && (charCode < 46 || charCode > 57) ) {
       event.preventDefault();
    }
    if (this.value != this.value.replace(/[^\d].+/g, '')) {
        this.value = this.value.replace(/[^\d].+/g, '');
    }
});

$(document).delegate(".noMobileGo", "keypress", function (event) {
    if (!Modernizr.touch) return true;
    var code = (event.keyCode ? event.keyCode : event.which);
    if ((code == 13) || (code == 10)) {
        $(this).blur();
        return false;
    }
});



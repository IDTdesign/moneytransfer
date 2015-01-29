
// **************************************** Call-Me Notify Validation ****************************************
$.validator.addMethod('validatenotifycallme', function (value, element, params) {
    if (!this.optional(element)) {
        var _prefix = "#Notify_";
        var _idx = /\d+/.exec(element.id)[0];
        var deliveryMethod = $(_prefix + _idx + "__DeliveryMethod").val();
        var notification = $(_prefix + _idx + "__Notification").val();
        if (deliveryMethod == "SMS" && (!/^[0-9]+$/i.test(notification)))
            return false;
        else {
            if (deliveryMethod == "Email" && (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(notification)))
                return false;
        }
    }
    return true;
});

$.validator.unobtrusive.adapters.add('validatenotifycallme', function (options) {
        options.rules['validatenotifycallme'] = {};
        options.messages['validatenotifycallme'] = options.message;
 });

// **************************************** Phone Length Validation ****************************************
//$.validator.addMethod('validatephonelengthif', function (value, element, params) {
//    if (!this.optional(element)) {
//        if ($($type.format("#{0}", params.propertyname)).val() == "D" && (value.length < i18n.min_pinless_length && value.length < i18n.max_pinless_length))
//            return false;
//    }
//   return true;
//}); 

//$.validator.unobtrusive.adapters.add('validatephonelengthif', ['propertyname'], function (options) {
//   options.rules['validatephonelengthif'] = { propertyname: options.params.propertyname };
//   options.messages['validatephonelengthif'] = options.message;
// });

$.validator.addMethod('creditcard', function (value, element, params) {
    if (!this.optional(element)) {
        // Avoid chaining the "onchange" event
        $($type.format("#{0}", params.propertyname)).off("change").on("change", function (e) {
            $($type.format("#{0}", element.id)).valid()
        });
        var _result = {};
        $($type.format("#{0}", element.id)).validateCreditCard(function (result) {
            _result = result;
        });
      return !(!_result.luhn_valid || $($type.format("#{0} :selected", params.propertyname)).text() != _result.card_type.name);
    }
}); 

$.validator.unobtrusive.adapters.add('creditcard', ['propertyname'], function (options) {
    options.rules['creditcard'] = { propertyname: options.params.propertyname };
    options.messages['creditcard'] = options.message;
});
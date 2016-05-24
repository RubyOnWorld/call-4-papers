//= require jquery
//= require jquery_ujs
//= require selectize

$('#user_pronoun').selectize({
    create: true,
    persist: false,
    allowEmptyOption: true,
    createOnBlur: true,
    addPrecedence: true
});

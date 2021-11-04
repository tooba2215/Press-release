// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"


Rails.start()
Turbolinks.start()
ActiveStorage.start()
import 'bootstrap'
import 'jquery'

$(document).on('turbolinks:load', function() {

    $(".link-input").on("input", function () {
        var inpVal = $(this).val();
        var inpIndex = $(this).index()
        var logos = $('.logo-previews').children()
        var currAncor = logos[inpIndex];
        $(currAncor).attr("href", inpVal)
        updateTextArea()
    });


    $('.checkboxInput').change(function () {
        if ($(this).is(":checked")) {
            $('.pre-img').each(function () {
                $(this).addClass('prev-log-grayScale')
            })
            updateTextArea()
        } else {
            $('.pre-img').each(function () {
                $(this).removeClass('prev-log-grayScale')
            })
            updateTextArea()
        }
    })

    function updateTextArea() {
        //on each trigger of input change we will set "inputVal" variable to new updated html.
        var inputVal = $('.logo-previews').html();
        //Now we will pass the updated html to our text area so that a user can experince live changes in text area input.
        $('.embCode-textarea').val(inputVal)
    }

    updateTextArea();

//initialy every input will be null or check box will not be in true state
    $(document).ready(function () {
        $('.link-input').val('')
        $('.checkboxInput').prop('checked', false)
    })

});





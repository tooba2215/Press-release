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

    $(".link-input").on("input", function() {
        var inpVal = $(this).val();
        var inpIndex = $(this).index()
        var logos = $('.logo-previews').children()
        var currAncor = logos[inpIndex];
        $(currAncor).attr("href", inpVal)
        updateTextArea()
    });

    $('.checkboxInput').change(function() {
        if ($(this).is(":checked")) {
            $('.pre-img').each(function() {
                $(this).addClass('prev-log-grayScale')
            })
            updateTextArea()
        } else {
            $('.pre-img').each(function() {
                $(this).removeClass('prev-log-grayScale')
            })
            updateTextArea()
        }
    })

    function updateTextArea() {
        var inputVal = $('.logo-previews').html();
        $('.embCode-textarea').val(inputVal)
    }
    updateTextArea();


    $(document).on('blur', '.api-link', function(){
        var url = $(this).val();
        var curr = $(this).attr('id');
        var arr = curr.split('-');
        var currId = arr[1];
        if (url != '') {
            url = url.replace(/^https?:\/\//, '')
            fetch(`/dashboards/get_logo?url=${url}`)
                .then(response => response.json())
                .then(data => {
                    $("#img-" + currId).attr("src", "data:image/*;base64," + data.image);
                    $('#link-' + currId).attr('href', `https://${url}`)
                })
                .catch(error => console.log(error))
        } else {
            $("#img-" + currId).attr("src", null);
            $('#link-' + currId).attr('href', '#');
        }
    })

    $(document).ready(function() {
        $('.link-input').val('')
        $('.checkboxInput').prop('checked', false);
    });
});





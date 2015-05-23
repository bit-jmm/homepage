# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
$ ->
  $('#navbar ul li a').on('click', () ->
    $(this).parent().siblings().removeClass('active')
    $(this).parent().addClass('active')
  )

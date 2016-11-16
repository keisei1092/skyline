# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

$ ->
  $('.config-textarea').val $('.main-textarea').attr('style')
  $('.config-textarea').on 'change keyup paste', ->
    console.log 'hoge'
    $('.main-textarea').attr 'style', $('.config-textarea').val()

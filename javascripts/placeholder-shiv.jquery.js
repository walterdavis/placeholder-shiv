$(document).ready(function() {
  var _test = document.createElement('input');
  if( ! ('placeholder' in _test) ){
  //we are in the presence of a less-capable browser

    //put in initial placeholder text
    $('*[placeholder]').each(function () {
      var $self = $(this);
      //First check to make sure the value is nothing
      if ( $self.val() === '' ) {
        $self.val($self.attr('placeholder'));
        if($self.attr('type') == 'password'){
          $self['real_type'] = 'password';
          $self.attr('type', 'text');
        }
      }
    });

    $(document).on({
      focus: function() {
        var input = $(this);
        if (input.val() === input.attr('placeholder')) {
          input.val('');
          input.removeClass('placeholder');
          if(input.real_type) input.attr('type', input.real_type);
        }
      },
      blur: function() {
        var input = $(this);
        if (input.val() === '' || input.val() === input.attr('placeholder')) {
          input.addClass('placeholder');
          input.val(input.attr('placeholder'));
          if(input.real_type) input.attr('type', 'text');
        }
      }
    },"input[placeholder]");
    $(document).on("submit","form",function() {
      $(this).find('input[placeholder]').each(function() {
        var input = $(this);
        if (input.val() === input.attr('placeholder')) {
          input.val('');
        }
      });
    });
  }
});
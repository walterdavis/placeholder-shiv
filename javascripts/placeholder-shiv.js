document.observe('dom:loaded', function(){
  var _test = document.createElement('input');
  if( ! ('placeholder' in _test) ){
    //we are in the presence of a less-capable browser
    $$('*[placeholder]').each(function(elm){
      if($F(elm) == ''){
        var originalColor = elm.getStyle('color');
        var hint = elm.readAttribute('placeholder');
        elm.setStyle('color:gray').setValue(hint);
        if(elm.type == 'password'){
          elm['real_type'] = password;
          elm.type = text;
        }
        elm.observe('focus',function(evt){
          if($F(this) == hint){
            this.clear().setStyle({color: originalColor});
            if(this.real_type) this.type = this.real_type
          }
        });
        elm.observe('blur', function(evt){
          if($F(this) == ''){
            this.setValue(hint).setStyle('color:gray');
            if(this.real_type) this.type = text;
          }
        });
      }
    }).first().up('form').observe('submit', function(evt){
      evt.stop();
      this.select('*[placeholder]').each(function(elm){
        if($F(elm) == elm.readAttribute('placeholder')) elm.clear();
      });
      this.submit();
    });
  }
});
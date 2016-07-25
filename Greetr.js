
;(function(global,$) {
    //console.log($);
    //new an object
  var Greetr = function(firstname,lastname, language){
    return new Greetr.init(firstname,lastname,language);

  }
  
  //hidden within scope of iife
  var supportedLangs = ['en' , 'es','fr'];

  var greeting = {
      en : 'Hello',
      es : 'Hola',
      fr : 'Bonjour'
  };
  
  var formalGreetings = {
      en: 'Greetings',
      es: 'Saludas',
      fr: 'Salut!'
      
  };
  
    var logMessages = {
        en: 'Logged in',
        es: 'Incico sesion'
    };
    
  Greetr.prototype = {
      fullname : function (){
          return this.firstname + ' ' + this.lastname;
      },
      
      validate: function () {
          if(supportedLangs.indexOf(this.language) === -1){
              throw "Invalid language";
          }
      },
      greeting : function() {
          return greeting[this.language] + ' ' + this.firstname;
      },
       formalGreeting : function() {
          return formalGreetings[this.language] + ' ' + this.fullname();
      },
      greet: function(formal) {
          var msg;
          
          if(formal){
              msg = this.formalGreeting();
          }
          else {
              msg =this.greeting();
          }
          if(console){
              console.log(msg);
          }
          
          //to make it chainable
          //this refers to the calling object
          return this;
          
      },
      log: function() {
          if(console){
              console.log(logMessages[this.language] + ': '+ this.fullname());
          }
          return this;
      },
      
      setLang : function (lang) {
          if(lang) {
              this.language = lang;
          }
          this.validate();
          return this;
      },
      
      changeHtml : function(selector,formal){
          if(!$){
              throw 'jQuery not loaded';
          }
          if(!selector){
              throw 'Missing selector';
          }
          if(formal){
              msg = this.formalGreeting();
          }
          else {
              msg =this.greeting();
          }
          if(console){
              console.log(msg);
          }
          //console.log($(selector.html.val()));
          $(selector).text(msg);
          return this;
      }
  };
    
    Greetr.init = function(firstname,lastname,language){
      var self = this;
      self.firstname = firstname || 'Default';
      self.lastname = lastname || 'Default';
      self.language = language || 'en';
        self.validate();
  }
    
    Greetr.init.prototype = Greetr.prototype;
    
    global.Greetr = global.G$ = Greetr;
}(window,jQuery));
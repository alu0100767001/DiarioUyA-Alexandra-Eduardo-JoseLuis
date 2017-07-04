function iniciarSesion() {
  var todoCorrecto;
  var texto;
  var formulario = document.login;
  console.log("Yeha");

  if(formulario[1].type =='email')
  {
    if (formulario[1].value == null || formulario[1].value.length == 0)
    {
      console.log('+ Usuario no puede estar vacio');
    }
    else
    {
      var user = formulario[1].value; // Pasamos usuario
      var bd = new Firebase('https://diariouyabbdd.firebaseio.com/'); //Referenciamos la base de datos

      bd.child(user).once('value', function(snapshot) { // Comprobamos si el usuario existe en la base de datos

        var exist_user = (snapshot.val() !== null);
        if(exist_user)
        {
          pass();
        }
        else
        {
          console.log('+ El usuario ' + user + ' no esta registrado');
        }
      });
    }
  }

  function pass()
  {
    if(formulario[2].type =='password')
    {
      if (formulario[2].value == null || formulario[2].value.length == 0)
      {
        console.log('Debe introducir una contraseña');
      }
      else
      {
        var password = formulario[2].value; // Pasamos contraseña
        var url = 'https://diariouyabbdd.firebaseio.com/';
        var bd = new Firebase(url); //Referenciamos la base de datos

        bd.on('value', function(snapshot) { // Comprobamos si el usuario existe en la base de datos

          var correct_pass = snapshot.val();
          if(password == correct_pass)
          {
            console.log('Correcto, iniciando sesión...');
          
          }
          else
          {
            console.log('+ La contraseña introducida no es correcta');
          }
        });
      }
    }
  }
}

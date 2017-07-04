function validarFormulario() {
  var todoCorrecto = true;
  var texto;
  var formulario = document.registro;
  console.log ("Yeha");
 
  if(formulario[1].type =='email')
  {
    
    var exp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if (!exp.test(formulario[1].value))
    {
      if(texto == null)
      {
        texto = '+ Email no puede estar vacio o es incorrecto';
      }
      else
      {
        texto = texto + '\n+ Email no puede estar vacio o es incorrecto';
      }
      todoCorrecto = false;
    }
  }

  if(formulario[2].type =='password')
  {
    if (formulario[2].value == null || formulario[2].value.length == 0)
    {
      if(texto == null)
      {
        texto = '+ Contraseña no puede estar vacio';
      }
      else
      {
        texto = texto + '\n+ Contraseña no puede estar vacio';
      }
      todoCorrecto = false;
    }
  }



  if (todoCorrecto == true)
  {
    var bd = new Firebase('https://diariouyabbdd.firebaseio.com/');
    var pass = formulario[2].value;
    var email = formulario[1].value;

    bd.child(email).once('value', function(snapshot) {
      var existe_usuario = (snapshot.val() !== null);

      if(existe_usuario)
      {
        console.log('+ El usuario ' + email + ' ya esta registrado.');
      }
      else
      {
        bd.child(email).set({Email: email, Contrasena: pass});
        var url = 'https://diariouyabbdd.firebaseio.com/';
        bd = new Firebase(url);
        bd.push({Email: email, Contrasena: pass});
        $('.nav-tabs a[href="#registered"]').tab('show');
      }
    });
  }
  else
  {
    console.log(texto);
  }
}

var boton = document.getElementById("b");
var boton1 = document.getElementById("b1");
var boton2 = document.getElementById("b2");
function mathRandom(min,max)//aqui es el mathRandom que me da un numero aleatorio entre 1 y 3
{
  var r;
  r = Math.floor(Math.random()* (max - min + 1)) + min;
  return r;
}

var mr = mathRandom(1,3);
boton.addEventListener("click",piedra)
boton1.addEventListener("click",papel)
boton2.addEventListener("click",tijeras)
function piedra()//aqui empiesan las funciones para identificar cuando sacan piedra papel o tigeras
{
  if(mr == 2)
  {
    alert("!PIEDRA PAPEL O TIJERAS¡");
    document.write("perdiste ");
    console.log(mr);
    document.write("tu sacaste piedra la consola saco papel")
  }
        else if(mr == 3)
        {
          alert("!PIEDRA PAPEL O TIJERAS¡");
          document.write("!GANASTE¡ ");
          console.log(mr);
          document.write("!TU SACASTE PIEDRA¡ y la consola saco tigeras");
        }

              else if(mr == 1)
              {
                alert("!PIEDRA PAPEL O TIJERAS¡");
                document.write("empate ");
                console.log(mr);
                document.write("los dos sacaron piedra");
              }
}
function papel()
{
  if(mr == 3)
  {
      alert("!PIEDRA PAPEL O TIJERAS¡");
      document.write("perdiste ");
      console.log(mr);
      document.write("tu sacaste papel y la consola saco tijeras");
  }
    else if(mr == 1)
    {
      alert("!PIEDRA PAPEL O TIJERAS¡");
      document.write("!GANASTE¡ ");
      console.log(mr);
      document.write("!TU SACASTE PAPEL¡ y la consola saco piedra ");
    }
      else if(mr == 2)
      {
        alert("!PIEDRA PAPEL O TIJERAS¡");
        document.write("empate ");
        console.log(mr);
        document.write("los dos sacaron papel");
      }
}
function tijeras()
{
  if(mr == 1)
  {
    alert("!PIEDRA PAPEL O TIJERAS¡");
    document.write("perdiste ");
    console.log(mr);
    document.write("tu sacaste tigeras y la consola saco piedra");
  }
    else if(mr == 2)
    {
      alert("!PIEDRA PAPEL O TIJERAS¡");
      document.write("!GANASTE¡ ");
      console.log(mr);
      document.write("!TU SACASTE TIJERAS¡ y la consola saco papel ");
    }
      else if(mr == 3)
      {
        alert("!PIEDRA PAPEL O TIJERAS¡");
        document.write("empate ");
        console.log(mr);
        document.write("los dos sacaron tijeras");
      }
}

### **Algoritmo de visibilidad: Partición Binaria del Espacio**

Es un método para subdividir recursivamente un espacio en elementos convexos
empleando hiperplanos. Esta subdivisión da como resultado a una
representación de la escena mediante una estructura de datos árbol
conocido como el arbol de partición binaria del espacio

El algoritmo comienza insertando en un nodo la región que se desea representar,
luego se divide a la mitad la región, las subregiones resultantes serán los hijos
izquierdo y derecho de la región original y el proceso de división se realiza
para cada una de las subregiones.

Lo anterior puede observarse en la imagen a continuación:

<div align="center">
  <img src="../BSP3.gif">
</div>

### **Algoritmo de visibilidad: Partición Binaria del Espacio:**

<br/>

Es un método para subdividir recursivamente un espacio en elementos convexos
empleando hiperplanos. Esta subdivisión da como resultado a una
representación de la escena mediante una estructura de datos árbol
conocido como el arbol de partición binaria del espacio, este algoritmo surge
dada la necesidad de ordenar las primitivas que se desean dibujar de forma
eficiente determinando cuáles son las que están delante y detrás de otras, lo
cual optimiza el proceso de renderizado. Fue muy útil para la computación gráfica
tridimensional.

### **Construcción del árbol:**

El algoritmo comienza insertando un hiperplano en una de las caras
del polígono e inserta el identificador de la cara en el nodo raíz
del árbol y separa las caras restantes en dos listas, una lista de
caras frontales y otra lista de caras posteriores.

La dirección de la flecha en la animación a continuación distingue
la lista de caras frontales, mientras que la que no posee esta
flecha hace referencia a las posteriores.

Luego se construyen los subarboles de partición binaria frontal
y posterior para cada una de las sublistas de caras restantes, hasta
que las sublistas sólo contengan un elemento.

Lo anterior puede observarse en la imagen a continuación:

<div align="center">
  <img src="../BSP3.gif">
</div>

<br/>

### **Recorrido del árbol:**

Como la estructura de datos que representa la región corresponde
a un árbol binario, es necesario recorrerlo con el algoritmo de
recorrido inorder, en el cual se recorre en inorder el subárbol
izquierdo, luego se visita el nodo raíz y por último se recorre en inorder
el subárbol derecho.
Luego de obtenido el recorrido, se aplica el algoritmo del pintor a la
secuencia inorder obtenida.

<div align="center">
  <img src="../INORDER.gif">
</div>

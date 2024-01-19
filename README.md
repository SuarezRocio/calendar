# calendar

link : 
https://inquisitive-dragon-bbab57.netlify.app/

<h3>Principales funciones utilizadas en este codigo</h3>

<ul>
<li>
renderCalendar: Esta función es la responsable de generar el contenido del calendario y actualizar la interfaz. Utiliza varios bucles for para crear las etiquetas <li> que representan los días del mes. También marca el día actual como "activo" si coincide con la fecha actual.
</li>
<li>
Manejo de Fechas:

getDay(): Obtiene el día de la semana (0-6) para el primer día del mes.
getDate(): Obtiene el día del mes para la última fecha del mes y el último día del mes anterior.
getMonth() y getYear(): Obtienen el mes y el año, respectivamente.
Eventos de Clic en Días:
</li>

<li>
La función agrega eventos de clic a los elementos <li> de los días. Al hacer clic en un día, verifica si el día está marcado como "inactivo" y, si no lo está, marca el día como "seleccionado". También se asegura de desmarcar cualquier otro día que haya sido seleccionado previamente.
</li>

<li>
Control de Meses con Botones:

prevIcon y nextIcon: Representan los elementos de los botones de "anterior" y "siguiente" en el calendario.
Event Listeners: Se añaden eventos de clic a estos botones para cambiar el mes actual (currMonth) y el año correspondiente cuando se hace clic en "anterior" o "siguiente". Luego, llama a la función renderCalendar para actualizar la interfaz.
</li>
  
</ul>

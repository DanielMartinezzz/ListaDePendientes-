window.addEventListener('load', ()=> {
    //referenciamos a los elementos del DOM
    const formCrear = document.getElementById('form-crear')
    const listaTareas = document.getElementById('lista-tareas')
    const inputCrear = document.getElementById('crear')
    const inputBuscar = document.getElementById('buscar')
    /* Procedimiento para el ALTA */

    formCrear.addEventListener('submit', (e)=>{
        e.preventDefault()
        capturarValor()    
        
       
    })
    
    
     
    const capturarValor = ()=> {
        const tareaNombre = inputCrear.value.trim();
        (tareaNombre.length) ? mostrarTareaHtml(tareaNombre) : alert('Debe ingresar una tarea') 
       
       
       
        
    }
    
    
    const mostrarTareaHtml = (tarea)=> {
       
        const liHtml = `<li><strong>${tarea}</strong><i class="fas fa-minus-circle borrar"></i></li>`
        listaTareas.innerHTML += liHtml
    
        inputCrear.value= ""

        //Evitar borrar al racargar pagina  
        if (localStorage.getItem('tarea')) {
            inputCrear.innerText = localStorage.getItem('tarea')

        }
        else{
            localStorage.setItem('tarea' , '0')
        }
        
    }

    /* Procedimiento para el BUSCAR */
    inputBuscar.addEventListener('keyup', ()=>{
        const caracter = inputBuscar.value.trim()
        busqueda(caracter)
    })
    const busqueda = (cadena)=>{
        
        let arreglo = Array.from(listaTareas.children)
       
        arreglo
            .filter(texto => !texto.textContent.toLowerCase().includes(cadena))                   
            .forEach(cadenaFiltrada => {
                cadenaFiltrada.classList.add('textFiltrado')
            })
        arreglo
            .filter(texto => texto.textContent.toLowerCase().includes(cadena))                   
            .forEach(cadenaFiltrada => {
                cadenaFiltrada.classList.remove('textFiltrado')
            })
    }
    /* Procedimiento para BORRAR */
    listaTareas.addEventListener('click', (e)=> {
        alert("Desea borrar")
        
        if(e.target.classList.contains('borrar')){
            e.target.parentElement.remove()
        }
        inputBuscar.value = ''
    })
})
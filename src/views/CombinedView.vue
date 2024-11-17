<template>
    <div class="container my-5">
      <!-- Caja para añadir nuevas tareas -->
      <div class="task-box p-4 border rounded shadow-sm">
        <!-- Formulario para añadir nueva tarea -->
        <div class="mb-4">
          <h3 class="text-center">Añadir Nueva Tarea</h3>
          <form @submit.prevent="addTask">
            <div class="mb-3">
              <label for="newTask" class="form-label">Descripción de la Tarea</label>
              <input
                id="newTask"
                v-model="newTask"
                type="text"
                class="form-control"
                placeholder="Escribe la descripción de la tarea"
              />
            </div>
            <button type="submit" class="btn btn-success d-block mx-auto">Añadir Tarea</button>
          </form>
        </div>
  
        <!-- Lista de tareas -->
        <div v-if="tasks.length > 0" class="task-list">
          <h3 class="text-center">Lista de Tareas</h3>
          <div v-for="task in tasks" :key="task.id" class="task-item card my-2">
            <div class="card-body d-flex justify-content-between align-items-center">
              <div class="task-text">
                <h5 :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">
                  {{ task.todo }}
                </h5>
                <!-- Estado de la tarea con colores de fondo -->
                <span :class="task.completed ? 'completed' : 'pending'">
                  {{ task.completed ? 'Completada' : 'Pendiente' }}
                </span>
              </div>
              <div>
                <!-- Botón Completar/Desmarcar -->
                <button
                  class="btn btn-outline-success btn-sm me-2"
                  @click="toggleTaskCompletion(task)"
                >
                  <i class="bi" :class="task.completed ? 'bi-check-circle-fill' : 'bi-check-circle'"></i>
                </button>
  
                <!-- Botón Eliminar con ícono -->
                <button
                  class="btn btn-sm btn-outline-danger"
                  @click="deleteTask(task)"
                >
                  <i class="bi bi-trash"></i> <!-- Ícono de basura -->
                </button>
              </div>
            </div>
          </div>
        </div>
  
        <div v-else>
          <p class="text-center">No hay tareas disponibles.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CombinedView",
    data() {
      return {
        tasks: [], // Lista de tareas
        newTask: "", // Nueva tarea para añadir
      };
    },
    mounted() {
      // Cargar las tareas automáticamente al acceder a la vista
      this.fetchTasks();
    },
    methods: {
      // Obtiene todas las tareas desde la API
      async fetchTasks() {
        try {
          const response = await fetch("https://dummyjson.com/todos");
          if (!response.ok) {
            throw new Error(`Error al obtener tareas: ${response.status}`);
          }
          const data = await response.json();
          this.tasks = data.todos; // Asignar las tareas a la lista
        } catch (error) {
          console.error("Error al cargar tareas desde la API:", error.message);
          alert("No se pudo cargar las tareas desde la API. Verifica la consola para más detalles.");
        }
      },
      // Añade una nueva tarea
      addTask() {
        if (this.newTask.trim() === "") {
          alert("Por favor, escribe una descripción para la tarea.");
          return;
        }
        const newTask = {
          id: Date.now(), // Genera un ID único
          todo: this.newTask,
          completed: false,
        };
        this.tasks.push(newTask);
        this.newTask = ""; // Limpia el campo de entrada
      },
      // Cambia el estado de completado de una tarea
      toggleTaskCompletion(task) {
        task.completed = !task.completed;
      },
      // Elimina una tarea
      deleteTask(task) {
        this.tasks = this.tasks.filter((t) => t.id !== task.id);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Caja para formulario y tareas, ampliamos el tamaño */
  .task-box {
    max-width: 900px;
    margin: 0 auto;
    background-color: #f9f9f9;
    border: 1px solid #007bff;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  /* Contenedor de las tareas, para que se centren */
  .task-list {
    display: flex;
    flex-direction: column;
    align-items: center; /* Centra las tarjetas */
    justify-content: center;
    margin-top: 20px;
  }
  
  /* Estilos para las tarjetas de las tareas */
  .task-item {
    border: 2px solid #007bff;
    border-radius: 10px;
    padding: 15px;
    background-color: #f0f8ff;
    width: 80%; /* Tamaño de las tarjetas */
    max-width: 800px; /* Limitar el ancho máximo */
    margin-bottom: 15px;
    text-align: center; /* Centrado de todo el contenido de la tarjeta */
  }
  
  .task-item:hover {
    background-color: #e0f7ff;
  }
  
  .card-body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center; /* Centrado de todo el contenido de la tarjeta */
  }
  
  h5 {
    margin: 0;
    text-align: center; /* Centrado de texto */
  }
  
  .card-body .btn {
    margin-left: 10px;
  }
  
  h1, h3 {
    color: #007bff;
    text-align: center;
  }
  
  /* Estilos para el formulario */
  input.form-control {
    margin-bottom: 10px;
  }
  
  button.d-block.mx-auto {
    width: 150px;
    margin: 0 auto;
    display: block;
  }
  
  /* Clases para el estado de las tareas */
  .pending {
    background-color: #f1c40f; /* Mostaza */
    color: white;
    padding: 2px 10px;
    border-radius: 5px;
  }
  
  .completed {
    background-color: green;
    color: white;
    padding: 2px 10px;
    border-radius: 5px;
  }
  </style>
  
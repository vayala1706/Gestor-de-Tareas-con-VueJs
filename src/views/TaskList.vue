<template>
    <div class="container my-5">
      <h1 class="text-center mb-4">Lista de Tareas</h1>
  
      <!-- Caja para cargar tareas y mostrar las tareas cargadas -->
      <div class="task-box p-4 border rounded shadow-sm">
        <button class="btn btn-primary d-block mx-auto mb-4" @click="fetchTasks">
          <i class="fas fa-download"></i> Cargar Tareas
        </button>
  
        <!-- Lista de tareas cargadas dentro de la caja -->
        <div v-if="tasks.length > 0" class="task-list">
          <div v-for="task in tasks" :key="task.id" class="task-item card my-2">
            <div class="card-body d-flex justify-content-between align-items-center">
              <!-- Descripción de la tarea con su estado -->
              <div class="task-text">
                <h5 :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">
                  {{ task.todo }}
                </h5>
                <span :class="task.completed ? 'completed' : 'pending'">
                  {{ task.completed ? 'Completada' : 'Pendiente' }}
                </span>
              </div>
  
              <!-- Botones de completar y eliminar con iconos -->
              <div>
                <!-- Botón Completar con solo el ícono de la palomita (marcada o desmarcada según el estado) -->
                <button class="btn btn-outline-success btn-sm me-2" @click="toggleTaskCompletion(task)" aria-label="Marcar como completada">
                  <i class="bi" :class="task.completed ? 'bi-check-circle-fill' : 'bi-check-circle'"></i>
                </button>
  
                <!-- Botón Eliminar con ícono -->
                <button class="btn btn-outline-danger btn-sm" @click="deleteTask(task)" aria-label="Eliminar tarea">
                  <i class="bi bi-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Mensaje si no hay tareas -->
        <div v-else>
          <p class="text-center alert alert-warning mt-4">No hay tareas disponibles.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "TaskList",
    data() {
      return {
        tasks: [], // Almacenamiento de las tareas
      };
    },
    methods: {
      // Llamada para obtener las tareas desde la API externa
      async fetchTasks() {
        try {
          const response = await axios.get("https://dummyjson.com/todos");
          this.tasks = response.data.todos; // Asignamos las tareas obtenidas de la API
        } catch (error) {
          console.error("Error al obtener las tareas: ", error);
        }
      },
  
      // Cambiar el estado de una tarea (completada/no completada)
      toggleTaskCompletion(task) {
        task.completed = !task.completed;
      },
  
      // Eliminar la tarea seleccionada
      deleteTask(task) {
        this.tasks = this.tasks.filter((t) => t.id !== task.id);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Caja para cargar tareas */
  .task-box {
    max-width: 900px;
    margin: 0 auto;
    background-color: #f9f9f9;
    border: 1px solid #007bff;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center; /* Centrado de todos los elementos dentro de la caja */
  }
  
  /* Contenedor de las tareas */
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
    justify-content: center; /* Centra el contenido */
    align-items: center;
  }
  
  h5 {
    margin: 0;
    text-align: center; /* Centrado de texto */
  }
  
  .card-body .btn {
    margin-left: 10px;
  }
  
  h1 {
    color: #007bff;
    text-align: center;
  }
  
  /* Estilos para el formulario */
  button.d-block.mx-auto {
    display: block;
    margin: 0 auto;
    padding: 10px 20px;
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
  
  /* Estilos de los iconos de los botones */
  button i {
    margin-right: 5px;
  }
  
  /* Alineación del botón Cargar Tareas en una sola línea */
  button i {
    vertical-align: middle;
  }
  </style>
  
<template>
    <div class="container my-5">
      <h1 class="text-center mb-4">Añadir Tarea</h1>
  
      <!-- Caja para el formulario y las tareas -->
      <div class="task-box p-4 border rounded shadow-sm">
        <!-- Formulario para agregar tarea -->
        <div class="input-group mb-4">
          <input
            v-model="newTask"
            @keyup.enter="addTask"
            placeholder="Añadir nueva tarea"
            class="form-control"
            aria-label="Nueva Tarea"
          />
          <button @click="addTask" class="btn btn-primary">
            <i class="fas fa-plus"></i> Añadir
          </button>
        </div>
  
        <!-- Lista de tareas añadidas -->
        <div v-if="tasks.length > 0" class="list-group">
          <div v-for="task in tasks" :key="task.id" class="list-group-item task-item d-flex justify-content-between align-items-center">
            <!-- Tarea con su estado -->
            <div>
              <span :class="{ completed: task.completed }">{{ task.todo }}</span>
            </div>
  
            <!-- Botones para completar/desmarcar y eliminar -->
            <div>
              <!-- Cambiar ícono según si la tarea está completada o no -->
              <button class="btn btn-outline-success me-2" @click="toggleTaskCompletion(task)" aria-label="Marcar como completada">
                <i v-if="task.completed" class="bi bi-check-circle-fill"></i> <!-- Palomita llena cuando está completada -->
                <i v-else class="bi bi-check-circle"></i> <!-- Palomita vacía cuando está pendiente -->
              </button>
              <button class="btn btn-outline-danger" @click="deleteTask(task)" aria-label="Eliminar tarea">
                <i class="bi bi-trash"></i>
              </button>
            </div>
          </div>
        </div>
  
        <!-- Mensaje si no hay tareas -->
        <div v-else class="alert alert-warning mt-4">
          No hay tareas disponibles.
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AddTask",
    props: {
      tasks: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        newTask: "", // Campo de entrada para la nueva tarea
      };
    },
    methods: {
      addTask() {
        if (this.newTask.trim() === "") return;
  
        const task = {
          todo: this.newTask,
          completed: false,
          id: Date.now(), // Usamos el timestamp para asegurar un ID único
        };
  
        // Emitimos la nueva tarea al componente principal
        this.$emit('add-task', task);
        this.newTask = ""; // Limpiar el campo de entrada después de agregar
      },
  
      // Elimina una tarea específica de la lista
      deleteTask(task) {
        this.$emit('delete-task', task.id);
      },
  
      // Cambia el estado de la tarea entre completada y no completada
      toggleTaskCompletion(task) {
        task.completed = !task.completed;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos para la caja principal donde se encuentra el formulario */
  .task-box {
    max-width: 600px;
    margin: 0 auto;
    background-color: #f9f9f9;
  }
  
  /* Estilos para los botones e iconos */
  button {
    margin-left: 10px;
  }
  
  button i {
    margin-right: 5px;
  }
  
  /* Estilo para marcar las tareas como completadas */
  .completed {
    text-decoration: line-through;
    color: gray;
  }
  
  /* Estilo para las tareas con el recuadro azul */
  .task-item {
    border: 2px solid #007bff;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 10px;
    background-color: #f0f8ff;
  }
  
  .task-item:hover {
    background-color: #e0f7ff;
  }
  
  /* Estilo para el campo de entrada */
  .input-group {
    display: flex;
    margin-bottom: 10px;
  }
  
  .form-control {
    flex-grow: 1;
  }
  
  .list-group-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }
  
  .list-group-item .btn {
    margin-left: 5px;
  }
  
  .list-group-item .completed {
    text-decoration: line-through;
    color: gray;
  }
  </style>
  
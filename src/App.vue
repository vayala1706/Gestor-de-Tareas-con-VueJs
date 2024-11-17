<template>
  <div id="app">
    <!-- Barra de navegación con enlaces a diferentes rutas -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <!-- Logo Vue -->
        <a class="navbar-brand" href="#">
          <img src="https://vuejs.org/images/logo.png" alt="Vue logo" width="40" class="d-inline-block align-top" />
          Gestor de Tareas
        </a>

        <!-- Botón para colapsar la barra de navegación en pantallas pequeñas -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Enlaces de navegación -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/addtask" class="nav-link">Añadir Tarea</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/tasklist" class="nav-link">Lista de Tareas</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/combined" class="nav-link">Vista Combinada</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    <!-- Aquí se cargará el componente correspondiente a la ruta seleccionada -->
    <router-view 
      :tasks="tasks" 
      @add-task="addTask" 
      @delete-task="deleteTask" 
      @toggle-task="toggleTask" 
    />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      tasks: [], // Lista global de tareas
    };
  },
  methods: {
    addTask(newTask) {
      this.tasks.push(newTask); // Agregar tarea
    },
    deleteTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId); // Eliminar tarea
    },
    toggleTask(taskId) {
      const task = this.tasks.find(task => task.id === taskId);
      if (task) {
        task.completed = !task.completed; // Marcar tarea como completada/no completada
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 10px 30px;
  margin-bottom: 20px;
}

nav a {
  font-weight: bold;
  color: #ffffff;
}

nav a.router-link-exact-active {
  color: #42b983;
}

/* Estilos adicionales para mejorar la presentación */
.container {
  max-width: 1200px;
}

.navbar-nav .nav-link {
  font-size: 1.1rem;
}

.navbar-nav .nav-link:hover {
  color: #42b983 !important;
}

#app {
  padding-top: 20px;
}
</style>

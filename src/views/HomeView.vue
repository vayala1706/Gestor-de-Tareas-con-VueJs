<template>
  <div class="container">
    <!-- Sección de título -->
    <div class="text-center my-5 fade-in">
      <img 
        src="https://vuejs.org/images/logo.png" 
        alt="Vue logo" 
        class="mb-4 animated-logo" 
        width="100" 
      />
      <h1 class="display-4">Gestor de Tareas</h1>
      <p class="lead">Bienvenido a la Aplicación de Tareas con Vue</p>
      <p>Esta aplicación te permite gestionar tus tareas de manera eficiente. Puedes añadir nuevas tareas manualmente o extraerlas desde una API.</p>
    </div>

    <!-- Sección de descripción -->
    <div class="row">
      <div class="col-12 col-md-4 mb-4 slide-up">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Añadir Tarea</h5>
            <p class="card-text">Permite ingresar nuevas tareas manualmente.</p>
            <router-link to="/addtask" class="btn btn-primary bounce-btn">Ir a Añadir Tarea</router-link>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-4 mb-4 slide-up">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Lista de Tareas</h5>
            <p class="card-text">Muestra todas las tareas extraídas desde la API, permitiendo marcarlas como completadas o eliminarlas.</p>
            <router-link to="/tasklist" class="btn btn-primary bounce-btn">Ver Lista de Tareas</router-link>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-4 mb-4 slide-up">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Vista Combinada</h5>
            <p class="card-text">Combina las funcionalidades de añadir tareas manualmente y ver las tareas de la API al mismo tiempo.</p>
            <router-link to="/combined" class="btn btn-primary bounce-btn">Ir a Vista Combinada</router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Sección de Vue Logo -->
    <div class="text-center my-5 fade-in">
      <img src="https://vuejs.org/images/logo.png" alt="Vue logo" class="mb-4 animated-logo" width="100" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
};
</script>

<style scoped>
/* Animación para el logo de Vue */
.animated-logo {
  animation: moveLogo 2s infinite alternate;
}

/* Animación para el fade-in */
.fade-in {
  animation: fadeIn 2s ease-in;
}

/* Animación para las tarjetas (deslizamiento hacia arriba) */
.slide-up {
  animation: slideUp 1s ease-out;
}

/* Animación para los botones (efecto rebote) */
.bounce-btn {
  animation: bounce 0.5s ease-in-out infinite alternate;
}

/* Keyframes para las animaciones */
@keyframes moveLogo {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slideUp {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
}

.container {
  padding-top: 30px;
}

.card {
  border-radius: 10px;
  overflow: hidden;
}

.card-img-top {
  height: 150px;
  object-fit: cover;
}

.card-body {
  text-align: center;
}

h1, p {
  color: #2c3e50;
}

button {
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #ddd;
}
</style>

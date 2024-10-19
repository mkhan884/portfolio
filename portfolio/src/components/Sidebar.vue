<template>
  <aside class="sidebar">
    <button class="toggle-btn" @click="toggleSidebar">
      <font-awesome-icon :icon="isCollapsed ? 'fa-solid fa-arrow-right' : 'fa-solid fa-arrow-left'" />
    </button>
    <nav>
      <h2>DUBAI</h2>
      <ul>
        <li><router-link to="/" active-class="active" @click="toggleSidebarMobile">About</router-link></li>
        <li><router-link to="/Experience" active-class="active" @click="toggleSidebarMobile">Experience</router-link></li>
        <!-- <li><router-link to="/Projects">Projects</router-link></li> -->
      </ul>
    </nav>
    <v-btn variant="tonal" color="white" class="mt-2" href="resume-r.pdf" download>
      <v-icon left>
        <font-awesome-icon icon="fa-solid fa-circle-down" />
      </v-icon>
      <span class="ml-2">Resume</span>
    </v-btn>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    isCollapsed: Boolean
  },
  methods: {
    toggleSidebar() {
      this.$emit('toggleSidebar'); // Emit event to parent component
    },
    toggleSidebarMobile(){
      if(window.innerWidth <= 768){
        this.$emit('toggleSidebar')
      }
    }
  }
};
</script>

<style scoped>
.sidebar {
  height: 100vh;
  background-color: #000;
  padding-left: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.sidebar h2 {
  color: white;
  margin-bottom: 40px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar ul li {
  margin-bottom: 20px;
}

.sidebar ul li a {
  color: #cdcdcd;
  text-decoration: none;
  font-size: 14px;
}

.sidebar ul li a.active {
  color: white; /* Change text color for active link */
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3); /* Add shadow effect */
}

.v-btn {
  width: fit-content;
}

@media (max-width: 768px) {
  .v-btn {
    font-size: 12px; /* Smaller font size for buttons on mobile */
    padding: 8px 12px; /* Adjust padding for buttons to make them smaller */
    height: auto;
    width: fit-content;
  }

  .sidebar ul li a {
    font-size: 16px;
  }

  .toggle-btn {
    position: absolute;
    top: 60px;
    left: 60px;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 24px; /* Adjust size as needed */
    z-index: 10; /* Make sure it appears above other content */
  }
}
</style>

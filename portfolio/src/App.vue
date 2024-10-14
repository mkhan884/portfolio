<template>
  <div id="app">
    <!-- Sidebar -->
    <div v-if="!isSidebarCollapsed" class="sidebar">
      <Sidebar @toggleSidebar="toggleSidebar" />
    </div>

    <!-- Toggle button in content for mobile view -->
    <button
      v-if="isSidebarCollapsed && isMobile"
      class="toggle-btn-mobile"
      @click="toggleSidebar"
    >
      <font-awesome-icon icon="fa-solid fa-bars" />
    </button>

    <!-- Content Area -->
    <div :class="['content', contentClass]">
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';

export default {
  name: "App",
  components: {
    Sidebar,
  },
  data() {
    return {
      isSidebarCollapsed: false, // Controls the sidebar visibility
      isMobile: window.innerWidth <= 768, // Check if screen size is mobile
    };
  },
  computed: {
    contentClass() {
      return this.$route.path === '/experience'
        ? 'experience-positioning' // Custom positioning for /experience route
        : 'home-positioning'; // Custom positioning for / route
    },
  },
  methods: {
    toggleSidebar() {
      this.isSidebarCollapsed = !this.isSidebarCollapsed; // Toggle sidebar state
    },
    handleResize() {
      // Update isMobile based on window width
      this.isMobile = window.innerWidth <= 768;
      if (this.isMobile) {
        this.isSidebarCollapsed = true; // Automatically collapse sidebar on mobile
      }
    }
  },
  mounted() {
    // Initialize the sidebar state on load based on mobile or desktop view
    this.isSidebarCollapsed = window.innerWidth <= 768;
    window.addEventListener('resize', this.handleResize); // Listen to window resizing
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize); // Cleanup listener on destroy
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

#app {
  display: flex;
  height: 100vh; /* Make the app fill the entire viewport height */
  overflow: hidden; /* Prevent scrolling */
  font-family: 'Montserrat', sans-serif;
}

html, body {
  margin: 0;
  padding: 0;
}

.sidebar {
  width: 400px;
}

.content {
  width: 100vw;
  background-color: #111;
}

.home-positioning {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 768px) {
  .sidebar {
    width: 100vw; /* Full width for sidebar on mobile */
    height: 100vh; /* Full height for sidebar */
    position: fixed; /* Fix it in place */
    top: 0; /* Align to top */
    left: 0; /* Align to left */
    z-index: 10; /* Ensure it's above other content */
  }

  .content {
    width: 100vw;
    display: flex; /* Show content when sidebar is collapsed */
  }

  .toggle-btn-mobile {
    position: absolute;
    top: 60px;
    left: 40px;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 24px; /* Adjust size as needed */
    z-index: 10; /* Ensure it appears above content */
  }
}
</style>

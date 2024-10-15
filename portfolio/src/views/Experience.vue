<template>
    <div class="timeline-container">
    <div class="timeline">
      <v-timeline line-color="white" side="end" truncate-line="both">
        <v-timeline-item
          v-for="item in experiences"
        >
          <template v-slot:opposite v-if=!isMobile>
            <span style="color: white; font-style: italic;" class="">{{ item.date }}</span>
          </template>
          <template v-slot:icon>
            <v-avatar :image="item.image" size="40px"></v-avatar>
          </template>
          <v-card class="elevation-2" color="grey-darken-4">
            <v-card-title style="font-size: medium; font-weight: bold;">
              {{ item.title }}
            </v-card-title>
            <v-card-subtitle v-if=isMobile>
              {{ item.date }}
            </v-card-subtitle>
            <v-card-text style="font-size: small;">
              {{ item.description }}
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </div>
  </div>  
</template>

  <script>
  import finastraLogo from '@/assets/f-logo.png'
  import molexLogo from '@/assets/m-logo.png'
  import vmLogo from '@/assets/vm-logo.png'
  export default {
    name: "Experience",
    data(){
      return {
        finastraLogo,
        molexLogo,
        vmLogo,
        experiences: [
          
          {
            date: 'Oct. 2023 - Present',
            title: 'Software Automation Developer',
            image: vmLogo,
            description: 'At Virgin Mobile UAE, I focused on automation testing using Appium and Python, conducting end-to-end tests with Postman, and integrating tests with monitoring tools. I also helped develop regression test suites and implemented processes to continuously update test cases as new features were added.'
          },

          {
            date: 'May 2022 - Dec. 2022',
            title: 'Frontend Developer',
            image: molexLogo,
            description: 'During my time at Molex, I focused on front-end development using Vue.js, optimizing SQL queries to improve performance, and implementing JWT-based authentication for secure access. I also made sure the code was well-tested with Jest and xUnit, helping maintain high code quality.'
          },

          {
            date: 'May 2021 - Dec. 2021',
            title: 'Associate Software Engineer',
            image: finastraLogo,
            description: 'At Finastra, I worked on both the front-end and back-end of a mortgage processing web app. I refactored API calls, integrated TypeScript to improve code quality, and set up secure session management to ensure the app ran smoothly and scaled well.'
          }
          
        ]
      }
    },
    computed: {
      isMobile (){
        if(window.innerWidth > 768){
          return false
        }
        return true
      }
    }
  };
  </script>
  
  <style scoped>
  .timeline {
    width: 90%;
    height: fit-content;
    padding: 60px;
    /* background-color: antiquewhite; */
  }

  @media (max-width: 768px) {
  .timeline-container {
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    padding: 30px;
    font-size: small;
    /* background-color: antiquewhite; */
  }

  .v-card {
    width: 100%;
    height: auto;
  }

  .v-avatar {
    height: 30px !important;
    width: 30px !important;
  }

  .v-card-title {
    font-size: small !important;
  }

  .v-card-subtitle {
    font-size: x-small !important;
  }

  .v-card-text {
    font-size: x-small !important;
  }

  }

  </style>
  
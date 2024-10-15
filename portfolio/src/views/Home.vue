<template>
  <div class="content">
      <div class="blob">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <!-- Define the clip path -->
          <defs>
            <clipPath id="clip">
              <path d="M59.5,-30.7C72.4,-11.8,75.2,16.6,63.6,39.9C52,63.2,26,81.4,0.3,81.2C-25.3,81,-50.7,62.5,-64.7,37.8C-78.7,13.1,-81.3,-17.7,-68.6,-36.4C-56,-55.1,-28,-61.8,-2.4,-60.4C23.2,-59,46.5,-49.6,59.5,-30.7Z" transform="translate(100 100)" />
            </clipPath>
          </defs>
          
          <!-- Blob shape -->
          <path fill="#ffffff" d="M59.5,-30.7C72.4,-11.8,75.2,16.6,63.6,39.9C52,63.2,26,81.4,0.3,81.2C-25.3,81,-50.7,62.5,-64.7,37.8C-78.7,13.1,-81.3,-17.7,-68.6,-36.4C-56,-55.1,-28,-61.8,-2.4,-60.4C23.2,-59,46.5,-49.6,59.5,-30.7Z" transform="translate(100 100)" />

          <!-- Image inside the blob with clipping -->
          <image href="../assets/pfp-modified.jpg" x="0" y="20" width="200" height="200" clip-path="url(#clip)" />
        </svg>
      </div>
    <div class="items">
      <div class="name">
        <h1 >MUHAMMAD KHAN</h1>
        <h4>Software Automation Developer focused on creating reliable software through automation, testing, and development.</h4>
      </div>
      <div class="icons">
        <a href="https://github.com/mkhan884" target="_blank" rel="noopener noreferrer"><font-awesome-icon icon="fa-brands fa-github" /></a>
        <a href="https://linkedin.com/in/mkhan884" target="_blank" rel="noopener noreferrer"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
        <a href="mailto:mkhan884@outlook.com"><font-awesome-icon :icon="['fas', 'envelope']" /></a>
      </div>
    </div>
  </div>
</template> 
  
  <script>
  export default {
    name: "Home",
  };
  </script>
  
  <style scoped>
  
  .content{
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: antiquewhite; */
    height: fit-content;
    width: 800px;
    color: white;
    padding: 10px;
  }

  .blob {
    width: 600px;
    height: fit-content;
    /* background-color: red; */
  }

  .name {
    /* background-color: aqua; */
    width: fit-content;
    height: fit-content;
  }

  .name h1 {
    margin-bottom: 8px;
    font-size: 44px;
  }

  .name h4 {
    margin-top: 0;
    margin-bottom: 24px;
    font-weight: normal;
    font-style: italic;
    font-size: 14px;
    color: #cdcdcd;
    line-height: 24px;
  }

  .items {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* background-color: red; */
  }
  
  .icons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* background-color: aqua; */
    width: 20%;
    height: 2em;
    font-size: 22px;
  }

  .icons a {
    transition: all 0.25s;
    color: inherit;
  }

  .icons a:hover {
    font-size: 30px;
  }

  @media (max-width: 768px){
    .content{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      /* background-color: green; */
      width: 500px;

    }
    
    .blob {
      width: 200px;
      height: fit-content;
      /* background-color: red; */
    }

    .name {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 70vw;
      /* background-color: aqua; */
    }

    .name h1 {
      font-size: x-large;
    }

    .name h4 {
      font-size: small;
      text-align: center !important;
    }

    .icons{
      /* background-color: red; */
      width: 20vw;
    }

    .items{
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .icons a:hover {
      font-size: 22px;
    }

  }

  </style>
  
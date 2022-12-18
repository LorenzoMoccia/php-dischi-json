const { createApp } = Vue

createApp({
  data() {
    return {
      dischi: [],
    }
  },
  created(){
    axios.get('http://localhost/php-dischi-json/api.php').then((res) => {
        this.dischi = res.data;
    });
    
  }
}).mount('#app')
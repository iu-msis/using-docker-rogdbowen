//In class instructions helped with this code

var waitingApp = new Vue({
  el: '#patientWaitingApp',
  data: {
    patients:{

     }
  },
//Using RandomUser.me website
  methods:{
    fetchPatients() {
      fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(json=>{waitingApp.patients=json.results[0]});
    }
  },

  created() {
    this.fetchPatients();
  }

});

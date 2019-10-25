var app = new Vue({
  el: '#app',
  data: {
    addedName: '',
    addedProblem: '',
    tickets: {},
  },
  created() {
    console.log("We have created a vue!");
    this.getTickets();
  },
  methods: {
    async getTickets() {
      try {
        let response = await axios.get("http://cs.creatorof.jsearch.org:3000/api/tickets");
        this.tickets = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async addTicket() {
      try {
        let response = await axios.post("http://cs.creatorof.jsearch.org:3000/api/tickets", {
          name: this.addedName,
          problem: this.addedProblem
        });
        this.addedName = "";
        this.addedProblem = "";
        this.getTickets();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteTicket(ticket) {
      try {
        let response = axios.delete("http://cs.creatorof.jsearch.org:3000/api/tickets/" + ticket.id);
        this.getTickets();
        return true;
      } catch (error) {
        console.log(error);
      }
    }
  }
});
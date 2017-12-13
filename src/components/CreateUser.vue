<template>
  <!-- <div class="col-md-3"></div> -->
  <div>
    <div class="col-md-3 col-sm-3"></div>
    <div class="col-md-6 col-sm-6 col-xs-12">
      <h1 class="text-primary text-center">Sign Up</h1>
      <form v-on:submit.prevent="addUser">
        
        <div class="row">
          <div>
            <div class="form-group">
              <label>User Email:</label>
              <input type="text" class="form-control" v-model="user.email">
            </div>
          </div>
        </div>
        <div class="row">
          <div>
            <div class="form-group">
              <label>User Name:</label>
              <input type="text" class="form-control" v-model="user.name">
            </div>
          </div>
        </div>
        <div class="row">
          <div>
            <div class="form-group">
              <label>Password:</label>
              <input type="Password" class="form-control" v-model="user.pass">
            </div>
          </div>
        </div>
        <div class="row">
          <div>
            <div class="form-group">
              <label>Company:</label>
              <input type="text" class="form-control" v-model="user.company">
            </div>
          </div>
        </div>
        <div class="row">
          <div>
            <div class="form-group">
              <label>Telephone:</label>
              <input type="text" class="form-control" v-model="user.telephone">
            </div>
          </div>
        </div>
        <div class="row">
            <div class="form-group d-flex flex-row">              
              <label class=""><input type="checkbox" class="form-check-input" v-model="user.visit">Official Visit:</label>
              
              <label class=""><input type="checkbox" class="form-check-input" v-model="user.esc">
              Escort Required:</label>
            </div>
        </div>
        <div class="row" v-if=" user.esc == true ">
          <div >
            <div class="form-group">
              <label>Escort Name:</label>
              <input type="text" class="form-control" v-model="user.esc_name">  
            </div>
          </div>
        </div>
        <div class="row">
          <div class="form-group">
            <button class="btn btn-primary">Register</button>
          </div>
        </div>        
      </form>
    </div>
    <div class="col-md-3 col-sm-3"></div>
  </div>
  <!-- <div class="col-md-3"></div> -->
</template>
<script>
  export default {
    data(){
        return{
          user:{
            name: '',
            pass: '',
            email: '',
            telephone: '',
            company: '',
            visit: false,
            esc: false,
            esc_name: ''
          }
        }
    },
    methods: {
      addUser(){
        let uri = 'http://localhost:4000/users/add';        
        this.axios.post(uri, this.user).then((response) => {
          this.$router.push({name: 'CreateUser'})
        });
        this.user = {};
      }
    }
  }
</script>

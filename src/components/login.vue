<template>
  <!-- <div class="col-md-3"></div> -->
  <div>
    <div class="col-md-3 col-sm-3"></div>
    <div class="col-md-6 col-sm-6 col-xs-12">
      <h1 class="text-success text-center">LOG IN</h1>
      <form v-on:submit.prevent="login">        
        <div class="row">
          <div>
            <div class="form-group">
              <label>User Email:</label>
              <input type="text" placeholder="user@edit.com" class="form-control input-sm" v-model="user.email">
            </div>
          </div>
        </div>
        <div class="row">
          <div>
            <div class="form-group">
              <label>Password:</label>
              <input type="password" placeholder="user name" class="form-control input-sm" v-model="user.name">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="form-group">
            <button class="btn btn-primary">Login</button>
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
            email: '',
            pass: ''
          }
        }
    },
    methods: {
      login(){
        let uri = 'http://localhost:4000/users/login';        
        this.axios.post(uri, this.user).then((response) => {
          console.log(response.data.user);
          if (response.data.user) {
            localStorage.reg = true;
            console.log(localStorage.reg);
            this.$router.push({name: 'DisplayUser'});           
          }
          else{
            alert("Wrong login infomation!");
          }
        });
      }
    }
  }
</script>

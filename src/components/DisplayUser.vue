<template>
    <div>
        <h1 class="text-primary text-center">Users</h1>
        
        <table class="table table-hover col-md-10">
            <thead>
            <tr>
                <td>User Name</td>
                <td>User Email</td>
                <td>User Phone_number</td>
                <td>Company Name</td>
                <td>Official Visit</td>
                <td>Escort Name</td>
                <!-- <td>Actions</td> -->
            </tr>
            </thead>

            <tbody>
                <tr v-for="user in users">
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.telephone }}</td>
                    <td>{{ user.company }}</td>
                    <td>{{ user.visit }}</td>
                    <td>{{ user.esc_name }}</td>
                    <!-- <td><router-link :to="{name: 'EditUser', params: { id: user._id }}" class="btn btn-primary">Edit</router-link></td>
                    <td><button class="btn btn-danger" v-on:click="deleteItem(user._id)">Delete</button></td> -->
                </tr>
            </tbody>
        </table>
        <button class="btn btn-danger" v-on:click="logout()">Logout</button>
    </div>
</template>

<script>
    
    export default {
        data(){
            return{
                users: []
            }
        },

        created: function()
        {
            this.fetchItems();
        },

        methods: {
            fetchItems()
            {
                if(localStorage.reg){
                    let uri = 'http://localhost:4000/users';
                    this.axios.get(uri).then((response) => {
                        this.users = response.data;
                    });
                }
                else{
                    this.$router.push({name: 'login'})
                }
                
            },

            logout()
            {
              localStorage.clear();
              this.$router.push({name: 'login'})
            }
        }
    }
</script>

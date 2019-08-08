<template>
    <div>
        <h1>User File..111</h1>
        <br>
        <button @click="getUsers()" class="button">Get Users</button>
        <!-- <pre>{{ users }}  </pre> -->
        
        <table class="table">
            <tr v-for="each in users" :key="each.id">
                <td><RouterLink :to="'/user/'+each.id">{{ each.name }}</RouterLink></td>
                <td>{{ each.username }}</td>
                <td>{{ each.website }}</td>
            </tr>
        </table>

        
    </div>
</template>

<script>
import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/users'

export default {
    data(){
        return {
            users: []
        }
    },
    methods: {
        getUsers(){
            axios.get(url).then(res => {
            console.log(res.data)
            this.users = res.data
            })
        }
    }
}
</script>
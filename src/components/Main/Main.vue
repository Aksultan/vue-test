<template>
  <section class="container mx-auto">
    <div class="shadow w-64 flex flex-wrap justify-between bg-blue-100 min-w-max p-10 gap-3.5 mx-auto">
      <div
        v-for="name of names"
        :key="name"
        class="font-sans"
      >
        <label
          :for="name"
          class="mr-3"
        >{{ `${name}` }}</label>
        <input
          :id="name"
          type="checkbox"
          @change="filterTodos($event)"
        >
      </div>
    </div>
    <div class="flex justify-center flex-col">
      <div
        v-for="todo of todos"
        :key="todo.id"
        class="relative bg-blue-600 mt-14 p-10 rounded-xl max-w-md mx-auto shadow-2xl"
      >
        <router-link :to="'/about/'+todo.id">
          awdawd
        </router-link>
        <h3
          href="#"
          class="text-cyan-400 font-medium"
        >
          {{ todo.userId }}
        </h3>
        <p class="text-white">
          {{ todo.title }}
        </p>
        <span class="absolute top-1 right-2 text-gray-300 font-bold">#{{ todo.id }}</span>
        <!-- </router-link> -->
      </div>
    </div>
  </section>
</template> 

<script>
// import { mapActions } from 'vuex'
export default {
  name: 'Main',
  data:function() {
    return {
      filter_ids: []
    };
  },
  computed: {
    todos(){
      let todos_array = this.$store.state.todos
      if (this.filter_ids.length) {
        todos_array.filter(el => this.filter_ids.includes(el.userId))
        todos_array = todos_array.filter(el => this.filter_ids.includes(el.userId))
      }
      return todos_array
    },
    names(){
      return new Set(this.$store.state.todos.map(x => x.userId))
    }
  },
  mounted(){
    this.$store.dispatch('fetch_todos')
  },
  methods: {
    filterTodos(e){
      if (!this.filter_ids.includes(+e.target.id)) {
        this.filter_ids.push(+e.target.id)
      } else {
        this.filter_ids.splice(this.filter_ids.indexOf(+e.target.id), 1)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

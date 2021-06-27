<template>
  <section class="container mx-auto">
    <div
      class="relative bg-blue-600 mt-14 p-10 rounded-xl max-w-md mx-auto shadow-2xl"
    >
      <h3
        href="#"
        class="text-cyan-400 font-medium"
      >
        {{ todo[0].userId }}
      </h3>
      <p class="text-white">
        {{ todo[0].title }}
      </p>
      <span class="absolute top-1 right-2 text-gray-300 font-bold">#{{ todo[0].id }}</span>
      <hr>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'About',
  data:function() {
return {
    todo_id: this.$route.params.todo_id
  };
},
  computed: {
      todo(){
          return this.$store.state.todo
      }
  },
  mounted(){
      console.log(this.todo_id)
      this.fetch_todo(this.todo_id)
  },
   methods:{
       ...mapActions(['fetch_todo'])
   }
}
</script>

<style>

</style>

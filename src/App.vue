<template lang='pug'>
  section.mt6.mw5.center.w-100
    h1.tc.f3.fw7.ttu.tracked Todos
    hr.bt.b--moon-gray
    div.mb5
      template(v-for='(todo, i) in this.notArchived')
        //- TODO:
        ToDo(:info="todo")
      input.w-100.pv2.br2.b--1(@keyup.enter="add()" v-model="input")
    template(v-if='this.archived.length')
      h1.tc.f5.fw5.ttu.tracked Archived Todos
      hr.bt.b--moon-gray
      div.mb5
        template(v-for='(todo, i) in this.archived')
          ToDo(:info="todo")
</template>

<script>
import {mapState, mapMutations, mapGetters} from 'vuex'
import ToDo from './ToDo'
export default {
  components: {ToDo},
  data: () => ({
    input : ''
  }),
  computed: {
    ...mapState(['todos']),
    ...mapGetters(['archived','notArchived'])
  },
  methods: {
    ...mapMutations(['addToDo']),
    add(){
    // if(!this.input.length) return;
    this.addToDo({
      id: this.getRandomInt(10000),
      complete:false,
      title: this.input
    })
    this.input = '';
    },
    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
  }
}
</script>

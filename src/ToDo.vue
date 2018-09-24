<template lang='pug'>
  div.flex.relative.items-center.br2.di.pv2.mb2.shadow-1(:class="{'bg-black-10':info.complete}")
    div.flex.items-center.w-80(@click="updateThis()")
      input.w-20.pa0.ma0.f6.pointer(type="checkbox" :checked="info.complete")
      span.w-80.f4.relative(:class="{'complete':info.complete}") {{info.title}}
    button.ml-auto.mr-auto.f6.bg-transparent.b--none(@click="remove()") X
</template>
ml-auto w-20 f6 bg-white b--none
<script>
import {mapState, mapMutations} from 'vuex'

export default {
  components: {},
  props:['info'],
  methods:{
    ...mapMutations(['updateToDo','removeToDo']),
    updateThis(){
      console.log('fired')
     this.updateToDo(
        {
          id: this.info.id,
          complete: !this.info.complete
        }
        )
    },
    remove(){
      console.log('fired remove')
      if(this.info.status){
       this.removeToDo({id:this.info.id})
     }else{
      this.updateToDo({
        id: this.info.id,
        status: 'archived'
      })
    }
  }
  }
}
</script>
<style>
.complete:after {
  position: absolute;
  left: 0;
  top: 50%;
  height: 1px;
  background: black;
  content: "";
  width: 100%;
  display: block;
}  
</style>
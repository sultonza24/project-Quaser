<template>
  <!-- list inbox -->
  <q-page class="bg-grey-3 column">
    <div class="row q-pa-sm bg-secondary">
      <q-input class="col" v-model="newTask" @keyup.enter="addTask" square filled bg-color="white" bottom-slots placeholder="Add task" dense>
         
        <template id="d2" v-slot:append>
          <q-btn  @click="addTask" round dense flat icon="add" />
        </template>
      </q-input>
    </div>
    <q-list 
      class="bg-white"
      separator
      bordered
      >
      <q-item 
        v-for="(task, index) in tasks"
        :key="task.title"
        @click="task.done =!task.done"
        :class="{ 'done bg-blue-1' : task.done}"
        clickable
        v-ripple>
          <q-item-section avatar>
            <q-checkbox v-model="task.done" class="no-pointer-events" color="green"></q-checkbox>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ task.title }}</q-item-label>
          </q-item-section>
          <q-item-section
            v-if="task.done"
            side
          >
            <q-btn @click.stop="deleteTask(index)" flat dense round color="red" icon="delete" />
          </q-item-section>
      </q-item>
    </q-list>
    <div 
      v-if="!tasks.length"
      class="no-tasks absolute-center">
      <q-icon
      name="check"
      size="100px"
      color="pink" />
      <div class="text-h5 text-primary text-center " >
        ไม่มีข้อมูล
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default{
  data(){
    return{
      newTask: '',
      tasks:[
        // {
        //   title: 'get banana',
        //   done: false
        // },
        // {
        //   title: 'eat banana',
        //   done: false
        // },
        // {
        //   title: 'drink banana',
        //   done: false
        // }
      ]
    }
  },
  methods:{
    deleteTask(index){
      this.$q.dialog({
        title: 'Confirm',
        message: 'Really delete',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.tasks.splice(index, 1)
        this.$q.notify('Message')
      })
    },
    addTask(){
      console.log('addTask')
      this.tasks.push({
        title: this.newTask,
        done: false
      })
      this.newTask = ''
    }
  }
}
</script>

<style lang="scss">
  .done{
    .q-item__label{
      text-decoration: line-through;
      color: grey;
    }
  }
  .no-tasks{
    opacity: 0.5;
  }
</style>

<template>
<div>
  <Navbar title="Ming Labs" />
  <b-container fluid class="bv-example-row">
    <b-row>
      <b-col class="sideClass">
        <div>
          <b-button pill variant="info" class="buttonAligner" v-on:click="createNewTask">Open New Task</b-button>
          <hr role="separator" aria-orientation="horizontal" class="dropdown-divider">
          <b-form-group>
            <h4> Open Tasks </h4>
            <b-row>
              <div v-for="item in activeTasks" class="d-flex taskItem" v-on:click="switchDetail( item.value )" v-bind:key="item.value">
                <div class="checkbox" v-on:click="switchCheck( item.value )"></div>
                <p> {{item.title}} </p>
              </div>
            </b-row>
          </b-form-group>
          <hr role="separator" aria-orientation="horizontal" class="dropdown-divider">
          <b-form-group>
            <h4> Finished Tasks </h4>
            <b-row>
              <div v-for="item in closedTasks" class="d-flex taskItem" v-on:click="switchDetail( item.value )" v-bind:key="item.value">
                <div class="checkbox checked" v-on:click="switchCheck( item.value )">
                  <span>&#10003;</span>
                </div>
                <p> {{item.title}} </p>
              </div>
            </b-row>
          </b-form-group>
        </div>
      </b-col>
      <b-col cols="9">
        <TaskDetails :data="selectedTaskDetails" :saveData="saveData" :deletePerma="deletePerma" />
      </b-col>
    </b-row>
  </b-container>
</div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import TaskDetails from './components/TaskDetails.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    TaskDetails
  },
  data() {
    return {
      selected: [], // Selected items
      options: [{
          title: 'Very important task',
          value: 1,
          details: 'Important details',
          date: '2019-06-19',
          isDone: false
        },
        {
          title: 'BBB',
          value: 2,
          details: 'Important details 2',
          date: '2019-06-18',
          isDone: true
        },
        {
          title: 'Not so important task',
          value: 3,
          details: 'Important details 2',
          date: '2019-06-20',
          isDone: false
        }
      ],
      showDetails: 1,
    }
  },
  methods: {
    deletePerma(id) {
      for (var i = 0; i < this.options.length; i++) {
        if (this.options[i].value == id) {
          this.options.splice(i, 1);
          break;
        }
      }
      this.switchDetail(this.options[0].value);
    },
    switchDetail(id) {
      this.showDetails = id;
    },
    createNewTask() {
      let id = this.options.length + 1;
      let newTask = {
        title: 'Template Title',
        value: id,
        details: '',
        date: '',
        isDone: false
      };
      this.options.push(newTask);
      this.switchDetail(id);
    },
    saveData( data ) {
      for (var i = 0; i < this.options.length; i++) {
        if (this.options[i].value == data.value) {
          this.options[i] = data;
          break;
        }
      }
    },
    switchCheck(id) {
      for (var i = 0; i < this.options.length; i++) {
        if (this.options[i].value == id) {
          console.log(this.options[i].title);
          this.options[i].isDone = !this.options[i].isDone;
          console.log("NOW ", this.options);
          break;
        }
      }
    }
  },
  computed: {
    activeTasks: function() {
      return this.options.filter(function(elem) {
        return !elem.isDone;
      })
    },
    closedTasks: function() {
      return this.options.filter(function(elem) {
        return elem.isDone;
      })
    },
    selectedTaskDetails: function() {
      for (var i = 0; i < this.options.length; i++) {
        if (this.options[i].value === this.showDetails) {
          return this.options[i];
        }
      }
      return null;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.sideClass {
  height: 700px;
  background: white;
  color: black;
  box-shadow: 1px 0px 20px 0px #61616136;
}

.taskItem {
  width: 100%;
  padding-top: 10px;
  padding-left: 10px;
}

.taskItem:hover {
  cursor: pointer;
  background: #f8f3f3;
}

.openTasksRow {
  margin-left: 2% !important;
}

.checkbox {
  background-color: #f8f3f3;
  border-radius: 3px;
  color: white;
  height: 24px;
  border-color: #e6e6e6;
  border-width: 1px;
  border-style: solid;
  width: 24px;
  font-size: 15px;
  padding-left: 5px;
  margin-right: 5px;
  margin-top: 2px;
}

.checkbox.checked {
  background-color: #76d3da;
  border-color: #76d3da;
  border-radius: 3px;
}

.btn-info {
  color: #fff;
  background-color: #76d3da;
  border-color: #76d3da;
}

.btn-info:hover {
  background-color: #4ca5ab !important;
  border-color: #4ca5ab !important;
}

.saveTaskButton {
  background-color: #3d5387 !important;
  border-color: #3d5387 !important;
  background: #3d5387 !important;
}

.buttonAligner {
  margin-left: 25%;
  margin-top: 10px;
  margin-bottom: 10px;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #c60835;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

@media only screen and (max-width: 600px) {
  .sideClass {
    height: auto;
  }

  .mainCard {
        width: 130%;
  }

  .titleFixer {
    margin-left: 20%;
  }

  .buttonAligner {
    margin-left: 33%;
  }
}

</style>

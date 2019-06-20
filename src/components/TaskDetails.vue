<template>
<div>
  <h1 class="titleFixer">Details </h1>
  <div class="mainCard">
    <b-modal v-model="modalShow" @ok="onDelete" header-bg-variant="danger" headerTextVariant="light" okTitle="Yes" cancelTitle="Cancel" okVariant='danger' title="Delete Task">Are you sure? You cannot undo this!</b-modal>
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group id="input-group-2" label="Task Title:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.title" required placeholder="Enter task title"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Task Details:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.details" required placeholder="Enter task details"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Task Date:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.date" type="date" required placeholder="Enter task date"></b-form-input>
      </b-form-group>
      <div class="buttonGroup">
        <b-row align-h="around">
          <b-col cols="4">
            <b-button @click="modalShow = !modalShow"  variant="danger">Delete Task</b-button>
          </b-col>
        </b-row>
      </div>
    </b-form>
  </div>
</div>
</template>

<script>
export default {
  name: 'TaskDetails',
  data() {
    return {
      modalShow: false,
      form: {
        title: '',
        value: 1,
        details: '',
        date: ''
      },
      show: true
    }
  },
  props: {
    deletePerma: {
      type: Function
    },
    saveData: {
      type: Function
    },
    data: {
      type: Object
    }
  },
  mounted() {
    console.log(this.data);
    this.form = this.data;
  },
  watch: {
    data: function(newVal, oldVal) { // watch it
      console.log('Prop changed: ', oldVal);
      if (newVal !== oldVal) {
      this.data = newVal;
      this.form = this.data;
    }
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      this.saveData(this.form);
      //alert(JSON.stringify(this.form))
    },
    onDelete(evt) {
      evt.preventDefault();
      this.modalShow = false;
      // Call prop function to delete it
      console.log("Deleting");
      this.deletePerma(this.form.value);
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainCard {
  margin-top: 2%;
  padding: 50px;
}
.titleFixer {
  margin-left: 43%;
  margin-top: 10px;
}
.buttonGroup {
  margin-left: 15%;
}
</style>

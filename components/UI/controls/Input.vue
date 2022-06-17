<template>
  <div class="control">
    <label :for="forName"><slot/></label>
    <input
      v-bind="$attrs"
      :value="value"
      :type="type"
      :name="forName"
      :required="required"
      @input="$emit('input', $event.target.value)">
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    forName: {
      type: String
    },
    required: {
      type: Boolean,
      default: true
    }
  }
}
</script>

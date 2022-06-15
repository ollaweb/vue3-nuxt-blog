<template>
  <div class="control">
    <label :for="forName"><slot/></label>
    <textarea
      :value="value"
      :name="forName"
      @input="$emit('input', $event.target.value)">
    </textarea>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    forName: {
      type: String
    }
  }
}
</script>

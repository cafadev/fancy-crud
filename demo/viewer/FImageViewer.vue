<template>
  <f-form :form="form" />

  <div class="p-10 mt-10 border">
    {{ form.fields.image.modelValue }}
  </div>
</template>

<script lang='ts' setup>
import { useForm } from '@/composables'

const form = useForm({
  id: 'image-field',
  fields: {
    image: {
      label: 'Image',
      type: 'image',
    },
  },
  settings: {
    url: 'artists/',
  },
})
</script>

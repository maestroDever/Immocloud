<template>
  <div class="tags">
    <tag
      v-for="(tag, index) in tags"
      :key="index"
      :title="tag.title"
      :popover="tag.popover"
      ref="tags"
      @selectTag="selectTag(index)"
    />
    <!-- <tag
      title="asdf"
      id="tag"
      @click="onClick"
    />
    <b-popover
      ref="popover"
      target="tag"
    >
      Hello world
    </b-popover> -->
  </div>
</template>

<script>
import Tag from './Tag'

export default {
  name: 'Tags',
  components: { Tag },
  data () {
    return {
      tags: [
        { title: 'Alle Empfehlugnen', popover: 'Filtermoglichkeiten' },
        { title: 'Mieteinnahmen', popover: 'Filtermoglichkeiten' },
        { title: 'Nachirchten', popover: 'Filtermoglichkeiten' },
        { title: 'Objekte', popover: 'Filtermoglichkeiten' }
      ]
    }
  },
  methods: {
    onClick () {
      this.$refs.popover.$emit('open')
    },
    selectTag (id) {
      this.$refs.tags[id].setActive()
      this.$refs.tags.forEach((node, index) => {
        if (id !== index) this.$refs.tags[index].setInactive()
      })
    }
  }
}
</script>

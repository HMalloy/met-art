<template>
  <img class="art-tip img-fluid rounded-circle" src="${this.primaryImage}" alt="${this.title}" title="${this.title}" @click="toggleBorder()" :class="{ active: isBordered }"/>
</template>

<script>
import { imageMixin } from '../mixins/imageBorderMixin.js';
export default {
  name: 'ArtPiece',
  mixins: [imageMixin],
  props: {
    medium: {
      type:String,
      default:"Medium unknown"
    },
    artistDisplayName: {
      type:String,
      default:"Artist unknown"
    },
    primaryImage: {
      type:String,
      default:"No image available"
    },
    objectDate: {
      type:String,
      default:"Date unknown"
    },
    title: {
      type:String,
      default:"Title unknown"
    }
  }

}
</script>

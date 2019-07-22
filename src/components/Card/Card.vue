<template>
  <b-card
    class="m-2"
  >
    <b-card-text>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit rerum veritatis quas quod dolorum?
    </b-card-text>
    <div slot="header">
      <span class="header-text">
        <font-awesome-icon icon="landmark" />
        header text
      </span>
      <span class="icon icon-right">
        <font-awesome-icon icon="ellipsis-v" />
      </span>
    </div>
    <div slot="footer">
      <div class="text-center">
        <span class="text-muted">
          <a href="#">
            footer text
            <font-awesome-icon icon="chevron-right" />
          </a>
        </span>
      </div>
    </div>
  </b-card>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLandmark, faEllipsisV, faChevronRight } from '@fortawesome/free-solid-svg-icons'

library.add(faLandmark, faEllipsisV, faChevronRight)

export default {
  name: 'Card'
}
</script>

<style src="./Card.scss" lang="scss" scoped>

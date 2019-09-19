<template lang="pug">
  .columns
    .column.is-8.is-offset-2
      a.button.is-light.is-loading(v-show="isLoading")
      article.p-blog-article(v-for="entry in sortedEntries")
        div.p-blog-article__head
          div.c-blog-article__title
            | {{ entry.title }}
          div.p-blog-article__info
            div.c-blog-article__date
              | {{ entry.date | YYYY.MM.DD }}
            div.c-blog-article__name
              | {{ author.name }}
        div.c-blog-article__text(v-html="entry.body")
        Adsense(data-ad-client="ca-pub-6267609390272538" data-ad-slot="8256600097")
</template>

<script>
  import Adsense from 'vue-google-adsense/dist/Adsense.min.js'
  Vue.use(require('vue-script2'))
  Vue.use(Adsense)

  export default {
    name: 'Entry',
    props: {
      author: {
        type: Object,
      },
      entries: {
        type: Array,
      },
      sort: {
        type: String,
        default: 'date',
      },
      order: {
        type: String,
        default: 'asc',
      },
      sortEntries: {
        type: Function,
      },
      isLoading: {
        type: Boolean,
      },
    },
    computed: {
      sortedEntries () {
        return this.sortEntries(this.sort, this.order)
      },
    },
  }
</script>

<style lang="sass" scoped>
  @import "src/stylesheets/variables"

  .is-loading
    width: 100%

  article.p-blog-article
    border-bottom: 1px solid #e7e7e7
    padding: 0 0 60px 0
    margin-bottom: 48px

    .c-blog-article__title
      color: #464646
      font-size: 30px
      margin-bottom: 20px

    .p-blog-article__info
      margin-bottom: 50px

      .c-blog-article__date
        color: #738c8c
        font-size: 14px
        margin-right: 10px
        display: inline-block

      .c-blog-article__name
        background-color: #f1f4f4
        border-radius: 4px
        padding: 3px 0.8rem
        line-height: 1.1
        color: #738c8c
        display: inline-block

    .c-blog-article__text
      padding-bottom: 40px
</style>

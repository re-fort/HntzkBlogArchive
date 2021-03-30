<template lang="pug">
  .columns
    .column.is-8.is-offset-2
      a.button.is-light.is-loading(v-show="isLoading")
      article.p-blog-article(v-for="entry in selectedEntries")
        div.p-blog-article__head
          div.c-blog-article__title
            | {{ entry.title }}
          div.p-blog-article__info
            div.c-blog-article__date
              | {{ entry.date | YYYY.MM.DD }}
            div.c-blog-article__name
              | {{ author.name }}
        div.c-blog-article__text(v-html="entry.body")
        div.footer-wrapper
          div.twitter-share-button-wrapper
            a.twitter-share-button(href="https://twitter.com/share?ref_src=twsrc%5Etfw", :data-text="entry.title", :data-url="'https://re-fort.net/HntzkBlogArchive/#/blog/'+author.link+'/'+date+'/'+entry.id", data-size="large" data-show-count="false")
              | ツイート
        Adsense(data-ad-client="ca-pub-6267609390272538" data-ad-slot="8256600097")
</template>

<script>
  import Adsense from 'vue-google-adsense/dist/Adsense.min.js'
  Vue.use(require('vue-script2'))
  Vue.use(Adsense)

  export default {
    name: 'EntryDetail',
    props: {
      author: {
        type: Object,
      },
      entries: {
        type: Array,
      },
      id: {
        type: String,
      },
      date: {
        type: String,
      },
      isLoading: {
        type: Boolean,
      },
    },
    updated () {
      if (window.twttr) {
        window.twttr.widgets.load();
      }
    },
    computed: {
      selectedEntries () {
        const entry = this.entries.filter(entry => this.id === entry.id);
        return entry
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

  .footer-wrapper
    display: flex
    justify-content: flex-start
    margin-bottom: 2rem
</style>

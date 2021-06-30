import Product from '../Product.vue'
import Filter from '../Filter.vue'
import { mapGetters, mapActions } from 'vuex'

const initialParam = {
  count: 1,
  limit: 10,
  skip: 0
}
export default {
  name: 'ListPage',
  components: { Product, Filter },
  data () {
    return {
      skip: 0
    }
  },
  computed: {
    ...mapGetters('search', ['fetchData', 'products'])
  },
  mounted () {
    this.getData({ ...initialParam, ...this.$route.query })
    this.initialize()
  },
  watch: {
    '$route.query': {
      immediate: true,
      handler (to, from) {
        this.getData({ ...this.$route.query, ...initialParam })
      }
    }
  },
  methods: {
    ...mapActions('search', ['getProducts']),
    getData (query) {
      query = this.updateQuery(query)
      this.getProducts({
        data: { ...query },
        success: res => {
          console.log(res)
        },
        fail: res => {
          console.log(res)
        }
      })
    },
    updateQuery (query) {
      const filter = {}
      if (query.Model) filter.Model = query.Model
      if (query.Make) filter.Make = query.Make
      if (query.Year) {
        filter.Year = parseInt(query.Year)
        query.keys = 'Year'
      }

      if (Object.keys(filter).length > 0) {
        query.where = JSON.stringify(filter)
      }
      delete query.Make
      delete query.Model
      delete query.Year
      return query
    },
    initialize () {
      window.onscroll = () => {
        const bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight
        if (bottomOfWindow) {
          this.skip++
          this.getData({ ...this.$route.query, ...initialParam, skip: this.skip })
        }
      }
    }
  }
}

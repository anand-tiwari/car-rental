import { mapGetters, mapActions } from 'vuex'

const initialParam = {
  count: 1,
  limit: 1,
  skip: 0
}

export default {
  name: 'DetailPage',
  mounted () {
    this.getDetails({ ...this.$route.query, ...initialParam })
  },
  computed: {
    ...mapGetters('search', ['productDetails'])
  },
  methods: {
    ...mapActions('search', ['getProductDetails']),
    getDetails (query) {
      query = this.updateQuery(query)
      this.getProductDetails({
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
      if (query.Year) filter.Year = query.Year

      if (Object.keys(filter).length > 0) {
        query.where = JSON.stringify(filter)
      }
      delete query.Make
      delete query.Model
      delete query.Year
      return query
    }
  }
}

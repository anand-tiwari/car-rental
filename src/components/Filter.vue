<template>
    <div class="filter">
        Filter by Model:
        <select v-model="model" @change="submit">
            <option value="">Please select one</option>
            <option :value="m" :key="m" v-for="m in modelList">{{m}}</option>
        </select>
        Filter by Year:
        <select v-model="year" @change="submit">
            <option value="">Please select one</option>
            <option :value="m" :key="m" v-for="m in yearList">{{m}}</option>
        </select>
        Filter by Maker: <input v-model="make" @keyup.enter="submit" />
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Filter',
  data () {
    return {
      make: '',
      model: '',
      year: ''
    }
  },
  mounted () {
    this.make = this.$route.query.Make || ''
    this.model = this.$route.query.Model || ''
    this.year = this.$route.query.Year || ''
  },
  computed: {
    ...mapGetters('search', ['modelList', 'yearList'])
  },
  methods: {
    updateRoute (data) {
      this.$router.push({
        query: {
          ...data
        }
      })
    },
    submit () {
      const query = { ...this.$router.params, Make: this.make, Model: this.model, Year: this.year }
      if (!query.Model) delete query.Model
      if (!query.Make) delete query.Make
      if (!query.Year) delete query.Year
      this.updateRoute(query)
    }
  }
}
</script>
<style scoped>
    .filter {
      padding: 20px;
    }
</style>

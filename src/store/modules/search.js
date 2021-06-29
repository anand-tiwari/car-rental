import searchApi from '@src/api/search'

const state = {
  fetchModel: [
    'Malibu',
    'Corvette',
    'RLX',
    'Pacifica',
    'X3',
    'TLX',
    'Q5',
    'Q3',
    'A7'
  ],
  yearList: [
    '2020',
    '2019',
    '2018',
    '2017',
    '2016',
    '2015',
    '2014',
    '2013',
    '2012'
  ],
  products: [],
  productDetails: {}
}

const mutations = {
  setProducts: (state, data) => {
    state.products = data
  },
  setProductDetails: (state, data) => {
    state.productDetails = data
  }
}

const actions = {
  getProducts ({ commit }, { data, success, fail }) {
    searchApi.getCatalogProducts(
      response => {
        if (data.skip > 0) {
          const olderData = state.products || []
          commit('setProducts', olderData.concat(response.data.results))
        } else {
          commit('setProducts', response.data.results)
        }
      },
      data,
      response => {
        console.log('error' + JSON.stringify(response))
      },
      {
        'X-Parse-Application-Id': 'Jpx5VQ2RqZtXzgFPGIK6inV2vmbmfy49uxy9f6KG', // This is your app's application id
        'X-Parse-REST-API-Key': 'voynfxZWYcRkyneDvo0k9wqFOPS3LBlX8eq6vv1w' // This is your app's REST API key
      }
    )
  },
  getProductDetails ({ commit, state }, { data, success, fail }) {
    searchApi.getCatalogProducts(
      response => {
        commit('setProductDetails', response.data.results[0])
      },
      data,
      response => {
        console.log('error' + JSON.stringify(response))
      },
      {
        'X-Parse-Application-Id': 'Jpx5VQ2RqZtXzgFPGIK6inV2vmbmfy49uxy9f6KG', // This is your app's application id
        'X-Parse-REST-API-Key': 'voynfxZWYcRkyneDvo0k9wqFOPS3LBlX8eq6vv1w' // This is your app's REST API key
      }
    )
  }
}

const getters = {
  modelList: state => state.fetchModel,
  yearList: state => state.yearList,
  products: state => state.products,
  productDetails: state => state.productDetails
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

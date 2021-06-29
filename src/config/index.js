module.exports = {
  api: {
    base_path: '',
    product: '/classes/Carmodels_Car_Model_List'
  },
  getApiPath: function (apiPath) {
    return this.api.base_path + apiPath
  }
}

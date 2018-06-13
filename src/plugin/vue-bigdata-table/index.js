import bigdataTable from './vue-bigdata-table.vue';
const install = (Vue, opts = {}) => {
  Vue.component('bigdataTable', bigdataTable);
};
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export default Object.assign(bigdataTable, {install});

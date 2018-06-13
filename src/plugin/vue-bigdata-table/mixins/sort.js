import { sortArr, sortDesArr } from '../util';
export default {
	data () {
		return {
			sortedByColIndex: -1,
			sortedType: ''
		};
	},
	methods: {
		showSortBtn (colIndex) {
			const sortable = this.sortable ? true : this.sortIndex !== undefined;
			return (sortable && !(this.showIndex && colIndex === 0) && (typeof this.sortIndex === 'number' ? colIndex <= this.sortIndex : this.sortIndex.indexOf(colIndex) >= 0)) || this.columnsHandled[colIndex].sortable;
		},
		handleSort (colIndex, sortType) {
			this.sortedByColIndex = colIndex;
			this.sortedType = sortType;
			let valueArr = [...this.value];
			colIndex = this.showIndex ? colIndex - 1 : colIndex;
			if (sortType === 'up') {
				sortArr(valueArr, colIndex);
			} else {
				sortDesArr(valueArr, colIndex);
			}
			this.insideTableData = [...valueArr];
		},
		handleCancelSort () {
			this.sortedByColIndex = -1;
			this.sortedType = '';
			this.insideTableData = [...this.value];
		},
		initSort () {
			if (this.defaultSort) {
				const colIndex = parseInt(Object.keys(this.defaultSort)[0]);
				if (!(colIndex || colIndex === 0)) return;
				const sortType = this.defaultSort[colIndex];
				this.handleSort(colIndex, sortType);
			}
		}
	}
};

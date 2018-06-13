import ItemTable from '../components/item-table.vue';
import { iteratorByTimes, getHeaderWords } from '../util';
export default {
	data () {
		return {
			times0: 0, // 当前是第几轮
			times1: 0,
			times2: -1,
			table1Data: [],
			table2Data: [],
			table3Data: [],
			currentIndex: 0, // 当前展示的表格是第几个
			itemNum: 0, // 一块数据显示的数据条数
			timer: null,
			scrollLeft: 0,
			insideTableData: [],
			initTableData: [] // 初始表格数据，用于恢复搜索和筛选
		};
	},
	computed: {
		cellNum () { // 表格列数
			return this.columnsHandled.length;
		},
		columnsHandled () {
			let columns = [...this.columns];
			if (this.colNum > this.columns.length) {
				let colLength = this.colNum - this.columns.length;
				let headerWordsArr = getHeaderWords(colLength);
				iteratorByTimes(colLength, (i) => {
					columns.push({
						title: headerWordsArr[i]
					});
				});
			}
			if (this.showIndex) {
				columns.unshift({
					title: 'No',
					align: 'center',
					width: this.indexWidthInside
				});
			}
			return columns;
		}
	},
  watch: {
    scrollTop (top) {
      this.currentIndex = parseInt((top % (this.moduleHeight * 3)) / this.moduleHeight);
      this.$nextTick(() => {
				this.setTopPlace();
			});
    }
  },
	methods: {
		getComputedTableDataIndex (colIndex) {
			return this.showIndex ? (colIndex - 1) : colIndex;
		},
		handleScroll (e) {
			const ele = e.srcElement || e.target;
			const { scrollTop, scrollLeft } = ele;
			this.scrollLeft = scrollLeft;
			this.scrollTop = scrollTop;
		},
		setTableData () {
			const count1 = this.times0 * this.itemNum * 3;
			this.table1Data = this.insideTableData.slice(count1, count1 + this.itemNum);
			const count2 = this.times1 * this.itemNum * 3;
			this.table2Data = this.insideTableData.slice(count2 + this.itemNum, count2 + this.itemNum * 2);
			const count3 = this.times2 * this.itemNum * 3;
			this.table3Data = this.insideTableData.slice(count3 + this.itemNum * 2, count3 + this.itemNum * 3);
		},
		getTables (h) {
			let table1 = this.getItemTable(h, this.table1Data, 1);
			let table2 = this.getItemTable(h, this.table2Data, 2);
			let table3 = this.getItemTable(h, this.table3Data, 3);
			if (this.currentIndex === 0) return [table1, table2, table3];
			else if (this.currentIndex === 1) return [table2, table3, table1];
      else return [table3, table1, table2];
		},
		renderTable (h) {
			return h('div', {
				style: this.tableWidthStyles
			}, this.getTables(h));
		},
		getItemTable (h, data, index) {
			return h(ItemTable, {
				props: {
					times: this['times' + (index - 1)],
					tableIndex: index,
					itemData: data,
					itemNum: this.itemNum,
					rowStyles: this.rowStyles,
					widthArr: this.colWidthArr,
					columns: this.columnsHandled,
					showIndex: this.showIndex,
					indexRender: this.indexRender,
					stripe: this.stripe,
					fixedCol: this.fixedCol,
					currentScrollToRowIndex: this.currentScrollToRowIndex,
					canEdit: this.canEdit,
					edittingTd: this.edittingTd,
					startEditType: this.startEditType,
					showFixedBoxShadow: this.showFixedBoxShadow,
					editCellRender: this.editCellRender,
					beforeSave: this.beforeSave,
					canSelectText: this.canSelectText,
					startSelect: this.startSelect,
					endSelect: this.endSelect,
					disabledHover: this.disabledHover
				},
				on: {
					'on-click-tr': (index) => {
						this.$emit('on-click-tr', index);
					},
					'on-click-td': (params) => {
						this.$emit('on-click-td', params);
					},
					'on-edit-cell': (row, col) => {
						this.edittingTd = `${row}-${col}`;
					},
					'on-success-save': ({ row, col, value, initRowIndex }) => {
						let data = [...this.value];
						data[initRowIndex][col] = value;
						this.$emit('input', data);
						this.$emit('on-success-save', { row, col, value, initRowIndex });
						this.edittingTd = '';
					},
					'on-fail-save': ({ row, col, value, initRowIndex }) => {
						this.$emit('on-fail-save', { row, col, value, initRowIndex });
					},
					'on-cancel-edit': () => {
						this.edittingTd = '';
					},
					'on-paste': (data) => {
						if (!this.paste) return;
						let value = [...this.value];
						let rowLength = data.length;
						let startSelect = this.startSelect;
						let endSelect = this.endSelect;
						let startRow = startSelect.row;
						let startCol = startSelect.col;
						let endRow = endSelect.row;
						let endCol = endSelect.col;
						let selectRow = endRow - startRow + 1;
						let selectCol = endCol - startCol + 1;
						// let lastColLength = value[0].length - startCol;
						// let lastRowLength = value.length - startRow;
						if (rowLength === 0) return;
						let colLength = data[0].length;
						if (colLength === 0) return;
						// 使用复制的数据替换原数据
						for (let r = 0; r < rowLength && r < selectRow; r++) {
							for (let c = 0; c < colLength && c < selectCol; c++) {
								let valueRow = startRow + r;
								let valueCol = startCol + c;
								if (typeof value[valueRow][valueCol] === 'object') {
									value[valueRow][valueCol].value = data[r][c];
								} else {
									value[valueRow][valueCol] = data[r][c];
								}
							}
						}
						// for (let r = startRow; r < selectRow; r++) {
						// 	for (let c = startCol; c < selectCol; c++) {
						// 		//
						// 	}
						// }
						this.$emit('input', value);
						this.$emit('on-paste', data);
						this._tableResize();
					}
				},
				key: 'table-item-key' + index,
				ref: 'itemTable' + index,
				attrs: {
					'data-index': index
				}
			});
		},
		_scrollToIndexRow (index) {
			index = parseInt(index);
			if (isNaN(index) || index >= this.insideTableData.length || index < 0) return;
			let scrollTop = index * this.itemRowHeight;
			this.$refs.outer.scrollTop = scrollTop;
			this.currentScrollToRowIndex = index;
			clearTimeout(this.timer);
			this.timer = setTimeout(() => {
				this.currentScrollToRowIndex = -1;
			}, 1800);
		},
    // 给表格数据添加行号，用于排序后正确修改数据
    setIndex (tableData) {
      return tableData.map((item, i) => {
        let row = item;
        row.initRowIndex = i;
        return row;
      });
    }
	}
};

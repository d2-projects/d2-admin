import { findNodeUpper, on, off, attr } from '../util';
export default {
	data () {
		return {
			edittingTd: '', // 正在编辑的单元格的行号和列号拼接的字符串 `${row}-${col}`
      editContent: '', // 用来保存编辑的内容
			selectCellsStart: {}, // 编辑模式下可选中多行多列，此用来保存其实单元格行列号
			selectCellsEnd: {},
			selectTotalColStartIndex: -1, // 选取整列起始序列号
			selectTotalColEndIndex: -1
		};
	},
	computed: {
		startSelect () {
			return {
				row: Math.min(this.selectCellsStart.row, this.selectCellsEnd.row),
				col: Math.min(this.selectCellsStart.col, this.selectCellsEnd.col)
			};
		},
		endSelect () {
			return {
				row: Math.max(this.selectCellsStart.row, this.selectCellsEnd.row),
				col: Math.max(this.selectCellsStart.col, this.selectCellsEnd.col)
			};
		}
	},
	methods: {
		_editCell (row, col) {
			if (!this.canEdit || row < 0 || row > this.insideTableData.length || col < 0 || col > this.columns.length || this.edittingTd === `${row}-${col}`) return;
			if (parseInt(this.edittingTd.split('-')[0]) !== row) this.scrollToRow(row);
			this.edittingTd = `${row}-${col}`;
		},
    getCurrentTd (e) {
      return e.target.tagName === 'TD' ? e.target : findNodeUpper(e.target, 'td');
    },
		handleMousedownOnTable (e) {
			if (e.button !== 0 || (!this.paste && !this.selectable)) return;
			let currentTd = this.getCurrentTd(e);
			this.selectCellsStart = {
				row: attr(currentTd, 'data-row'),
				col: attr(currentTd, 'data-col')
			};
			this.selectCellsEnd = {
				row: attr(currentTd, 'data-row'),
				col: attr(currentTd, 'data-col')
			};
			this.canSelectText = false;
			on(document, 'mousemove', this.handleMoveOnTable);
			on(document, 'mouseup', this.handleUpOnTable);
		},
		handleMoveOnTable (e) {
			if (!(e.target.tagName === 'TD' || findNodeUpper(e.target, 'td'))) return;
			let currentTd = this.getCurrentTd(e);
			this.selectCellsEnd = {
				row: attr(currentTd, 'data-row'),
				col: attr(currentTd, 'data-col')
			};
		},
		handleUpOnTable (e) {
			if (!this.paste && !this.selectable) return;
			this.canSelectText = true;
			this.handleMoveOnTable(e);
			off(document, 'mousemove', this.handleMoveOnTable);
			off(document, 'mouseup', this.handleUpOnTable);
			this.$emit('on-select-cells', {
				start: {
					row: this.startSelect.row,
					col: this.startSelect.col
				},
				end: {
					row: this.endSelect.row,
					col: this.endSelect.col
				}
			});
		}
	}
};
